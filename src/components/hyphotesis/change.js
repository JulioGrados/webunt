import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { message } from 'antd';

import { MEDIA_PATH } from 'utils/files/path'

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
    ButtonA, ButtonB, Url
  } from './styles';
import { useEvaluations, useSession } from '../../hooks';

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

export default function HypothesisChangeForm({evaluation}) {
  const router = useRouter();
  const rawPosition = router.query.position;
  const defaultPosition = normalizePositionEs(rawPosition);
  
  const [position, setPosition] = useState(evaluation && evaluation.position ? evaluation.position : '');
  const [title, setTitle] = useState(evaluation && evaluation.title ? evaluation.title : '');
  const [segment, setSegment] = useState(evaluation && evaluation.parent ? evaluation.parent._id ? evaluation.parent._id : '' : '');
  const [experiment, setExperiment] = useState(evaluation && evaluation.experiment ? evaluation.experiment : '');
  const [file, setFile] = useState(null);

  const { loggedUser } = useSession()
  const { list, create, update } = useEvaluations({user: loggedUser && loggedUser._id && loggedUser._id.toString()})
  
  useEffect(() => {
    if (defaultPosition && bmcPositions.includes(defaultPosition)) {
      setPosition(defaultPosition);
    }
  }, [defaultPosition]);

  console.log('evaluation', evaluation)

  const handleSubmit = async () => {
    if (!position || !title || !experiment) {
      message.info('Por favor, completa todos los campos.');
      return;
    }

    if(position === 'Segmentos de Clientes') {
      const countSegmentos = list.filter(item => item.position === 'Segmentos de Clientes').length || 0;
      const formData = new window.FormData()
      if (file) {
        formData.append('file', file)
      }
      formData.append('data', JSON.stringify({
        title: title,
        position: position,
        experiment: experiment,
        process: 'Testing',
        user: loggedUser._id,
        color: color[countSegmentos]
      }))
      const resp = await create(evaluation._id, formData)
      if(resp.success) {
        router.push('/evaluaciones')
      } else {
        message.info('Error al subir los elementos.');
      }
      return
    } else {
      if(segment && list.length > 0) {
        const formData = new window.FormData()
        if (file) {
          formData.append('file', file)
        }
        formData.append('data', JSON.stringify({
          title: title,
          position: position,
          experiment: experiment,
          process: 'Testing',
          user: loggedUser._id,
          parent: segment
        }))
        const resp = await update(evaluation._id, formData)
        if(resp.success) {
          router.push('/evaluaciones')
        } else {
          message.info('Error al subir los elementos.');
        }
        return
      } else {
        message.info('Debes agregar o seleccionar un segmento.');
      }
    }
    
  };

  const handleCancel = () => {
    router.push('/evaluaciones')
  }

  return (
    <Container>
        <h2 style={{textAlign: 'center'}}>Editar la hipótesis al Modelo de Negocio Canvas</h2>
        <h2 style={{textAlign: 'center', color: '#1A738D'}}>{title}</h2>
        <Section>
            <Label>1. Seleccionar posición</Label>
            <Grid>
            {bmcPositions.map((item) => (
                <Button key={item} active={position === item} onClick={() => setPosition(item)}>
                {item}
                </Button>
            ))}
            </Grid>
        </Section>

        <Section>
            <Label>2. Título</Label>
            <Input
            type="text"
            placeholder="Este título se mostrará en Canvas"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </Section>
        {position !== 'Segmentos de Clientes' && (
          <Section>
            <Label>3. Segmento de clientes</Label>
            <RadioGroup>
              {list
                .filter(item => item.position === 'Segmentos de Clientes')
                .map((item) => (
                  <label key={item._id}>
                    <input
                      type="radio"
                      name="segment"
                      value={item._id}
                      checked={segment === item._id}
                      onChange={() => setSegment(item._id)}
                    />{' '}
                    {item.title || 'Sin nombre'}
                  </label>
                ))}
            </RadioGroup>
          </Section>
        )}

        <Section>
            <Label>4. ¿Qué experimentos vas a realizar para probar esta hipótesis?</Label>
            <Textarea
            rows={3}
            placeholder="Describe tu experimento ..."
            value={experiment}
            onChange={(e) => setExperiment(e.target.value)}
            />
            {
                evaluation && evaluation.file && (
                    <Url target='_blank' href={`${MEDIA_PATH}${evaluation.file}`}>
                        {`${MEDIA_PATH}${evaluation.file}`}
                    </Url>
                )
            }
            <FileInput type="file" onChange={(e) => setFile(e.target.files[0])} />
        </Section>

        <Actions>
            <ButtonA onClick={handleSubmit}>Editar</ButtonA>
            <ButtonB onClick={handleCancel}>Cancelar</ButtonB>
        </Actions>
        </Container> 
  );
}
