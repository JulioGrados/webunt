import { HeaderSection } from '../../../components/header/admin/section'
import { Table } from '../../../components/table'
import { TableOptions } from '../../../components/table/options'

import Link from 'next/link'
import { Button, Input, Select } from 'antd'

export const UserList = ({ users, loading, loaded, handleDelete, role }) => {
  const columns = [
    {
      title: 'Nombres Completos',
      dataIndex: 'names',
      key: 'names',
      width: 200,
      // ...SearchRow('names', 'Buscar por nombres y apellidos.')
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 200,
      // ...SearchRow('email', 'Buscar por email.')
    },
    {
      title: 'Celular',
      dataIndex: 'mobile',
      key: 'mobile',
      width: 200,
      // ...SearchRow('mobile', 'Buscar por celular')
    },
    {
      title: 'Número de documento',
      dataIndex: 'dni',
      key: 'dni',
      width: 200,
      // ...SearchRow('dni', 'Buscar por dni')
    },
    {
      title: 'Rol',
      dataIndex: 'rol',
      key: 'rol',
      width: 200,
    },
    {
      title: 'Opciones',
      dataIndex: '_id',
      key: '_id',
      width: 100,
      render: _id => (
        <TableOptions
          id={_id}
          path='usuarios'
          role={role}
          onDelete={handleDelete}
          confirm='¿Estas seguro de eliminar este usuario?'
        />
      )
    }
  ]

  return (
    <>
      <HeaderSection title={`Lista de ${role || 'usuario'}s`}>
        <Link
          href={'/administrador/usuarios/agregar'}
        >
          <Button type='primary'>Agregar usuario</Button>
        </Link>
      </HeaderSection>
      <Table
        columns={columns}
        dataSource={users}
        loading={!loaded && loading}
        rowKey='_id'
        scroll={{ x: 800 }}
        size='middle'
        bordered
      />
    </>
  )
}
