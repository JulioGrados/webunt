import { Table } from 'antd';
import moment from 'moment';

import { TableBody } from './styles'
import { useEvaluations, useSession } from '../../hooks';

export const TableHyphotesis = ({user}) => {
    // const { loggedUser } = useSession()
    const { list  } = useEvaluations({user: user && user._id && user._id.toString()})
    
    const columns = [
        {
            title: 'Título',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Canal',
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: 'Validación',
            dataIndex: 'process',
            key: 'process',
        },
        {
            title: 'Segmento de clientes',
            dataIndex: 'parent',
            key: 'parent',
            render: parent => parent ? parent.title : ''
        },
        {
            title: 'Fecha',
            dataIndex: 'date',
            key: 'date',
            render: date => date ? moment(date).format('DD-MM-YYYY') : ''
        },
    ]

    return (
        <Table columns={columns} dataSource={list} />
    )
}
