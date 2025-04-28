import { HeaderSection } from '../../../components/header/admin/section'
import { Table } from '../../../components/table'
import { TableOptions } from '../../../components/table/options'

import Link from 'next/link'
import { Button, Input, Select } from 'antd'

export const InitiativeList = ({ initiatives, loading, loaded, handleDelete, role }) => {
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
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
          path='iniciativas'
          role={role}
          onDelete={handleDelete}
          confirm='¿Estas seguro de eliminar este iniciativa?'
        />
      )
    }
  ]

  return (
    <>
      <HeaderSection title={`Lista de iniciativas`}>
        <Link
          href={'/administrador/iniciativas/agregar'}
        >
          <Button type='primary'>Agregar iniciativa</Button>
        </Link>
      </HeaderSection>
      <Table
        columns={columns}
        dataSource={initiatives}
        loading={!loaded && loading}
        rowKey='_id'
        scroll={{ x: 800 }}
        size='middle'
        bordered
      />
    </>
  )
}
