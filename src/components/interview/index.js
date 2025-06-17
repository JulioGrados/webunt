import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Container, Section, Label, Grid, Button, Input,
  Textarea, FileInput, Actions, RadioGroup, LabelSub,
  ButtonA, ButtonB
} from './styles';
import { FaThumbsUp, FaRegThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { useEvaluations, useInterviews, useSession } from '../../hooks';
import { message } from 'antd';

const TIPOS_ENTREVISTA = ['Presencial', 'Llamada', 'Correo', 'Videollamada'];
const POSICIONES_BMC = [
  'Socios Clave', 'Actividades Clave', 'Recursos Clave', 'Propuestas de Valor',
  'Relaciones con los Clientes', 'Canales', 'Segmentos de Clientes',
  'Estructura de Costos', 'Flujos de Ingresos'
];

export default function Entrevistas({ }) {
  const router = useRouter();
  const [empresa, setEmpresa] = useState('');
  const [cargo, setCargo] = useState('');
  const [nombre, setNombre] = useState('');
  const [tipoEntrevista, setTipoEntrevista] = useState('');
  const [fecha, setFecha] = useState('');
  const [posicionSeleccionada, setPosicionSeleccionada] = useState('');
  // const [valoraciones, setValoraciones] = useState({});
  // const [seleccionHipotesis, setSeleccionHipotesis] = useState(null);
  const [insight, setInsight] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [archivo, setArchivo] = useState(null);

  const { loggedUser } = useSession()
  const { list, reload } = useEvaluations({user: loggedUser && loggedUser._id && loggedUser._id.toString()})
  const { create, update } = useInterviews({user: loggedUser && loggedUser._id && loggedUser._id.toString()})

  const [selecciones, setSelecciones] = useState([]); // array de objetos { position, hypothesisId, rating }

  const handleSeleccion = (posicion, idHipotesis, valor) => {
    setSelecciones((prev) => {
      const filtrado = prev.filter(s => s.position !== posicion);
      return [...filtrado, { position: posicion, hypothesisId: idHipotesis, rating: valor }];
    });
  };

  const getSeleccion = (posicion) => selecciones.find(s => s.position === posicion);

  const handleGuardar = async () => {
    if (!empresa || !cargo || !nombre || !tipoEntrevista || !fecha || !insight || !descripcion || selecciones.length === 0) {
      message.info('Debes completar el formulario.');
      return;
    }
    const formData = new window.FormData()
    if (archivo) {
      formData.append('file', archivo)
    }
    formData.append('data', JSON.stringify({
      company: empresa,
      load: cargo,
      name: nombre,
      engagement: tipoEntrevista,
      date: fecha,
      keys: insight,
      description: descripcion,
      hyphotesis: selecciones,
      user: loggedUser._id
    }))
    const resp = await create(formData)
    console.log('resp', resp)
    if(resp.success) {
      reload()
      router.push('/evaluaciones')
    } else {
      message.info('Error al subir los elementos.');
    }
    // console.log({ empresa, cargo, nombre, tipoEntrevista, fecha, insight, descripcion, archivo, selecciones });
    // alert('Entrevista guardada con éxito.');
  };

  const handleCancel = () => {
    router.push('/evaluaciones')
  }
  return (
    <Container>
      <h1>Insertar nueva entrevista de cliente</h1>

      <Section>
        <Label>1. ¿A quién entrevistaste?</Label>
        <Input placeholder="Empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
        <Input placeholder="Cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} />
        <Input placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </Section>

      <Section>
        <Label>2. Tipo de entrevista y fecha</Label>
        <LabelSub>¿Cómo fue la entrevista?</LabelSub>
        <RadioGroup>
          {TIPOS_ENTREVISTA.map((tipo) => (
            <label key={tipo}>
              <input
                type="radio"
                name="tipoEntrevista"
                value={tipo}
                checked={tipoEntrevista === tipo}
                onChange={() => setTipoEntrevista(tipo)}
              /> {tipo}
            </label>
          ))}
        </RadioGroup>
        <LabelSub>¿Fecha de la entrevista?</LabelSub>
        <Input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
      </Section>

      <Section>
        <Label>3. Principales aprendizajes</Label>
        <Input
          placeholder="Insight 1, Insight 2"
          value={insight}
          onChange={(e) => setInsight(e.target.value)}
        />
        <LabelSub>Descripción de la entrevista</LabelSub>
        <Textarea
          rows={4}
          placeholder="Describe lo aprendido o registrado en la entrevista"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <FileInput type="file" onChange={(e) => setArchivo(e.target.files[0])} />
      </Section>

      
      <LabelSub>Seleccionar posición del BMC</LabelSub>
      <Grid>
        {POSICIONES_BMC.map(pos => {
          const seleccion = getSeleccion(pos);
          return (
            <Button
              key={pos}
              active={posicionSeleccionada === pos}
              style={{
                background: seleccion ? '#9ccc65' : posicionSeleccionada === pos ? '#ffe066' : '#f1f1f1',
                fontWeight: seleccion ? 'bold' : 'normal'
              }}
              onClick={() => setPosicionSeleccionada(pos)}
            >
              {pos}
            </Button>
          );
        })}
      </Grid>
      
      {posicionSeleccionada && (
        <Section style={{marginTop: '20px'}}>
          <Label>Hipótesis validadas o invalidadas - {posicionSeleccionada}</Label>
          {(list || []).filter(h => h.position === posicionSeleccionada).map(h => {
            const seleccion = getSeleccion(posicionSeleccionada);
            return (
              <div key={h._id} style={{marginBottom: '20px', marginLeft: '15px'}}>
                <label style={{fontWeight: '400', fontSize: '15px', marginBottom: '15px'}}>
                  <input
                    type="radio"
                    name={`hipotesis-${posicionSeleccionada}`}
                    value={h._id}
                    checked={seleccion?.hypothesisId === h._id}
                    onChange={() => handleSeleccion(posicionSeleccionada, h._id, seleccion?.rating || '')}
                  /> {h.title}
                </label>
                {seleccion?.hypothesisId === h._id && (
                  <RadioGroup style={{marginTop: '15px', marginLeft: '15px'}}>
                    <label>
                      <input
                        type="radio"
                        name={`valor-${posicionSeleccionada}-${h._id}`}
                        checked={seleccion.rating === 'No Importa'}
                        onChange={() => handleSeleccion(posicionSeleccionada, h._id, 'No Importa')}
                      /> <FaThumbsDown color="#f44336" style={{ marginRight: 6 }} /> No importa
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={`valor-${posicionSeleccionada}-${h._id}`}
                        checked={seleccion.rating === 'Bueno Tener'}
                        onChange={() => handleSeleccion(posicionSeleccionada, h._id, 'Bueno Tener')}
                      /> <FaRegThumbsUp style={{ marginRight: 6 }} /> Es bueno tenerlo
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={`valor-${posicionSeleccionada}-${h._id}`}
                        checked={seleccion.rating === 'Debe Tener'}
                        onChange={() => handleSeleccion(posicionSeleccionada, h._id, 'Debe Tener')}
                      /> <FaThumbsUp color="#00bcd4" style={{ marginRight: 6 }} /> Imprescindible
                    </label>
                  </RadioGroup>
                )}
              </div>
            );
          })}
        </Section>
      )}

      <Actions>
        <ButtonA onClick={handleGuardar}>Guardar</ButtonA>
        <ButtonB onClick={handleCancel}>Cancelar</ButtonB>
      </Actions>
    </Container>
  );
}