import { HeaderSection } from '../../../components/header/admin/section'
import { Table } from '../../../components/table'
import { TableOptions } from '../../../components/table/options'

import Link from 'next/link'
import { Button, Input, Select } from 'antd'

export const AllyList = ({ allys, loading, loaded, handleDelete, role }) => {
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
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
          path='aliados'
          role={role}
          onDelete={handleDelete}
          confirm='¿Estas seguro de eliminar este aliado?'
        />
      )
    }
  ]

  return (
    <>
      <HeaderSection title={`Lista de aliados`}>
        <Link
          href={'/administrador/aliados/agregar'}
        >
          <Button type='primary'>Agregar aliado</Button>
        </Link>
      </HeaderSection>
      <Table
        columns={columns}
        dataSource={allys}
        loading={!loaded && loading}
        rowKey='_id'
        scroll={{ x: 800 }}
        size='middle'
        bordered
      />
    </>
  )
}
