import React, { useState } from 'react';
import { FileName, HiddenInput, PlaceholderText, UploadContainer, UploadContainerFile, UploadContent, UploadControl, UploadFiles, UploadFilesButton, UploadForm, UploadIcon, UploadStyled, UploadText, UploadTitle, UploadFilesItem} from "./styles"
import { useUploads, useSession } from '../../hooks';
import { Button, notification } from 'antd';

const Upload = ({}) => {
    const {loggedUser} = useSession()
    const { create, remove } = useUploads({})

    const [fileName, setFileName] = useState(null);
    const [file1, setFile1] = useState(null);

    const [fileName2, setFileName2] = useState(null);
    const [file2, setFile2] = useState(null);

    const [fileName3, setFileName3] = useState(null);
    const [file3, setFile3] = useState(null);

    const [fileName4, setFileName4] = useState(null);
    const [file4, setFile4] = useState(null);

    const [fileName5, setFileName5] = useState(null);
    const [file5, setFile5] = useState(null);

    const [fileName6, setFileName6] = useState(null);
    const [file6, setFile6] = useState(null);

    const [fileName7, setFileName7] = useState(null);
    const [file7, setFile7] = useState(null);

    const [fileName8, setFileName8] = useState(null);
    const [file8, setFile8] = useState(null);

    const [fileName9, setFileName9] = useState(null);
    const [file9, setFile9] = useState(null);

    const [fileName10, setFileName10] = useState(null);
    const [file10, setFile10] = useState(null);
    
    const [fileName11, setFileName11] = useState(null);
    const [file11, setFile11] = useState(null);
    
    const [fileName12, setFileName12] = useState(null);
    const [file12, setFile12] = useState(null);

    const [fileName13, setFileName13] = useState(null);
    const [file13, setFile13] = useState(null);

    const [fileName14, setFileName14] = useState(null);
    const [file14, setFile14] = useState(null);

    const [fileName15, setFileName15] = useState(null);
    const [file15, setFile15] = useState(null);

    const [fileName16, setFileName16] = useState(null);
    const [file16, setFile16] = useState(null);

    const [fileName17, setFileName17] = useState(null);
    const [file17, setFile17] = useState(null);

    const [fileName18, setFileName18] = useState(null);
    const [file18, setFile18] = useState(null);

    const handleFileChange = (event) => {
        // console.log('event', event.target.files[0])
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name); // Guarda el nombre del archivo
            setFile1(file)
        }
    };

    const handleClick = () => {
        document.getElementById("fileUploadInput").click();
    };

    const handleButton1 = async () => {
        if(file1 && file1.name) {
            const formData = new window.FormData()
            const data = {
                linked: loggedUser._id,
                name: file1.name,
                text: 'Número de usuarios/clientes al inicio del periodo. (Masivo)'
            }
            console.log('file1', file1)
            formData.append('file', file1)
            formData.append('data', JSON.stringify(data))
            // console.log('loggedUser', loggedUser)
            const resp = await create(formData)
            if (resp.success) {
                notification['success']({
                    message: 'Notification Title',
                    description:
                      'Se cargó el archivo correctamente.',
                });
            } else {
                notification['error']({
                    message: 'Notification Title',
                    description:
                      'Error al cargar el archivo.',
                });
            }
        }
    } 

    const handleFileChange2 = (event) => {
        // console.log('event', event.target.files[0])
        const file = event.target.files[0];
        if (file) {
            setFileName2(file.name); // Guarda el nombre del archivo
            setFile2(file)
        }
    };

    const handleClick2 = () => {
        document.getElementById("fileUploadInput2").click();
    };

    const handleButton2 = async () => {
        if(file2 && file2.name) {
            const formData = new window.FormData()
            const data = {
                linked: loggedUser._id,
                name: file2.name,
                text: 'Número de usuarios/clientes nuevos adquiridos.'
            }
            console.log('file2', file2)
            formData.append('file', file2)
            formData.append('data', JSON.stringify(data))
            // console.log('loggedUser', loggedUser)
            const resp = await create(formData)
            if (resp.success) {
                notification['success']({
                    message: 'Notification Title',
                    description:
                      'Se cargó el archivo correctamente.',
                });
            } else {
                notification['error']({
                    message: 'Notification Title',
                    description:
                      'Error al cargar el archivo.',
                });
            }
        }
    } 

    const handleFileChange3 = (event) => {
        // console.log('event', event.target.files[0])
        const file = event.target.files[0];
        if (file) {
            setFileName3(file.name); // Guarda el nombre del archivo
            setFile3(file)
        }
    };

    const handleClick3 = () => {
        document.getElementById("fileUploadInput3").click();
    };

    const handleButton3 = async () => {
        if(file3 && file3.name) {
            const formData = new window.FormData()
            const data = {
                linked: loggedUser._id,
                name: file3.name,
                text: 'Número de usuarios/clientes perdidos.'
            }
            console.log('file3', file3)
            formData.append('file', file3)
            formData.append('data', JSON.stringify(data))
            // console.log('loggedUser', loggedUser)
            const resp = await create(formData)
            if (resp.success) {
                notification['success']({
                    message: 'Notification Title',
                    description:
                      'Se cargó el archivo correctamente.',
                });
            } else {
                notification['error']({
                    message: 'Notification Title',
                    description:
                      'Error al cargar el archivo.',
                });
            }
        }
    } 

    const handleFileChange4 = (event) => {
        // console.log('event', event.target.files[0])
        const file = event.target.files[0];
        if (file) {
            setFileName4(file.name); // Guarda el nombre del archivo
            setFile4(file)
        }
    };

    const handleClick4 = () => {
        document.getElementById("fileUploadInput4").click();
    };

    const handleButton4 = async () => {
        if(file4 && file4.name) {
            const formData = new window.FormData()
            const data = {
                linked: loggedUser._id,
                name: file4.name,
                text: 'Número de usuarios/clientes al final del periodo.'
            }
            console.log('file4', file4)
            formData.append('file', file4)
            formData.append('data', JSON.stringify(data))
            // console.log('loggedUser', loggedUser)
            const resp = await create(formData)
            if (resp.success) {
                notification['success']({
                    message: 'Notification Title',
                    description:
                      'Se cargó el archivo correctamente.',
                });
            } else {
                notification['error']({
                    message: 'Notification Title',
                    description:
                      'Error al cargar el archivo.',
                });
            }
        }
    } 

    const handleFileChange5 = (event) => {
        // console.log('event', event.target.files[0])
        const file = event.target.files[0];
        if (file) {
            setFileName5(file.name); // Guarda el nombre del archivo
            setFile5(file)
        }
    };

    const handleClick5 = () => {
        document.getElementById("fileUploadInput5").click();
    };

    const handleButton5 = async () => {
        if(file5 && file5.name) {
            const formData = new window.FormData()
            const data = {
                linked: loggedUser._id,
                name: file5.name,
                text: 'Número de clientes activos.'
            }
            console.log('file5', file5)
            formData.append('file', file5)
            formData.append('data', JSON.stringify(data))
            // console.log('loggedUser', loggedUser)
            const resp = await create(formData)
            if (resp.success) {
                notification['success']({
                    message: 'Notification Title',
                    description:
                      'Se cargó el archivo correctamente.',
                });
            } else {
                notification['error']({
                    message: 'Notification Title',
                    description:
                      'Error al cargar el archivo.',
                });
            }
        }
    } 

    const handleFileChange6 = (event) => {
        // console.log('event', event.target.files[0])
        const file = event.target.files[0];
        if (file) {
            setFileName6(file.name); // Guarda el nombre del archivo
            setFile6(file)
        }
    };

    const handleClick6 = () => {
        document.getElementById("fileUploadInput6").click();
    };

    const handleButton6 = async () => {
        if(file6 && file6.name) {
            const formData = new window.FormData()
            const data = {
                linked: loggedUser._id,
                name: file6.name,
                text: 'Ingreso promedio por cliente (mensual o anual).'
            }
            console.log('file6', file6)
            formData.append('file', file6)
            formData.append('data', JSON.stringify(data))
            // console.log('loggedUser', loggedUser)
            const resp = await create(formData)
            if (resp.success) {
                notification['success']({
                    message: 'Notification Title',
                    description:
                      'Se cargó el archivo correctamente.',
                });
            } else {
                notification['error']({
                    message: 'Notification Title',
                    description:
                      'Error al cargar el archivo.',
                });
            }
        }
    } 

    const handleFileChange7 = (event) => {
        // console.log('event', event.target.files[0])
        const file = event.target.files[0];
        if (file) {
            setFileName7(file.name); // Guarda el nombre del archivo
            setFile7(file)
        }
    };

    const handleClick7 = () => {
        document.getElementById("fileUploadInput7").click();
    };

    const handleButton7 = async () => {
        if(file7 && file7.name) {
            const formData = new window.FormData()
            const data = {
                linked: loggedUser._id,
                name: file7.name,
                text: 'Efectivo disponible (capital en caja).'
            }
            console.log('file7', file7)
            formData.append('file', file7)
            formData.append('data', JSON.stringify(data))
            // console.log('loggedUser', loggedUser)
            const resp = await create(formData)
            if (resp.success) {
                notification['success']({
                    message: 'Notification Title',
                    description:
                      'Se cargó el archivo correctamente.',
                });
            } else {
                notification['error']({
                    message: 'Notification Title',
                    description:
                      'Error al cargar el archivo.',
                });
            }
        }
    } 

    const handleFileChange8 = (event) => {
        // console.log('event', event.target.files[0])
        const file = event.target.files[0];
        if (file) {
            setFileName8(file.name); // Guarda el nombre del archivo
            setFile8(file)
        }
    };

    const handleClick8 = () => {
        document.getElementById("fileUploadInput8").click();
    };

    const handleButton8 = async () => {
        if(file8 && file8.name) {
            const formData = new window.FormData()
            const data = {
                linked: loggedUser._id,
                name: file8.name,
                text: 'Gastos mensuales totales.'
            }
            console.log('file8', file8)
            formData.append('file', file8)
            formData.append('data', JSON.stringify(data))
            // console.log('loggedUser', loggedUser)
            const resp = await create(formData)
            if (resp.success) {
                notification['success']({
                    message: 'Notification Title',
                    description:
                      'Se cargó el archivo correctamente.',
                });
            } else {
                notification['error']({
                    message: 'Notification Title',
                    description:
                      'Error al cargar el archivo.',
                });
            }
        }
    } 

    const handleFileChange9 = (event) => {
        // console.log('event', event.target.files[0])
        const file = event.target.files[0];
        if (file) {
            setFileName9(file.name); // Guarda el nombre del archivo
            setFile9(file)
        }
    };

    const handleClick9 = () => {
        document.getElementById("fileUploadInput9").click();
    };

    const handleButton9 = async () => {
        if(file9 && file9.name) {
            const formData = new window.FormData()
            const data = {
                linked: loggedUser._id,
                name: file9.name,
                text: 'Ingresos mensuales totales.'
            }
            console.log('file9', file9)
            formData.append('file', file9)
            formData.append('data', JSON.stringify(data))
            // console.log('loggedUser', loggedUser)
            const resp = await create(formData)
            if (resp.success) {
                notification['success']({
                    message: 'Notification Title',
                    description:
                      'Se cargó el archivo correctamente.',
                });
            } else {
                notification['error']({
                    message: 'Notification Title',
                    description:
                      'Error al cargar el archivo.',
                });
            }
        }
    } 

    const handleFileChange10 = (event) => {
        // console.log('event', event.target.files[0])
        const file = event.target.files[0];
        if (file) {
            setFileName10(file.name); // Guarda el nombre del archivo
            setFile10(file)
        }
    };

    const handleClick10 = () => {
        document.getElementById("fileUploadInput10").click();
    };

    const handleButton10 = async () => {
        if(file10 && file10.name) {
            const formData = new window.FormData()
            const data = {
                linked: loggedUser._id,
                name: file10.name,
                text: 'Gastos en ventas y marketing durante el periodo.'
            }
            console.log('file10', file10)
            formData.append('file', file10)
            formData.append('data', JSON.stringify(data))
            // console.log('loggedUser', loggedUser)
            const resp = await create(formData)
            if (resp.success) {
                notification['success']({
                    message: 'Notification Title',
                    description:
                      'Se cargó el archivo correctamente.',
                });
            } else {
                notification['error']({
                    message: 'Notification Title',
                    description:
                      'Error al cargar el archivo.',
                });
            }
        }
    } 

    const handleFileChange11 = (event) => {
        // console.log('event', event.target.files[0])
        const file = event.target.files[0];
        if (file) {
            setFileName11(file.name); // Guarda el nombre del archivo
            setFile11(file)
        }
    };

    const handleClick11 = () => {
        document.getElementById("fileUploadInput11").click();
    };

    const handleButton11 = async () => {
        if(file11 && file11.name) {
            const formData = new window.FormData()
            const data = {
                linked: loggedUser._id,
                name: file11.name,
                text: 'Número de clientes nuevos adquiridos durante el periodo.'
            }
            console.log('file11', file11)
            formData.append('file', file11)
            formData.append('data', JSON.stringify(data))
            // console.log('loggedUser', loggedUser)
            const resp = await create(formData)
            if (resp.success) {
                notification['success']({
                    message: 'Notification Title',
                    description:
                      'Se cargó el archivo correctamente.',
                });
            } else {
                notification['error']({
                    message: 'Notification Title',
                    description:
                      'Error al cargar el archivo.',
                });
            }
        }
    } 

    const handleFileChange12 = (event) => {
        // console.log('event', event.target.files[0])
        const file = event.target.files[0];
        if (file) {
            setFileName12(file.name); // Guarda el nombre del archivo
            setFile12(file)
        }
    };

    const handleClick12 = () => {
        document.getElementById("fileUploadInput12").click();
    };

    const handleButton12 = async () => {
        if(file12 && file12.name) {
            const formData = new window.FormData()
            const data = {
                linked: loggedUser._id,
                name: file12.name,
                text: 'Tasa de retención de clientes.'
            }
            console.log('file12', file12)
            formData.append('file', file12)
            formData.append('data', JSON.stringify(data))
            // console.log('loggedUser', loggedUser)
            const resp = await create(formData)
            if (resp.success) {
                notification['success']({
                    message: 'Notification Title',
                    description:
                      'Se cargó el archivo correctamente.',
                });
            } else {
                notification['error']({
                    message: 'Notification Title',
                    description:
                      'Error al cargar el archivo.',
                });
            }
        }
    } 

    const handleFileChange13 = (event) => {
        // console.log('event', event.target.files[0])
        const file = event.target.files[0];
        if (file) {
            setFileName13(file.name); // Guarda el nombre del archivo
            setFile13(file)
        }
    };

    const handleClick13 = () => {
        document.getElementById("fileUploadInput13").click();
    };

    const handleButton13 = async () => {
        if(file13 && file13.name) {
            const formData = new window.FormData()
            const data = {
                linked: loggedUser._id,
                name: file13.name,
                text: 'Duración promedio del cliente (en meses o años).'
            }
            console.log('file13', file13)
            formData.append('file', file13)
            formData.append('data', JSON.stringify(data))
            // console.log('loggedUser', loggedUser)
            const resp = await create(formData)
            if (resp.success) {
                notification['success']({
                    message: 'Notification Title',
                    description:
                      'Se cargó el archivo correctamente.',
                });
            } else {
                notification['error']({
                    message: 'Notification Title',
                    description:
                      'Error al cargar el archivo.',
                });
            }
        }
    } 

    const handleFileChange14 = (event) => {
        // console.log('event', event.target.files[0])
        const file = event.target.files[0];
        if (file) {
            setFileName14(file.name); // Guarda el nombre del archivo
            setFile14(file)
        }
    };

    const handleClick14 = () => {
        document.getElementById("fileUploadInput14").click();
    };

    const handleButton14 = async () => {
        if(file14 && file14.name) {
            const formData = new window.FormData()
            const data = {
                linked: loggedUser._id,
                name: file14.name,
                text: 'Número total de usuarios o clientes.'
            }
            console.log('file14', file14)
            formData.append('file', file14)
            formData.append('data', JSON.stringify(data))
            // console.log('loggedUser', loggedUser)
            const resp = await create(formData)
            if (resp.success) {
                notification['success']({
                    message: 'Notification Title',
                    description:
                      'Se cargó el archivo correctamente.',
                });
            } else {
                notification['error']({
                    message: 'Notification Title',
                    description:
                      'Error al cargar el archivo.',
                });
            }
        }
    } 

    const handleFileChange15 = (event) => {
        // console.log('event', event.target.files[0])
        const file = event.target.files[0];
        if (file) {
            setFileName15(file.name); // Guarda el nombre del archivo
            setFile15(file)
        }
    };

    const handleClick15 = () => {
        document.getElementById("fileUploadInput15").click();
    };

    const handleButton15 = async () => {
        if(file15 && file15.name) {
            const formData = new window.FormData()
            const data = {
                linked: loggedUser._id,
                name: file15.name,
                text: 'Número de usuarios que completan una acción clave.'
            }
            console.log('file15', file15)
            formData.append('file', file15)
            formData.append('data', JSON.stringify(data))
            // console.log('loggedUser', loggedUser)
            const resp = await create(formData)
            if (resp.success) {
                notification['success']({
                    message: 'Notification Title',
                    description:
                      'Se cargó el archivo correctamente.',
                });
            } else {
                notification['error']({
                    message: 'Notification Title',
                    description:
                      'Error al cargar el archivo.',
                });
            }
        }
    } 

    const handleFileChange16 = (event) => {
        // console.log('event', event.target.files[0])
        const file = event.target.files[0];
        if (file) {
            setFileName16(file.name); // Guarda el nombre del archivo
            setFile16(file)
        }
    };

    const handleClick16 = () => {
        document.getElementById("fileUploadInput16").click();
    };

    const handleButton16 = async () => {
        if(file16 && file16.name) {
            const formData = new window.FormData()
            const data = {
                linked: loggedUser._id,
                name: file16.name,
                text: 'Número de usuarios que abandonan el producto o servicio.'
            }
            console.log('file16', file16)
            formData.append('file', file16)
            formData.append('data', JSON.stringify(data))
            // console.log('loggedUser', loggedUser)
            const resp = await create(formData)
            if (resp.success) {
                notification['success']({
                    message: 'Notification Title',
                    description:
                      'Se cargó el archivo correctamente.',
                });
            } else {
                notification['error']({
                    message: 'Notification Title',
                    description:
                      'Error al cargar el archivo.',
                });
            }
        }
    } 

    const handleFileChange17 = (event) => {
        // console.log('event', event.target.files[0])
        const file = event.target.files[0];
        if (file) {
            setFileName17(file.name); // Guarda el nombre del archivo
            setFile17(file)
        }
    };

    const handleClick17 = () => {
        document.getElementById("fileUploadInput17").click();
    };

    const handleButton17 = async () => {
        if(file17 && file17.name) {
            const formData = new window.FormData()
            const data = {
                linked: loggedUser._id,
                name: file17.name,
                text: 'Resultados de la encuesta de satisfacción de clientes (promotores y detractores).'
            }
            console.log('file17', file17)
            formData.append('file', file17)
            formData.append('data', JSON.stringify(data))
            // console.log('loggedUser', loggedUser)
            const resp = await create(formData)
            if (resp.success) {
                notification['success']({
                    message: 'Notification Title',
                    description:
                      'Se cargó el archivo correctamente.',
                });
            } else {
                notification['error']({
                    message: 'Notification Title',
                    description:
                      'Error al cargar el archivo.',
                });
            }
        }
    } 

    const handleFileChange18 = (event) => {
        // console.log('event', event.target.files[0])
        const file = event.target.files[0];
        if (file) {
            setFileName18(file.name); // Guarda el nombre del archivo
            setFile18(file)
        }
    };

    const handleClick18 = () => {
        document.getElementById("fileUploadInput18").click();
    };

    const handleButton18 = async () => {
        if(file18 && file18.name) {
            const formData = new window.FormData()
            const data = {
                linked: loggedUser._id,
                name: file18.name,
                text: 'Inversión total recibida en la ronda actual.'
            }
            console.log('file18', file18)
            formData.append('file', file18)
            formData.append('data', JSON.stringify(data))
            // console.log('loggedUser', loggedUser)
            const resp = await create(formData)
            if (resp.success) {
                notification['success']({
                    message: 'Notification Title',
                    description:
                      'Se cargó el archivo correctamente.',
                });
            } else {
                notification['error']({
                    message: 'Notification Title',
                    description:
                      'Error al cargar el archivo.',
                });
            }
        }
    } 

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
                                    accept=".csv,.xls,.xlsx" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName}>
                                    {fileName || "Número de usuarios/clientes al inicio del periodo."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton onClick={handleButton1}>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick2} hasFile={!!fileName2}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange2}
                                    accept=".csv,.xls,.xlsx" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName2}>
                                    {fileName2 || "Número de usuarios/clientes nuevos adquiridos."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton onClick={handleButton2}>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick3} hasFile={!!fileName3}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange3}
                                    accept=".csv,.xls,.xlsx" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName3}>
                                    {fileName3 || "Número de usuarios/clientes perdidos."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton onClick={handleButton3}>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick4} hasFile={!!fileName4}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange4}
                                    accept=".csv,.xls,.xlsx" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName4}>
                                    {fileName4 || "Número de usuarios/clientes al final del periodo."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton onClick={handleButton4}>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick5} hasFile={!!fileName5}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange5}
                                    accept=".csv,.xls,.xlsx" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName5}>
                                    {fileName5 || "Número de clientes activos."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton onClick={handleButton5}>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick6} hasFile={!!fileName6}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange6}
                                    accept=".csv,.xls,.xlsx" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName6}>
                                    {fileName6 || "Ingreso promedio por cliente (mensual o anual)."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton onClick={handleButton6}>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick7} hasFile={!!fileName7}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange7}
                                    accept=".csv,.xls,.xlsx" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName7}>
                                    {fileName7 || "Efectivo disponible (capital en caja)."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton onClick={handleButton7}>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick8} hasFile={!!fileName8}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange8}
                                    accept=".csv,.xls,.xlsx" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName8}>
                                    {fileName8 || "Gastos mensuales totales."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton onClick={handleButton8}>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick9} hasFile={!!fileName9}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange9}
                                    accept=".csv,.xls,.xlsx" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName9}>
                                    {fileName9 || "Ingresos mensuales totales."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton onClick={handleButton9}>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick10} hasFile={!!fileName10}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange10}
                                    accept=".csv,.xls,.xlsx" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName10}>
                                    {fileName10 || "Gastos en ventas y marketing durante el periodo."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton onClick={handleButton10}>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick11} hasFile={!!fileName11}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange11}
                                    accept=".csv,.xls,.xlsx" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName11}>
                                    {fileName11 || "Número de clientes nuevos adquiridos durante el periodo."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton onClick={handleButton11}>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick12} hasFile={!!fileName12}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange12}
                                    accept=".csv,.xls,.xlsx" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName12}>
                                    {fileName12 || "Tasa de retención de clientes."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton onClick={handleButton12}>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick13} hasFile={!!fileName13}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange13}
                                    accept=".csv,.xls,.xlsx" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName13}>
                                    {fileName13 || "Duración promedio del cliente (en meses o años)."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton onClick={handleButton13}>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick14} hasFile={!!fileName14}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange14}
                                    accept=".csv,.xls,.xlsx" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName14}>
                                    {fileName14 || "Número total de usuarios o clientes."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton onClick={handleButton14}>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick15} hasFile={!!fileName15}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange15}
                                    accept=".csv,.xls,.xlsx" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName15}>
                                    {fileName15 || "Número de usuarios que completan una acción clave."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton onClick={handleButton15}>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick16} hasFile={!!fileName16}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange16}
                                    accept=".csv,.xls,.xlsx" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName16}>
                                    {fileName16 || "Número de usuarios que abandonan el producto o servicio."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton onClick={handleButton16}>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick17} hasFile={!!fileName17}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange17}
                                    accept=".csv,.xls,.xlsx" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName17}>
                                    {fileName17 || "Resultados de la encuesta de satisfacción de clientes (promotores y detractores)."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton onClick={handleButton17}>
                                Subir archivos
                            </UploadFilesButton>
                        </UploadFilesItem>
                        <UploadFilesItem>
                            <UploadContainerFile onClick={handleClick18} hasFile={!!fileName18}>
                                <HiddenInput
                                    type="file"
                                    id="fileUploadInput"
                                    onChange={handleFileChange18}
                                    accept=".csv,.xls,.xlsx" // Cambia según los tipos de archivo permitidos
                                />
                                <PlaceholderText hasFile={!!fileName18}>
                                    {fileName18 || "Inversión total recibida en la ronda actual."}
                                </PlaceholderText>
                            </UploadContainerFile>
                            <UploadFilesButton onClick={handleButton18}>
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