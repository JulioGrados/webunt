import Link from 'next/link'
import Router from 'next/router'
import { useState } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { NavBar } from '../../containers/navbar'
import moment from 'moment'

import { FunnelPlotOutlined, CustomerServiceOutlined } from '@ant-design/icons'

import {
  BaseLogo,
  BaseLogoImg,
  BaseLayout,
  BaseContent,
  BaseBody,
  BaseFooter
} from './styles'

moment.locale('es')

const { Sider } = Layout

export const Base = ({ current, currentMenu, children }) => {
  const [collapsed, onCollapse] = useState(false)
  return (
    <BaseLayout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => onCollapse(!collapsed)}
      >
        <BaseLogo>
          <BaseLogoImg src={`/static/img/logo.png`} alt='logo' />
        </BaseLogo>
        <Menu
          theme='dark'
          selectedKeys={current}
          defaultOpenKeys={[currentMenu]}
          mode='inline'
        >
          <Menu.Item key='home'>
            <Link href='/administrador'>
              <a>
                <Icon type='home' />
                <span>Inicio</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key='user-list'>
            <Link href='/administrador/usuarios'>
              <a>
                <Icon type='user' />
                <span>Usuarios</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key='mentor-list'>
            <Link href='/administrador/mentores'>
              <a>
                <Icon type="smile" />
                <span>Mentores</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key='team-list'>
            <Link href='/administrador/equipo'>
              <a>
                <Icon type="apartment" />
                <span>Equipo</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key='ally-list'>
            <Link href='/administrador/aliados'>
              <a>
                <Icon type="fork" />
                <span>Aliados</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key='goal-list'>
            <Link href='/administrador/metas'>
              <a>
                <Icon type="thunderbolt" />
                <span>Metas</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key='initiative-list'>
            <Link href='/administrador/iniciativas'>
              <a>
                <Icon type="schedule" />
                <span>iniciativas</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key='portfolio-list'>
            <Link href='/administrador/portafolio'>
              <a>
                <Icon type="solution" />
                <span>Portafolio</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key='program-list'>
            <Link href='/administrador/programas'>
              <a>
                <Icon type="gold" />
                <span>Programas</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key='welcome-list'>
            <Link href='/administrador/bienvenida'>
              <a>
                <Icon type="form" />
                <span>Bienvenida</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key='question-list'>
            <Link href='/administrador/cuestionario'>
              <a>
                <Icon type="aliwangwang" />
                <span>Cuestionarios</span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key='upload-list'>
            <Link href='/administrador/archivos'>
              <a>
                <Icon type="upload" />
                <span>Archivos</span>
              </a>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <BaseContent>
        <NavBar />
        <BaseBody>{children}</BaseBody>
        <BaseFooter>INCUBAUNT ©2025</BaseFooter>
      </BaseContent>
    </BaseLayout>
  )
}
