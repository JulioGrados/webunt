import React, { useEffect, useState } from 'react';
import { WelcomeContainer, WelcomeControl, WelcomeForm, WelcomeStyled, WelcomeText, WelcomeTitle, TabsContainer, Tab, RadioButton, WelcomeFormLabel, WelcomeFormItem, SelectContainer, StyledSelect, OptionPlaceholder, Arrow, WelcomeFormButton } from "./styles"
import { createWelcome } from 'utils/api/welcome'
import { useSession, useUsers } from '../../hooks'
import Router from 'next/router'

const Welcome = ({}) => {
    const { loggedUser } = useSession()
    const { current, detail } = useUsers()
    const [selectedTab, setSelectedTab] = useState(""); // Estado inicial
    const [sector, setSector] = useState(""); // Estado inicial
    const [verticales, setVerticales] = useState(""); // Estado inicial
    const [enfoque, setEnfoque] = useState(""); // Estado inicial
    const [producto, setProducto] = useState(""); // Estado inicial
    const [cliente, setCliente] = useState(""); // Estado inicial
    console.log('loggedUser', loggedUser)
    const handleChange = (e) => {
        setSelectedTab(e.target.value);
    }
    const handleSector = (e) => {
        setSector(e.target.value)
    }
    const handleVertical = (e) => {
        setVerticales(e.target.value)
    }
    const handleEnfoque = (e) => {
        setEnfoque(e.target.value)
    }
    const handleProducto = (e) => {
        setProducto(e.target.value)
    }
    const handleCliente = (e) => {
        setCliente(e.target.value)
    }

    useEffect(() => {
        if(loggedUser && loggedUser._id) {
            detail(loggedUser && loggedUser._id)
        }
    }, [loggedUser && loggedUser._id])

    useEffect(() => {
        if(current && current._id) {
            if (current.rol === 'externo') {
                Router.push('/resultados')
            }
            if(current.welcome && current.question){
                Router.push('/evaluaciones')
            } else if(current.welcome) {
                Router.push('/cuestionario')
            }
        }
    }, [current && current._id])

    const handleSubmit = async () => {
        if(selectedTab !== '' && sector !== '' && verticales !== '' && enfoque !== '' && producto !== '' && cliente !== '') {
            const resp = await createWelcome({
                user: loggedUser._id,
                questions: [
                    {
                        pregunta: 'Número de Empleados',
                        respuesta: selectedTab
                    },
                    {
                        pregunta: 'Sector',
                        respuesta: sector
                    },
                    {
                        pregunta: 'Verticales',
                        respuesta: verticales
                    },
                    {
                        pregunta: 'Enfoque Económico',
                        respuesta: enfoque
                    },
                    {
                        pregunta: 'Producto',
                        respuesta: producto
                    },
                    {
                        pregunta: 'Cliente de tu modelo de negocio',
                        respuesta: cliente
                    },
                ]
            })
            console.log('resp', resp)
            if(resp.success) {
                console.log('entrooo')
                Router.push('/cuestionario')
            }
            return
        }
    }
    
    return (
        <>
        {
            current && !current.welcome && current.rol === 'emprendedor' && (
            <WelcomeStyled>
                <WelcomeControl>
                    <WelcomeContainer>
                        <WelcomeTitle>
                            Bienvenido(a)
                        </WelcomeTitle>
                        <WelcomeText>
                            Un servicio diseñado para poder ofrecerte la mejor solución en el diagnóstico de tu empresa.
                        </WelcomeText>
                        <WelcomeForm>
                            <WelcomeFormItem>
                                <WelcomeFormLabel>
                                    Número de Empleados
                                </WelcomeFormLabel>
                                <TabsContainer>
                                    {["Menos de 10", "Entre 10 - 20", "Entre 21 - 49", "Más de 50"].map((tab) => (
                                        <>
                                            <RadioButton
                                                type="radio"
                                                id={tab}
                                                name="tabs"
                                                value={tab}
                                                checked={selectedTab === tab}
                                                onChange={handleChange}
                                            />
                                            <Tab htmlFor={tab} selected={selectedTab === tab}>
                                                {tab}
                                            </Tab>
                                        </>
                                    ))}
                                </TabsContainer>
                            </WelcomeFormItem>
                            <WelcomeFormItem>
                                <WelcomeFormLabel>
                                    Sector
                                </WelcomeFormLabel>
                                <SelectContainer>
                                    <StyledSelect onChange={handleSector} value={sector}>
                                        <OptionPlaceholder value="" disabled>
                                        Selecciona una opción
                                        </OptionPlaceholder>
                                        <option value="Agropecuario">Agropecuario</option>
                                        <option value="Comerio">Comerio</option>
                                        <option value="Contrucción">Contrucción</option>
                                        <option value="Manufactura">Manufactura</option>
                                        <option value="Minería">Minería</option>
                                        <option value="Pesca">Pesca</option>
                                        <option value="Servicios">Servicios</option>
                                    </StyledSelect>
                                    <Arrow>▼</Arrow>
                                </SelectContainer>
                            </WelcomeFormItem>
                            <WelcomeFormItem>
                                <WelcomeFormLabel>
                                    Verticales
                                </WelcomeFormLabel>
                                <SelectContainer>
                                    <StyledSelect onChange={handleVertical} value={verticales}>
                                        <OptionPlaceholder value="" disabled>
                                        Selecciona una opción
                                        </OptionPlaceholder>
                                        <option value="AgriTech">AgriTech</option>
                                        <option value="BioTech">BioTech</option>
                                        <option value="CivicTech">CivicTech</option>
                                        <option value="Construcción y vivienda">Construcción y vivienda</option>
                                        <option value="E-commerce">E-commerce</option>
                                        <option value="EdTech">EdTech</option>
                                        <option value="Energía y tecnología limpia">Energía y tecnología limpia</option>
                                        <option value="FinTech">FinTech</option>
                                        <option value="Home Services">Home Services</option>
                                        <option value="Industrias culturales y creativas">Industrias culturales y creativas</option>
                                        <option value="Información y comunicaciones">Información y comunicaciones</option>
                                        <option value="InsureTech">InsureTech</option>
                                        <option value="Logística y transporte">Logística y transporte</option>
                                        <option value="Manufactura">Manufactura</option>
                                        <option value="Medios y entretenimiento">Medios y entretenimiento</option>
                                        <option value="MineTech">MineTech</option>
                                        <option value="ModaTech">ModaTech</option>
                                        <option value="Otro">Otro</option>
                                        <option value="Reclutamiento y recursos humanos">Reclutamiento y recursos humanos</option>
                                        <option value="Salud y bienestar">Salud y bienestar</option>
                                        <option value="Servicios para Pymes">Servicios para Pymes</option>
                                        <option value="Software">Software</option>
                                        <option value="Turismo">Turismo</option>
                                    </StyledSelect>
                                    <Arrow>▼</Arrow>
                                </SelectContainer>
                            </WelcomeFormItem>
                            <WelcomeFormItem>
                                <WelcomeFormLabel>
                                    Enfoque Económico
                                </WelcomeFormLabel>
                                <SelectContainer>
                                    <StyledSelect onChange={handleEnfoque} value={enfoque}>
                                        <OptionPlaceholder value="" disabled>
                                        Selecciona una opción
                                        </OptionPlaceholder>
                                        <option value="No aplica">No aplica</option>
                                        <option value="Economía colaborativa">Economía colaborativa</option>
                                        <option value="Economía circular">Economía circular</option>
                                        <option value="Economía plateada">Economía plateada</option>
                                        <option value="Economía naranja">Economía naranja</option>
                                        <option value="Otro">Otro</option>
                                    </StyledSelect>
                                    <Arrow>▼</Arrow>
                                </SelectContainer>
                            </WelcomeFormItem>
                            <WelcomeFormItem>
                                <WelcomeFormLabel>
                                    Producto
                                </WelcomeFormLabel>
                                <SelectContainer>
                                    <StyledSelect onChange={handleProducto} value={producto}>
                                        <OptionPlaceholder value="" disabled>
                                        Selecciona una opción
                                        </OptionPlaceholder>
                                        <option value="App móvil">App móvil</option>
                                        <option value="Web">Web</option>
                                        <option value="Producto físico">Producto físico</option>
                                        <option value="Servicio">Servicio</option>
                                        <option value="Otro">Otro</option>
                                        <option value="App/web">App/web</option>
                                    </StyledSelect>
                                    <Arrow>▼</Arrow>
                                </SelectContainer>
                            </WelcomeFormItem>
                            <WelcomeFormItem>
                                <WelcomeFormLabel>
                                    Cliente de tu modelo de negocio
                                </WelcomeFormLabel>
                                <SelectContainer>
                                    <StyledSelect onChange={handleCliente} value={cliente}>
                                        <OptionPlaceholder value="" disabled>
                                        Selecciona una opción
                                        </OptionPlaceholder>
                                        <option value="B2B Business to Business: Empresa a Empresa">B2B Business to Business: Empresa a Empresa</option>
                                        <option value="B2C Business to Consumer: Empresa a cliente">B2C Business to Consumer: Empresa a cliente</option>
                                        <option value="B2G Business to Government: Empresa a Gobierno">B2G Business to Government: Empresa a Gobierno</option>
                                        <option value="C2B Consumer to Business: Cliente a Empresa">C2B Consumer to Business: Cliente a Empresa</option>
                                        <option value="C2C Consumer to Consumer: Cliente a Cliente">C2C Consumer to Consumer: Cliente a Cliente</option>
                                    </StyledSelect>
                                    <Arrow>▼</Arrow>
                                </SelectContainer>
                            </WelcomeFormItem>
                            <WelcomeFormItem>
                                <WelcomeFormButton onClick={handleSubmit}>
                                    Comenzar
                                </WelcomeFormButton>
                            </WelcomeFormItem>
                        </WelcomeForm>
                    </WelcomeContainer>
                </WelcomeControl>
            </WelcomeStyled>
            )
        }
        </>
    )
}

export default Welcome