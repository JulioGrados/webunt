import TaskItem from '../task';
import {Header, HeaderTitle, HeaderTitleCompany, HeaderButtons, HeaderOptions, HeaderbuttonHy, HeaderbuttonIn, Canvas, Column, Box, SplitColumn, Task, BottomRow, HalfBox, Footer} from './styles'

import {Title} from './title'
import FlaskFullIcon from './FlaskIcon';
import { FaMicrophoneAlt } from 'react-icons/fa';
import { useEvaluations, useSession } from '../../hooks';

import { message } from 'antd';
import { useRouter } from 'next/router';
import { Tabs } from 'antd';
import { TableHyphotesis } from '../table/hipothesis';
import { TableInterview } from '../table/interview';
import CommentLayout from '../comment';

const { TabPane } = Tabs;

const BMCLayout = ({user, result = false}) => {
  const router = useRouter();

  const { loggedUser } = useSession()
  const { list, create, update } = useEvaluations({user: user && user._id && user._id.toString(), result: result})
  // console.log('user', user)
  // console.log('list', list)

  const handleCreateHypothesis = (type) => {
    if(list.length) {
      router.push(`/evaluaciones/hipotesis/agregar?position=${type}`)
    } else {
      if(type === 'segmentos-de-clientes') {
        router.push(`/evaluaciones/hipotesis/agregar?position=${type}`)
      } else {
        message.info('Debes agregar un Segmento de cliente');
      }
    }
  }
  
  const handleCreateHypothesisAll = () => {
    router.push(`/evaluaciones/hipotesis/agregar`)
  }

  const handleAddInterview = () => {
    router.push(`/agregar-entrevista`)
  }

  const callback = (key) => {
    console.log(key);
  }

  return (
    <>
      <Header>
        <HeaderTitle>
          Modelo de Negocio Canvas <HeaderTitleCompany>[ {user && user.company && user.company.toUpperCase()} ]</HeaderTitleCompany>
        </HeaderTitle>
        <HeaderButtons>
          <div></div>
          <HeaderOptions>
            <HeaderbuttonHy onClick={handleCreateHypothesisAll}>
              Insertar Hipótesis
            </HeaderbuttonHy>
            <HeaderbuttonIn onClick={handleAddInterview}>
              Insertar Entevista
            </HeaderbuttonIn>
          </HeaderOptions>
        </HeaderButtons>
      </Header>
      <Canvas>
        {/* Primera fila */}
        <Column>
          <Box>
            <Title
              icons={
                <>
                  <div style={{cursor: 'pointer'}} onClick={() => handleCreateHypothesis('socios-clave')}>
                    <FlaskFullIcon />
                  </div>
                  {/* <div style={{marginTop: '5px'}} >
                    <FaMicrophoneAlt size={20} color="#777" />
                  </div> */}
                </>
              }
            >
              Socios Clave
            </Title>
            {list
            .filter(item => {
              return item.position === 'Socios Clave';
            })
            .map(item => {
              return (
                <TaskItem
                  key={item._id}
                  item={item}
                  process={item.process || 'Testing'}
                  title={item.title || 'sin título'}
                  date={item.date}
                  user={item.user?.names || 'sin usuario'}
                  color={item.parent?.color || 'red'}
                  dont={item.dont || 0}
                  nice={item.nice || 0}
                  must={item.must || 0}
                />
              );
            })}
          </Box>
        </Column>

        <Column>
          <SplitColumn>
            <Box medium>
              <Title
                icons={
                  <>
                    <div style={{cursor: 'pointer'}} onClick={() => handleCreateHypothesis('actividades-clave')}>
                      <FlaskFullIcon />
                    </div>
                    {/* <div style={{marginTop: '5px'}}>
                      <FaMicrophoneAlt size={20} color="#777" />
                    </div> */}
                  </>
                }
              >
                Actividades Clave
              </Title>
              {list
              .filter(item => {
                return item.position === 'Actividades Clave';
              })
              .map(item => {
                return (
                  <TaskItem
                    key={item._id}
                    item={item}
                    process={item.process || 'Testing'}
                    title={item.title || 'sin título'}
                    date={item.date}
                    user={item.user?.names || 'sin usuario'}
                    color={item.parent?.color || 'red'}
                    dont={item.dont || 0}
                    nice={item.nice || 0}
                    must={item.must || 0}
                  />
                );
              })}
            </Box>
            <Box medium>
            <Title
                icons={
                  <>
                    <div style={{cursor: 'pointer'}} onClick={() => handleCreateHypothesis('recursos-clave')}>
                      <FlaskFullIcon />
                    </div>
                    {/* <div style={{marginTop: '5px'}}>
                      <FaMicrophoneAlt size={20} color="#777" />
                    </div> */}
                  </>
                }
              >
                Recursos Clave
              </Title>
              {list
              .filter(item => {
                return item.position === 'Recursos Clave';
              })
              .map(item => {
                return (
                  <TaskItem
                    key={item._id}
                    item={item}
                    process={item.process || 'Testing'}
                    title={item.title || 'sin título'}
                    date={item.date}
                    user={item.user?.names || 'sin usuario'}
                    color={item.parent?.color || 'red'}
                    dont={item.dont || 0}
                    nice={item.nice || 0}
                    must={item.must || 0}
                  />
                );
              })}
            </Box>
          </SplitColumn>
        </Column>

        <Column>
          <Box>
            <Title
              icons={
                <>
                  <div style={{cursor: 'pointer'}} onClick={() => handleCreateHypothesis('propuestas-de-valor')}>
                    <FlaskFullIcon />
                  </div>
                  {/* <div style={{marginTop: '5px'}}>
                    <FaMicrophoneAlt size={20} color="#777" />
                  </div> */}
                </>
              }
            >
              Propuestas de Valor
            </Title>
            {list
            .filter(item => {
              return item.position === 'Propuestas de Valor';
            })
            .map(item => {
              return (
                <TaskItem
                  key={item._id}
                  item={item}
                  process={item.process || 'Testing'}
                  title={item.title || 'sin título'}
                  date={item.date}
                  user={item.user?.names || 'sin usuario'}
                  color={item.parent?.color || 'red'}
                  dont={item.dont || 0}
                  nice={item.nice || 0}
                  must={item.must || 0}
                />
              );
            })}
          </Box>
        </Column>

        <Column>
          <SplitColumn>
            <Box medium>
              <Title
                icons={
                  <>
                    <div style={{cursor: 'pointer'}} onClick={() => handleCreateHypothesis('relaciones-con-los-clientes')}>
                      <FlaskFullIcon />
                    </div>
                    {/* <div style={{marginTop: '5px'}}>
                      <FaMicrophoneAlt size={20} color="#777" />
                    </div> */}
                  </>
                }
              >
                Relaciones con los Clientes
              </Title>
              {list
              .filter(item => {
                return item.position === 'Relaciones con los Clientes';
              })
              .map(item => {
                return (
                  <TaskItem
                    key={item._id}
                    item={item}
                    process={item.process || 'Testing'}
                    title={item.title || 'sin título'}
                    date={item.date}
                    user={item.user?.names || 'sin usuario'}
                    color={item.parent?.color || 'red'}
                    dont={item.dont || 0}
                    nice={item.nice || 0}
                    must={item.must || 0}
                  />
                );
              })}
            </Box>
            <Box medium>
              <Title
                icons={
                  <>
                    <div style={{cursor: 'pointer'}} onClick={() => handleCreateHypothesis('canales')}>
                      <FlaskFullIcon />
                    </div>
                    {/* <div style={{marginTop: '5px'}}>
                      <FaMicrophoneAlt size={20} color="#777" />
                    </div> */}
                  </>
                }
              >
                Canales
              </Title>
              {list
              .filter(item => {
                return item.position === 'Canales';
              })
              .map(item => {
                return (
                  <TaskItem
                    key={item._id}
                    item={item}
                    process={item.process || 'Testing'}
                    title={item.title || 'sin título'}
                    date={item.date}
                    user={item.user?.names || 'sin usuario'}
                    color={item.parent?.color || 'red'}
                    dont={item.dont || 0}
                    nice={item.nice || 0}
                    must={item.must || 0}
                  />
                );
              })}
            </Box>
          </SplitColumn>
        </Column>

        <Column>
          <Box>
            <Title
              icons={
                <>
                  <div style={{cursor: 'pointer'}} onClick={() => handleCreateHypothesis('segmentos-de-clientes')}>
                    <FlaskFullIcon />
                  </div>
                  {/* <div style={{marginTop: '5px'}}>
                    <FaMicrophoneAlt size={20} color="#777" />
                  </div> */}
                </>
              }
            >
              Segmentos de Clientes
            </Title>
            {list
            .filter(item => {
              return item.position === 'Segmentos de Clientes';
            })
            .map(item => {
              return (
                <TaskItem
                  key={item._id}
                  item={item}
                  process={item.process || 'Testing'}
                  title={item.title || 'sin título'}
                  date={item.date}
                  user={item.user?.names || 'sin usuario'}
                  dont={item.dont || 0}
                  nice={item.nice || 0}
                  must={item.must || 0}
                  color={item.color || 'red'}
                />
              );
            })}
          </Box>
        </Column>
      </Canvas>

      {/* Segunda fila fuera del grid */}
      <BottomRow>
        <HalfBox>
          <Title
            icons={
              <>
                <div style={{cursor: 'pointer'}} onClick={() => handleCreateHypothesis('estructura-de-costos')}>
                  <FlaskFullIcon />
                </div>
                {/* <div style={{marginTop: '5px'}}>
                  <FaMicrophoneAlt size={20} color="#777" />
                </div> */}
              </>
            }
          >
            Estructura de Costos
          </Title>
          {list
          .filter(item => {
            return item.position === 'Estructura de Costos';
          })
          .map(item => {
            return (
              <TaskItem
                key={item._id}
                item={item}
                process={item.process || 'Testing'}
                title={item.title || 'sin título'}
                date={item.date}
                user={item.user?.names || 'sin usuario'}
                color={item.parent?.color || 'red'}
                dont={item.dont || 0}
                nice={item.nice || 0}
                must={item.must || 0}
              />
            );
          })}
        </HalfBox>
        <HalfBox>
          <Title
            icons={
              <>
                <div style={{cursor: 'pointer'}} onClick={() => handleCreateHypothesis('flujos-de-ingresos')}>
                  <FlaskFullIcon />
                </div>
                {/* <div style={{marginTop: '5px'}}>
                  <FaMicrophoneAlt size={20} color="#777" />
                </div> */}
              </>
            }
          >
            Flujos de ingresos
          </Title>
          {list
          .filter(item => {
            return item.position === 'Flujos de ingresos';
          })
          .map(item => {
            return (
              <TaskItem
                key={item._id}
                item={item}
                process={item.process || 'Testing'}
                title={item.title || 'sin título'}
                date={item.date}
                user={item.user?.names || 'sin usuario'}
                color={item.parent?.color || 'red'}
                dont={item.dont || 0}
                nice={item.nice || 0}
                must={item.must || 0}
              />
            );
          })}
        </HalfBox>
      </BottomRow>
      <Footer>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Hipótesis" key="1">
            <TableHyphotesis user={user} />
          </TabPane>
          <TabPane tab="Entrevistas" key="2">
            <TableInterview user={user} />
          </TabPane>
          <TabPane tab="Comentarios" key="3">
            <CommentLayout user={user} result={result} />
          </TabPane>
        </Tabs>
      </Footer>
    </>
  )
}
  
  export default BMCLayout;