import styled from 'styled-components'

export const WelcomeStyled = styled.div`
    width: 100%;
    height: calc(100% - 70px);
    margin: 0 auto;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const WelcomeControl = styled.div`
    max-width: 1200px;
    height: 100%;
    padding: 0px 30px;
    background-color: #fff;
    width: 100%;
    overflow: auto;
`

export const WelcomeContainer = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
`

export const WelcomeTitle = styled.h3`
    margin: 0;
    font-size: 30px;
    color: #1A738D;
    font-weight: 600;
`

export const WelcomeText = styled.p`
    margin: 20px 0 0 0;
    font-size: 16px;
    color: #000;
    width: 60%;
`

export const WelcomeForm = styled.div`
    width: 60%;
`

export const WelcomeFormItem = styled.div`
    margin-top: 30px;
`

export const WelcomeFormLabel = styled.label`
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    margin: 0 0 15px 0;
    display: block;
`

// Contenedor principal
export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

// Estilo para cada Tab
export const Tab = styled.label`
  border: 2px solid #1a738d;
  color: #1a738d;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  background-color: ${(props) => (props.selected ? "#1a738d" : "white")};
  color: ${(props) => (props.selected ? "white" : "#1a738d")};
  transition: all 0.3s ease;
    width: 24%;
  &:hover {
    background-color: ${(props) => (props.selected ? "#1a738d" : "#e3f5fa")};
  }
`;

// Estilo para ocultar el radio button
export const RadioButton = styled.input`
  display: none;
`;

// Estilo para el contenedor del select
export const SelectContainer = styled.div`
  position: relative;
  width: 100%; /* Ajusta el ancho según tus necesidades */
`;

export const StyledSelect = styled.select`
  appearance: none; /* Oculta el estilo nativo del select */
  width: 100%;
  padding: 15px;
  border: 2px solid #1a738d;
  border-radius: 5px;
  background-color: white;
  color: #1a738d;
  font-size: 16px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  &:focus {
    outline: none;
    border-color: #1a738d;
    box-shadow: 0 0 5px rgba(26, 115, 141, 0.5);
  }
`;

// Agregar la flecha personalizada
export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none; /* La flecha no interfiere con los clics */
  font-size: 14px;
  color: #1a738d;
`;

// Estilo para el placeholder
export const OptionPlaceholder = styled.option`
  color: #b3b3b3;
`;

export const WelcomeFormButton = styled.button`
    border-color: #1A738D;
    background-color: #1A738D;
    font-size: 14px;
    text-transform: uppercase;
    width: 250px;
    height: 45px;
    line-height: 45px;
    cursor: pointer;
    box-sizing: border-box;
    /* transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; */
    font-weight: 500;
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    border: none;
`