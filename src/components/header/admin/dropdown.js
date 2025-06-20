import { Menu, Dropdown, Icon } from 'antd'
import { NavBarDropDownContent } from './styles'

import Router from 'next/router'

const menu = (handleLogout, user) => {
  console.log('user', user)
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
        user && user.rol === 'externo' && (
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
        user && user.rol === 'administrador' && (
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
        user && user.rol === 'emprendedor' && (
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
      {
        user && user.rol === 'administrador' && (
          <Menu.Item>
            <a
              rel='noopener noreferrer'
              href='/administrador'
            >
              Administrador
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
