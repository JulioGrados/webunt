import { useRef, useState } from "react"
import { Circle, FormButton, FormControl, FormInput, FormLabel, FormSelect, Subtitle } from "./styles"
import { Country, City } from "country-state-city"

export const AdditionallForm = ({handleSuccess, handleError, values, setValues, setOption}) => {
    const formRef = useRef()
    const [cities, setCities] = useState([]);

    // Obtener lista de países
    const countryOptions = Country.getAllCountries();

    const handleChange = (prop) => (event) => {
        if(prop === 'country') {
            setValues({ ...values, [prop]: event.target.value, ['city']: '' });
            const cityOptions = City.getCitiesOfCountry(event.target.value);
            setCities(cityOptions);
        } else {
            setValues({ ...values, [prop]: event.target.value });
        }
    }

    const handleSubmit = () => {
        if(values.firstName.trim() === '') {
            console.log('1', values.firstName.trim())
            handleError('No tiene los nombres en el formulario')
            return
        }
        if(values.lastName.trim() === '') {
            handleError('No tiene los nombres en el formulario')
            return
        }
        if(values.document === '') {
            handleError('No tiene seleccionado un documento en el formulario')
            return
        }
        if(values.dni.trim() === '') {
            handleError('No tiene dni en el formulario')
            return
        }
        if(values.mobile.trim() === '') {
            console.log('4')
            handleError('No tiene celular el formulario')
            return
        } else {
            const regex = /^[0-9]{9,15}$/;
            if (!regex.test(values.mobile)) {
                console.log('5')
                handleError('No tiene celular el formulario')
                return
            }
        }
        setOption(3)
    }
    return (
        <div>
            <Subtitle>Completa los datos del lider emprendedor.</Subtitle>
            <Circle>
                2/3
            </Circle>
            <div ref={formRef}>
            <FormControl>
                <FormLabel>
                    Nombres *
                </FormLabel>
                <FormInput 
                    type="text" 
                    placeholder="Nombres" 
                    required={true}
                    value={values.firstName}
                    onChange={handleChange('firstName')}
                />
            </FormControl>
            <FormControl>
                <FormLabel>
                    Apellidos *
                </FormLabel>
                <FormInput 
                    type="text" 
                    placeholder="Apellidos" 
                    required={true}
                    value={values.lastName}
                    onChange={handleChange('lastName')}
                />
            </FormControl>
            <FormControl>
                 <FormLabel>
                     Tipo de documento
                 </FormLabel>
                 <FormSelect 
                     placeholder="Selecciona el tipo de documento" 
                     required={true}
                     value={values.document}
                     onChange={handleChange('document')}
                 >
                     <option value="" disabled selected>Seleccionar una opción</option>
                     <option value="DNI">DNI</option>
                     <option value="Carné de Extranjería">Carné de Extranjería</option>
                     <option value="Pasaporte">Pasaporte</option>
                     <option value="Otros">Otros</option>
                 </FormSelect>
             </FormControl>
             <FormControl>
                 <FormLabel>
                     Número de documento
                 </FormLabel>
                 <FormInput 
                     type="text"
                     placeholder="Número de documento" 
                     required={true}
                     value={values.dni}
                     onChange={handleChange('dni')}
                 />
             </FormControl>
             <FormControl>
                <FormLabel>
                    Celular *
                </FormLabel>
                <FormInput 
                    type="text"
                    placeholder="Celular" 
                    required={true}
                    value={values.mobile}
                    onChange={handleChange('mobile')}
                />
            </FormControl>
             
                <FormButton onClick={handleSubmit}>
                    Siguiente
                </FormButton>
            </div>
        </div>
    )
}