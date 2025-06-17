import React, { useEffect, useState } from 'react';
import { Results } from './styles';
import { useEvaluations, useSession, useUsers } from '../../hooks'
import Router from 'next/router'

import { Select } from 'antd';
import BMCLayout from '../bmc';

const { Option } = Select;

const Result = ({}) => {
    const {loggedUser} = useSession()
    const { users, detail } = useUsers({})
    const { list, reload } = useEvaluations({})
    const [user, setUser] = useState(null)
    

    const onChange = async(value) => {
        const resp = await detail(value, {})
        if(resp.success) {
            console.log(value)
            console.log('list', list)
            reload()
            setUser(resp)
        }
    }
    // console.log('users', users)
    return (
        <>
        {
            loggedUser && (loggedUser.rol === 'externo' || loggedUser.rol === 'administrador') && (
                <> 
                    <Results>
                        <Select
                            showSearch
                            style={{ width: '100%' }}
                            placeholder="Selecciona a un usuario"
                            optionFilterProp="children"
                            onChange={onChange}
                            filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                users && users.length && users.map(item => <Option key={item._id} value={item._id}>{item.names + ' - ' + item.company}</Option> )
                            }
                        </Select>
                    </Results>
                    {user && (
                        <BMCLayout user={user} result={true} />
                    )}
                </>
            )
        }
        </>
    )
}

export default Result