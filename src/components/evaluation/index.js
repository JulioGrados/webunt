import React, { useEffect, useState } from 'react';
import { EvaluationContainer, EvaluationControl, EvaluationStyled, EvaluationText, EvaluationTitle, EvaluationBody, EvaluationSub, EvaluationInfo } from './styles';
import { useSession, useUsers } from '../../hooks'
import Router from 'next/router'
import { FormSelect } from '../auth/styles';
import { ResultSub } from '../results/styles';

const Evaluation = ({}) => {
    const {loggedUser} = useSession()
    const { users  } = useUsers()

    const [user, setUser] =useState('')
    const [file, setFile] =useState('')
    useEffect(() => {
        if(loggedUser && loggedUser.rol !== 'externo') {
            Router.push('/')
        }
    }, [loggedUser && loggedUser.rol])
    console.log('users', users)
    const handleChange = (event) => {
        setUser(event.target.value)
        const data = event.target.value
        const fileUser = users.find(item => item._id === data)
        fileUser && fileUser.file ? setFile(fileUser.file) : setFile('')
    }

    return (
        <>
        {
            loggedUser && loggedUser.rol === 'externo' && (
                <EvaluationStyled>
                    <EvaluationControl>
                        <EvaluationContainer>
                            <EvaluationTitle>
                                Evaluaciones
                            </EvaluationTitle>
                            <EvaluationText>
                                Encuentra todas las evaluciones de tus archivos subidos en cada sección solicitado.
                            </EvaluationText>
                            <EvaluationBody>
                                {
                                    users && users.length && (
                                        <>
                                            <FormSelect 
                                                placeholder="Selecciona el tipo de documento" 
                                                required={true}
                                                value={user}
                                                onChange={handleChange}
                                            >
                                                <option value="" disabled selected>Seleccionar una opción</option>
                                                {
                                                    users.map(item => <option value={item._id}>{item.email}</option>)
                                                }
                                            </FormSelect>
                                            {
                                                file ? (
                                                    <>
                                                        File
                                                    </>
                                                ) : (
                                                    <EvaluationInfo>
                                                        <ResultSub>
                                                            Procesando información
                                                        </ResultSub>
                                                    </EvaluationInfo>
                                                )
                                            }
                                        </>
                                    )
                                }
                            </EvaluationBody>
                        </EvaluationContainer>
                    </EvaluationControl>
                </EvaluationStyled>
            )
        }
        </>
    )
}

export default Evaluation