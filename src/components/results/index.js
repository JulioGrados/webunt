import React, { useEffect, useState } from 'react';
import { ResultContainer, ResultControl, ResultStyled, ResultText, ResultTitle, ResultBody, ResultSub } from './styles';
import { useSession } from '../../hooks'
import Router from 'next/router'

const Result = ({}) => {
    const {loggedUser} = useSession()

    useEffect(() => {
        if(loggedUser && loggedUser.rol !== 'emprendedor') {
            Router.push('/evaluaciones')
        }
    }, [loggedUser && loggedUser.rol])

    return (
        <>
        {
            loggedUser && loggedUser.rol === 'emprendedor' && (
                <ResultStyled>
                    <ResultControl>
                        <ResultContainer>
                            <ResultTitle>
                                Resultados
                            </ResultTitle>
                            <ResultText>
                                Encuentra todas las evaluciones de tus archivos subidos en cada sección solicitado.
                            </ResultText>
                            <ResultBody>
                                <svg width="100px" height="100px" viewBox="0 0 100 100">
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Cuestionario-4" transform="translate(-589, -302)" fill="#032539" fillRule="nonzero">
                                            <g id="Grupo-2" transform="translate(366, 302)">
                                                <g id="stats-dots" transform="translate(223, 0)">
                                                    <path d="M12.5,87.5 L100,87.5 L100,100 L0,100 L0,0 L12.5,0 L12.5,87.5 Z M28.125,81.25 C22.946875,81.25 18.75,77.053125 18.75,71.875 C18.75,66.696875 22.946875,62.5 28.125,62.5 C28.4,62.5 28.675,62.515625 28.94375,62.5375 L39.021875,45.740625 C38.0625,44.26875 37.5,42.5125 37.5,40.621875 C37.5,35.44375 41.696875,31.246875 46.875,31.246875 C52.053125,31.246875 56.25,35.44375 56.25,40.621875 C56.25,42.509375 55.690625,44.26875 54.728125,45.740625 L64.80625,62.5375 C65.075,62.515625 65.35,62.5 65.625,62.5 C65.834375,62.5 66.040625,62.509375 66.24375,62.521875 L82.88125,33.409375 C81.853125,31.903125 81.25,30.084375 81.25,28.125 C81.25,22.946875 85.446875,18.75 90.625,18.75 C95.803125,18.75 100,22.946875 100,28.125 C100,33.303125 95.803125,37.5 90.625,37.5 C90.415625,37.5 90.209375,37.490625 90.00625,37.478125 L73.36875,66.590625 C74.396875,68.09375 75,69.915625 75,71.875 C75,77.053125 70.803125,81.25 65.625,81.25 C60.446875,81.25 56.25,77.053125 56.25,71.875 C56.25,69.9875 56.809375,68.228125 57.771875,66.75625 L47.69375,49.959375 C47.425,49.98125 47.15,49.996875 46.875,49.996875 C46.6,49.996875 46.325,49.98125 46.05625,49.959375 L35.978125,66.75625 C36.9375,68.228125 37.5,69.984375 37.5,71.871875 C37.5,77.05 33.303125,81.246875 28.125,81.246875 L28.125,81.25 Z" id="Forma"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <ResultSub>
                                    ¡Gracias! Tu información ha sido enviada, en un máximo de 5 días podrán estar disponible tus resultados, los cuales estarán disponibles en la sección de evaluaiones
                                </ResultSub>
                            </ResultBody>
                        </ResultContainer>
                    </ResultControl>
                </ResultStyled>
            )
        }
        </>
    )
}

export default Result