import { HeaderSection } from '../../../components/header/admin/section'
import { Table } from '../../../components/table'
import { TableOptions } from '../../../components/table/options'

import Link from 'next/link'
import { Button, Input, Select } from 'antd'

export const ProtfolioList = ({ portfolios, loading, loaded, handleDelete, role }) => {
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      width: 200,
      // ...SearchRow('mobile', 'Buscar por celular')
    },
    {
      title: 'Equipo',
      dataIndex: 'team',
      key: 'team',
      width: 200,
      // ...SearchRow('mobile', 'Buscar por celular')
    },
    {
      title: 'Fundación',
      dataIndex: 'foundation',
      key: 'foundation',
      width: 200,
      // ...SearchRow('mobile', 'Buscar por celular')
    },
    {
      title: 'Enlace',
      dataIndex: 'link',
      key: 'link',
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
          path='portafolio'
          role={role}
          onDelete={handleDelete}
          confirm='¿Estas seguro de eliminar este portafolio?'
        />
      )
    }
  ]

  return (
    <>
      <HeaderSection title={`Lista del portafolio`}>
        <Link
          href={'/administrador/portafolio/agregar'}
        >
          <Button type='primary'>Agregar portafolio</Button>
        </Link>
      </HeaderSection>
      <Table
        columns={columns}
        dataSource={portfolios}
        loading={!loaded && loading}
        rowKey='_id'
        scroll={{ x: 800 }}
        size='middle'
        bordered
      />
    </>
  )
}
