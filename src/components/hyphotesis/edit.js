import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { message } from 'antd';
import { MEDIA_PATH } from 'utils/files/path'
import { FaThumbsUp, FaThumbsDown, FaRegThumbsUp } from 'react-icons/fa';

const bmcPositions = [
  'Socios Clave', 'Actividades Clave', 'Recursos Clave', 'Propuestas de Valor',
  'Relaciones con los Clientes', 'Canales', 'Segmentos de Clientes',
  'Estructura de Costos', 'Flujos de Ingresos'
];

const color = ['blue', 'orange', 'aqua', 'purple', 'green']

const customerSegments = ['Segmento 1', 'Segmento 2', 'Segmento 3'];

import {
    Container, Section, Label, Grid, Button,
    Input, Textarea, FileInput, Actions, RadioGroup,
    ButtonA, ButtonB, Text, Url, Interviews, Bar, BarEdit, BarDelete
  } from './styles';
import { useEvaluations, useSession } from '../../hooks';
import { listEvaluations } from 'utils/api/evaluations';

const normalizePositionEs = (value) => {
  if (!value) return '';
  const lowercaseWords = ['de', 'con', 'y', 'para', 'en', 'del', 'a', 'los'];

  return value
    .split('-')
    .map((word, i) => {
      if (i > 0 && lowercaseWords.includes(word)) {
        return word; // no capitalizar
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

export default function HypothesisEditForm({evaluation}) {
  const router = useRouter();
  const rawPosition = router.query.position;
  const defaultPosition = normalizePositionEs(rawPosition);
  
  const [position, setPosition] = useState(evaluation && evaluation.position ? evaluation.position : '');
  const [title, setTitle] = useState(evaluation && evaluation.title ? evaluation.title : '');
  const [segment, setSegment] = useState('');
  const [experiment, setExperiment] = useState(evaluation && evaluation.experiment ? evaluation.experiment : '');
  const [file, setFile] = useState(evaluation && evaluation.file ? evaluation.file : '');

  const [process, setProcess] = useState(evaluation?.process || 'Testing');
  const [reason, setReason] = useState('');
  const [reasons, setReasons] = useState([]);

  const { loggedUser } = useSession()
  const { list, create, update, remove, reload } = useEvaluations({user: loggedUser && loggedUser._id && loggedUser._id.toString()})
  
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await listEvaluations({query: {parent: evaluation._id}}) // puede ser externo también
        setLoading(true)
        setData(res)
      } catch (error) {
        console.error('Error al obtener los datos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])
  
  useEffect(() => {
    if (defaultPosition && bmcPositions.includes(defaultPosition)) {
      setPosition(defaultPosition);
    }
  }, [defaultPosition]);

    const handleSubmit = async () => {
        if (process === 'Testing') {
        message.info('Por favor, seleccione otra opción.');
        return;
        }
        const formData = new window.FormData();
        formData.append('data', JSON.stringify({
            process: process,
            processWhy: reason
        }))
        const resp = await update(evaluation._id, formData)
        if (resp.success){
            reload();
            router.push('/evaluaciones')
        } else {
            message.info('Ocurrio un error en el cambio.');
        }
    }

  const handleCancel = () => {
    router.push('/evaluaciones')
  }

  const toggleReason = (item) => {
    setReasons(prev => prev.includes(item)
      ? prev.filter(i => i !== item)
      : [...prev, item]);
  };

  const handleDelete = async () => {
    if(data.length) {
      message.info('Debes eliminar las hipótesis asociadas para eliminarla.');
    } else {
      const resp = await remove(evaluation._id)
      console.log('resp', resp)
      if(resp.success) {
        reload();
        router.push('/evaluaciones')
      }
    }
  }

  const handleEdit = () => {
    router.push(`/evaluaciones/${evaluation._id}/editar`)
  }

  console.log('data', data)

  return (
    <Container>
        <h2 style={{textAlign: 'center'}}>Hipótesis del Modelo de Negocio Canvas</h2>
        <h2 style={{textAlign: 'center', color: '#1A738D'}}>{title}</h2>
        <Section>
            <Bar>
              <BarEdit onClick={handleEdit}>
                Ir a Editar
              </BarEdit>
              <BarDelete onClick={handleDelete}>
                Eliminar
              </BarDelete>
            </Bar>
        </Section>
        <Section>
            <Label>Posición seleccionada</Label>
            <Grid>
            {bmcPositions.map((item) => (
                <Button key={item} active={position === item} >
                {item}
                </Button>
            ))}
            </Grid>
        </Section>

        {position === 'Segmentos de Clientes' && (
          <Section>
            <Label>Hipótesis relacionadas</Label>
            {
                data && data.length && data.map(item => <Text>{item.title}</Text>)
            }
          </Section>
        )}
        
        <Section>
            <Label>Valoración de Entrevistas</Label>
            <Interviews>
                <span style={{marginLeft: '15px'}}><FaThumbsUp color="#00bcd4" /> {evaluation.dont}</span>
                <span style={{marginLeft: '15px'}}><FaRegThumbsUp /> {evaluation.nice}</span>
                <span style={{marginLeft: '15px'}}><FaThumbsDown color="#f44336" /> {evaluation.must}</span>
            </Interviews>
        </Section>

        <Section>
            <Label>Experimento</Label>
            <Text>
                {experiment}
            </Text>
            {
                file && (
                    <Url target='_blank' href={`${MEDIA_PATH}${file}`}>
                        {`${MEDIA_PATH}${file}`}
                    </Url>
                )
            }
        </Section>
        <Section>
            <Label>Estado de la hipótesis</Label>
            <RadioGroup>
            <label style={{marginLeft: '15px'}}>
                <input
                type="radio"
                name="estado"
                value="Validated"
                checked={process === 'Validated'}
                onChange={() => setProcess('Validated')}
                /> Validada
            </label>
            <label style={{marginLeft: '15px'}}>
                <input
                type="radio"
                name="estado"
                value="Testing"
                checked={process === 'Testing'}
                onChange={() => setProcess('Testing')}
                /> En pruebas
            </label>
            <label style={{marginLeft: '15px'}}>
                <input
                type="radio"
                name="estado"
                value="Invalidated"
                checked={process === 'Invalidated'}
                onChange={() => setProcess('Invalidated')}
                /> Invalidada
            </label>
            </RadioGroup>
        </Section>

        {process === 'Validated' && (
            <Section style={{marginLeft: '25px'}}>
                <Label>¿Por qué se validó esta hipótesis?</Label>
                <Textarea
                    rows={3}
                    placeholder="Ej: Esta hipótesis se validó porque..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                />
            </Section>
        )}

        {process === 'Invalidated' && (
            <Section style={{marginLeft: '25px'}}>
                <Label>¿Por qué se invalidó esta hipótesis?</Label>
                <RadioGroup>
                    {[
                    'Los clientes no lo valoran',
                    'Es parte de un pivot importante',
                    'Fallaron la mayoría de experimentos',
                    'Recomendación de mentor/instructor',
                    'Otro'
                    ].map(op => (
                    <label key={op}>
                        <input
                        type="checkbox"
                        checked={reasons.includes(op)}
                        onChange={() => toggleReason(op)}
                        /> {op}
                    </label>
                    ))}
                </RadioGroup>
                <Textarea
                    rows={2}
                    placeholder="Detalle adicional (opcional)"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                />
            </Section>
        )}
        <Actions>
            <ButtonA onClick={handleSubmit}>Cambiar</ButtonA>
            <ButtonB onClick={handleCancel}>Cancelar</ButtonB>
        </Actions>
        </Container> 
  );
}
