import { HeaderSection } from '../../../components/header/admin/section'
import { Table } from '../../../components/table'
import { TableOptions } from '../../../components/table/options'

import Link from 'next/link'
import { Button, Input, Select } from 'antd'

export const QuestionList = ({ questions, loading, loaded, handleDelete, role }) => {
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'user',
      key: 'user',
      width: 200,
      render: user => user ? (user.email ? user.email : '') : ''
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
          path='cuestionario'
          role={role}
          onDelete={handleDelete}
          confirm='¿Estas seguro de eliminar este question?'
        />
      )
    }
  ]

  return (
    <>
      <HeaderSection title={`Lista de cuestionario`}>
        <Link
          href={'/administrador/cuestionario/agregar'}
        >
          <Button type='primary'>Agregar cuestionario</Button>
        </Link>
      </HeaderSection>
      <Table
        columns={columns}
        dataSource={questions}
        loading={!loaded && loading}
        rowKey='_id'
        scroll={{ x: 800 }}
        size='middle'
        bordered
      />
    </>
  )
}
