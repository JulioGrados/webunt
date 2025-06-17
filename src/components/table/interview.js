import { Table } from 'antd';
import moment from 'moment';

import { TableBody } from './styles'
import { useInterviews, useSession } from '../../hooks';
import { MEDIA_PATH } from 'utils/files/path'

export const TableInterview = () => {
    const { loggedUser } = useSession()
    const { list  } = useInterviews({user: loggedUser && loggedUser._id && loggedUser._id.toString()})
    
    const columns = [
        {
            title: 'Compañia',
            dataIndex: 'company',
            key: 'company',
        },
        {
            title: 'Cargo',
            dataIndex: 'load',
            key: 'load',
        },
        {
            title: 'Nombres',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Formato',
            dataIndex: 'engagement',
            key: 'engagement',
        },
        {
            title: 'Palabras clave',
            dataIndex: 'keys',
            key: 'keys',
        },
        {
            title: 'Descripción',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Archivo',
            dataIndex: 'file',
            key: 'file',
            render: file => file ? <a target='_blank' href={`${MEDIA_PATH}${file}`}>Ir al archivo</a> : ''
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
