import { useRef, useState } from "react"
import { Circle, FormButton, FormControl, FormInput, FormLabel, FormSelect, Subtitle } from "./styles"
import { Country, City } from "country-state-city"

export const CompanyForm = ({handleSuccess, handleError, values, setValues, setOption}) => {
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
        if(values.country === '') {
            handleError('No tiene seleccionado un país en el formulario')
            return
        }
        if(values.city === '') {
            handleError('No tiene seleccionado una ciudad en el formulario')
            return
        }
        if(values.company.trim() === '') {
            handleError('No tiene ingresado una compañia en el formulario')
            return
        }
        setOption(1)
        handleSuccess({...values})
    }
    return (
        <div>
            <Subtitle>Completa los datos de la startup.</Subtitle>
            <Circle>
                3/3
            </Circle>
            <div ref={formRef}>
            <FormControl>
                <FormLabel>
                    Nombre de la Startup *
                </FormLabel>
                <FormInput 
                    type="text" 
                    placeholder="Nombre de la Startup" 
                    required={true}
                    value={values.company}
                    onChange={handleChange('company')}
                />
            </FormControl>
            <FormControl>
                <FormLabel>
                    Razón social (opcional)
                </FormLabel>
                <FormInput 
                    type="text" 
                    placeholder="Razón social" 
                    required={true}
                    value={values.companyName}
                    onChange={handleChange('companyName')}
                />
            </FormControl>
            <FormControl>
                <FormLabel>
                    Ruc (opcional)
                </FormLabel>
                <FormInput 
                    type="text" 
                    placeholder="ruc" 
                    required={true}
                    value={values.ruc}
                    onChange={handleChange('ruc')}
                />
            </FormControl>
             <FormControl>
                 <FormLabel>
                     País
                 </FormLabel>
                 <FormSelect 
                     placeholder="Seleccionar país" 
                     required={true}
                     value={values.country}
                     onChange={handleChange('country')}
                 >
                     <option value="" disabled selected>Seleccionar una opción</option>
                    {countryOptions.map((country) => (
                        <option key={country.isoCode} value={country.isoCode}>
                            {country.name}
                        </option>
                    ))}
                 </FormSelect>
             </FormControl>
             <FormControl>
                 <FormLabel>
                     Ciudad
                 </FormLabel>
                 <FormSelect 
                     placeholder="Seleccionar ciudad" 
                     required={true}
                     value={values.city}
                     onChange={handleChange('city')}
                 >
                     <option value="" disabled selected>Seleccionar una opción</option>
                     {cities.map((city, index) => (
                        <option key={index} value={city.name}>
                            {city.name}
                        </option>
                    ))}
                 </FormSelect>
             </FormControl>
             
        <FormButton onClick={handleSubmit}>
            Crear cuenta
        </FormButton>
            </div>
        </div>
    )
}