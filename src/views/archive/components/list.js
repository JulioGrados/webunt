import { HeaderSection } from '../../../components/header/admin/section'
import { Table } from '../../../components/table'
import { TableOptions } from '../../../components/table/options'

import Link from 'next/link'
import { Button, Input, Select } from 'antd'

export const ArchivesList = ({ archives, loading, loaded, handleDelete, role }) => {
  const columns = [
    {
        title: 'Usuario',
        dataIndex: 'linked',
        key: 'linked',
        width: 200,
        render: linked => linked ? (linked.email ? linked.email : '') : ''
        // ...SearchRow('mobile', 'Buscar por celular')
    },
    {
      title: 'Nombre',
      dataIndex: 'text',
      key: 'text',
      width: 200,
      // ...SearchRow('mobile', 'Buscar por celular')
    },
    {
        title: 'Url',
        dataIndex: 'file',
        key: 'file',
        width: 200,
        // ...SearchRow('mobile', 'Buscar por celular')
      },
      {
        title: 'Archivo',
        dataIndex: 'name',
        key: 'name',
        width: 200,
        // ...SearchRow('mobile', 'Buscar por celular')
      }
  ]

  return (
    <>
      <HeaderSection title={`Lista de archivos`}>
        
      </HeaderSection>
      <Table
        columns={columns}
        dataSource={archives}
        loading={!loaded && loading}
        rowKey='_id'
        scroll={{ x: 800 }}
        size='middle'
        bordered
      />
    </>
  )
}
