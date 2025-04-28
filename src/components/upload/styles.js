import styled from 'styled-components'

export const UploadStyled = styled.div`
    width: 100%;
`

export const UploadControl = styled.div`
    max-width: 1200px;
    height: 100%;
    margin: 30px auto;
    padding: 0px 30px;
    background-color: #fff;
`

export const UploadContainer = styled.div`
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const UploadTitle = styled.h3`
    margin: 0;
    font-size: 25px;
    text-align: left;
    color: #000;
    font-weight: 600;
`

export const UploadText = styled.p`
    margin: 5px 0 0 0;
    font-size: 14px;
    color: #000;
    text-align: left;
`

// Contenedor principal del upload
export const UploadFiles = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 20px;
`
export const UploadContainerFile = styled.div`
border: 1px dashed #98B0B7;
border-radius: 10px;
padding: 20px;
text-align: center;
position: relative;
cursor: pointer;
background-color: ${(props) => (props.hasFile ? "#e3f5fa" : "transparent")};
transition: background-color 0.3s ease;
width: 33%;
margin-bottom: 15px;
width: 100%;
&:hover {
  background-color: ${(props) =>
    props.hasFile ? "#d3eef6" : "#f7fafd"};
}
`;

// Input de tipo file oculto
export const HiddenInput = styled.input`
display: none;
`;

// Texto o nombre del archivo
export const PlaceholderText = styled.p`
color: ${(props) => (props.hasFile ? "#1a738d" : "#b3b3b3")};
font-size: 14px;
margin: 0;
transition: color 0.3s ease;
`;



export const UploadFilesButton = styled.button`
    border-color: #1A738D;
    background-color: #1A738D;
    font-size: 13px;
    text-transform: uppercase;
    width: 100%;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    box-sizing: border-box;
    /* transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; */
    font-weight: 500;
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    border: none;
    margin: 0 auto;
`

export const UploadFilesItem = styled.div`
    width: 49%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`