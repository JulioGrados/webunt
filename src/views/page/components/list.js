import { HeaderSection } from '../../../components/header/admin/section'
import { Table } from '../../../components/table'
import { TableOptions } from '../../../components/table/options'

import Link from 'next/link'
import { Button, Input, Select } from 'antd'

export const PageList = ({ pages, loading, loaded, handleDelete, role }) => {
  const columns = [
    {
      title: 'Página',
      dataIndex: 'page',
      key: 'page',
      width: 200,
      // ...SearchRow('names', 'Buscar por nombres y apellidos.')
    },
    {
      title: 'Título',
      dataIndex: 'title',
      key: 'title',
      width: 200,
      // ...SearchRow('email', 'Buscar por email.')
    },
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
          path='paginas'
          role={role}
          onDelete={handleDelete}
          confirm='¿Estas seguro de eliminar esta página?'
        />
      )
    }
  ]

  return (
    <>
      <HeaderSection title={`Lista de páginas`}>
        <Link
          href={'/administrador/paginas/agregar'}
        >
          <Button type='primary'>Agregar página</Button>
        </Link>
      </HeaderSection>
      <Table
        columns={columns}
        dataSource={pages}
        loading={!loaded && loading}
        rowKey='_id'
        scroll={{ x: 800 }}
        size='middle'
        bordered
      />
    </>
  )
}
