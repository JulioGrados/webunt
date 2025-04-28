import { HeaderSection } from '../../../components/header/admin/section'
import { Table } from '../../../components/table'
import { TableOptions } from '../../../components/table/options'

import Link from 'next/link'
import { Button, Input, Select } from 'antd'

export const GoalList = ({ goals, loading, loaded, handleDelete, role }) => {
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      width: 200,
      // ...SearchRow('mobile', 'Buscar por celular')
    },
    {
      title: 'Número',
      dataIndex: 'number',
      key: 'number',
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
          path='metas'
          role={role}
          onDelete={handleDelete}
          confirm='¿Estas seguro de eliminar esta meta?'
        />
      )
    }
  ]

  return (
    <>
      <HeaderSection title={`Lista de metas`}>
        <Link
          href={'/administrador/metas/agregar'}
        >
          <Button type='primary'>Agregar meta</Button>
        </Link>
      </HeaderSection>
      <Table
        columns={columns}
        dataSource={goals}
        loading={!loaded && loading}
        rowKey='_id'
        scroll={{ x: 800 }}
        size='middle'
        bordered
      />
    </>
  )
}
