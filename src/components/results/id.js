import React, { useState } from 'react';
import { ResultContainer, ResultControl, ResultItem, ResultItemButton, ResultItems, ResultItemTitle, ResultStyled, ResultText, ResultTitle } from './styles';

const ResultId = ({}) => {

    return (
        <ResultStyled>
            <ResultControl>
                <ResultContainer>
                    <ResultTitle>
                        Evalución 07/10/2024
                    </ResultTitle>
                    <ResultText>
                        Estos son los resultado de la evaluación realizada en la fecha indicada
                    </ResultText>
                    <ResultItems>
                        
                    </ResultItems>
                </ResultContainer>
            </ResultControl>
        </ResultStyled>
    )
}

export default ResultId