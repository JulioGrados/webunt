import React, { useState } from 'react';
import { FileName, HiddenInput, PlaceholderText, UploadContainer, UploadContainerFile, UploadContent, UploadControl, UploadFiles, UploadFilesButton, UploadForm, UploadIcon, UploadStyled, UploadText, UploadTitle, UploadFilesItem} from "./styles"

const Upload = ({}) => {
    const [fileName, setFileName] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name); // Guarda el nombre del archivo
        }
    };

    const handleClick = () => {
        document.getElementById("fileUploadInput").click();
    };

    return (
        <UploadStyled>
            <UploadControl>
                <UploadContainer>
                    <UploadTitle>
                        Subir y adjuntar archivos
                    </UploadTitle>
                    <UploadText>
                        Debes agregar la información solicitada en cada sección en formatos: csv, xls, xlsx
                    </UploadText>
                    <UploadFiles>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick} hasFile={!!fileName}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange}
                                    accept=".jpg,.png,.pdf" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName}>
                                    {fileName || "Número de usuarios/clientes al inicio del periodo."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick} hasFile={!!fileName}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange}
                                    accept=".jpg,.png,.pdf" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName}>
                                    {fileName || "Número de usuarios/clientes al inicio del periodo."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick} hasFile={!!fileName}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange}
                                    accept=".jpg,.png,.pdf" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName}>
                                    {fileName || "Número de usuarios/clientes al inicio del periodo."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick} hasFile={!!fileName}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange}
                                    accept=".jpg,.png,.pdf" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName}>
                                    {fileName || "Número de usuarios/clientes al inicio del periodo."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick} hasFile={!!fileName}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange}
                                    accept=".jpg,.png,.pdf" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName}>
                                    {fileName || "Número de usuarios/clientes al inicio del periodo."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick} hasFile={!!fileName}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange}
                                    accept=".jpg,.png,.pdf" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName}>
                                    {fileName || "Número de usuarios/clientes al inicio del periodo."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                    </UploadFiles>
                </UploadContainer>
            </UploadControl>
        </UploadStyled>
    )
}

export default Upload