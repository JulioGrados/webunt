import { HeaderSection } from '../../../components/header/admin/section'
import { Table } from '../../../components/table'
import { TableOptions } from '../../../components/table/options'

import Link from 'next/link'
import { Button, Input, Select } from 'antd'

export const WelcomeList = ({ welcomes, loading, loaded, handleDelete, role }) => {
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'user',
      key: 'user',
      width: 200,
      render: user => user.email ? user.email : ''
      // ...SearchRow('mobile', 'Buscar por celular')
    },
    {
      title: 'Opciones',
      dataIndex: '_id',
      key: '_id',
      width: 100,
      render: _id => (
        <TableOptions
          id={_id}
          path='bienvenida'
          role={role}
          onDelete={handleDelete}
          confirm='¿Estas seguro de eliminar este welcome?'
        />
      )
    }
  ]

  return (
    <>
      <HeaderSection title={`Lista de bienvenida`}>
        <Link
          href={'/administrador/bienvenida/agregar'}
        >
          <Button type='primary'>Agregar bienvenida</Button>
        </Link>
      </HeaderSection>
      <Table
        columns={columns}
        dataSource={welcomes}
        loading={!loaded && loading}
        rowKey='_id'
        scroll={{ x: 800 }}
        size='middle'
        bordered
      />
    </>
  )
}
