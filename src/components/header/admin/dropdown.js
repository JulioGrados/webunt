import { Menu, Dropdown, Icon } from 'antd'
import { NavBarDropDownContent } from './styles'

import Router from 'next/router'

const menu = (handleLogout, user) => {
  return (
    <Menu>
      <Menu.Item>
        <a
          rel='noopener noreferrer'
          href='/editar-perfil'
        >
          Editar perfil
        </a>
      </Menu.Item>
      {
        user && user.rol === 'emprendedor' && (
          <Menu.Item>
            <a
              rel='noopener noreferrer'
              href='/subir-archivos'
            >
              Subir archivos
            </a>
          </Menu.Item>
        )
      }

      {
        user && user.rol === 'emprendedor' && (
          <Menu.Item>
            <a
              rel='noopener noreferrer'
              href='/resultados'
            >
              Resultados
            </a>
          </Menu.Item>
        )
      }

{
        user && user.rol === 'exterior' && (
          <Menu.Item>
            <a
              rel='noopener noreferrer'
              href='/evaluaciones'
            >
              Evaluaciones
            </a>
          </Menu.Item>
        )
      }
      <Menu.Item>
        <a onClick={handleLogout} rel='noopener noreferrer'>
          Cerrar sesión
        </a>
      </Menu.Item>
    </Menu>
  )
}

export const DropDown = ({ handleLogout, user }) => {
  const handleProfile = () => {
    Router.push('editar-perfil')
  }
  
  return (
    <Dropdown overlay={menu(handleLogout, user)}>
      <NavBarDropDownContent className='ant-dropdown-link' href='#'>
        {user && user.names} <Icon type='down' />
      </NavBarDropDownContent>
    </Dropdown>
  )
}
