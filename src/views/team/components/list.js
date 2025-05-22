import { HeaderSection } from '../../../components/header/admin/section'
import { Table } from '../../../components/table'
import { TableOptions } from '../../../components/table/options'

import Link from 'next/link'
import { Button, Input, Select } from 'antd'

export const TeamList = ({ teams, loading, loaded, handleDelete, role }) => {
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'names',
      key: 'names',
      width: 200,
      // ...SearchRow('mobile', 'Buscar por celular')
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      key: 'description',
      width: 200,
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
          path='equipo'
          role={role}
          onDelete={handleDelete}
          confirm='¿Estas seguro de eliminar este integrante?'
        />
      )
    }
  ]

  return (
    <>
      <HeaderSection title={`Lista de equipo`}>
        <Link
          href={'/administrador/equipo/agregar'}
        >
          <Button type='primary'>Agregar equipo</Button>
        </Link>
      </HeaderSection>
      <Table
        columns={columns}
        dataSource={teams}
        loading={!loaded && loading}
        rowKey='_id'
        scroll={{ x: 800 }}
        size='middle'
        bordered
      />
    </>
  )
}
