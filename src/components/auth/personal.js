import { useRef, useState } from "react"
import { Circle, FormButton, FormControl, FormInput, FormLabel, FormSelect, Subtitle } from "./styles"

export const PersonalForm = ({handleSuccess, handleError, values, setValues, setOption}) => {
    const formRef = useRef()

    // const [values, setValues] = useState({
    //     firstName: '',
    //     lastName: '',
    //     mobile: '',
    //     country: 'Peru',
    //     email: '',
    //     password: '',
    // })

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    }
    const handleSubmit = () => {
        console.log('entro', values)
        // if(values.firstName.trim() === '') {
        //     console.log('1', values.firstName.trim())
        //     handleError('No tiene los nombres en el formulario')
        //     return
        // }
        // if(values.lastName.trim() === '') {
        //     handleError('No tiene los nombres en el formulario')
        //     return
        // }
        if(values.email.trim() === '') {
            handleError('No tiene email el formulario')
            return
        } else {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(values.email)) {
                handleError('No tiene email el formulario')
                return
            }
        }
        if(values.password.trim() === '') {
            handleError('No tiene contraseña el formulario')
            return
        }
        if(values.repassword.trim() === '') {
            handleError('No tiene confirmación de contraseña el formulario')
            return
        }
        if(values.repassword.trim() !== values.password.trim()) {
            handleError('No coincide contraseña con la confirmación de contraseña en el formulario')
            return
        }
        handleError('')
        setOption(2)
    }
    return (
        <div>
            <Subtitle>Ingresa tu correo y contraseña.</Subtitle>
            <Circle>
                1/3
            </Circle>
            <div ref={formRef}>
                <FormControl>
                    <FormLabel>
                        Email *
                    </FormLabel>
                    <FormInput 
                        type="email" 
                        placeholder="Correo electrónico" 
                        required={true}
                        value={values.email}
                        onChange={handleChange('email')}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>
                        Contraseña *
                    </FormLabel>
                    <FormInput 
                        type="password" 
                        placeholder="Contraseña" 
                        required={true}
                        value={values.password}
                        onChange={handleChange('password')}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>
                        Confirmar Contraseña *
                    </FormLabel>
                    <FormInput 
                        type="password" 
                        placeholder="Confirmar Contraseña" 
                        required={true}
                        value={values.repassword}
                        onChange={handleChange('repassword')}
                    />
                </FormControl>
                <FormButton onClick={handleSubmit}>
                    Siguiente
                </FormButton>
            </div>
        </div>
    )
}