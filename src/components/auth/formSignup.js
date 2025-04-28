import { useState } from "react"
import { PersonalForm } from "./personal"
import { AdditionallForm } from "./additional"
import { CompanyForm } from "./company"

export const SignupFormUser = ({handleSuccess, handleError}) => {
    const [option, setOption] = useState(1)
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        repassword: '',
        password: '',
        dni: '',
        document: '',
        country: '',
        city: '',
        company: '',
        companyName: '',
        ruc: '',
        rol: ''
    })
    console.log('values', values)
    console.log('option', option)
    return (
        <div>
            {
                option === 1 ? (
                    <PersonalForm values={values} setValues={setValues} handleError={handleError} setOption={setOption} handleSuccess={handleSuccess} />
                ) : option === 2 ? (
                    <AdditionallForm values={values} setValues={setValues} handleError={handleError} setOption={setOption} handleSuccess={handleSuccess} />
                ) : (
                    <CompanyForm values={values} setValues={setValues} handleError={handleError} setOption={setOption} handleSuccess={handleSuccess} />
                )
            }
        </div>
        // <div ref={formRef}>
        //     <FormControl>
        //         <FormLabel>
        //             Nombres
        //         </FormLabel>
        //         <FormInput 
        //             type="text" 
        //             placeholder="Nombres" 
        //             required={true}
        //             value={values.firstName}
        //             onChange={handleChange('firstName')}
        //         />
        //     </FormControl>
        //     <FormControl>
        //         <FormLabel>
        //             Apellidos
        //         </FormLabel>
        //         <FormInput 
        //             type="text" 
        //             placeholder="Apellidos" 
        //             required={true}
        //             value={values.lastName}
        //             onChange={handleChange('lastName')}
        //         />
        //     </FormControl>
        //     <FormControl>
        //         <FormLabel>
        //             Email
        //         </FormLabel>
        //         <FormInput 
        //             type="email" 
        //             placeholder="Correo electrónico" 
        //             required={true}
        //             value={values.email}
        //             onChange={handleChange('email')}
        //         />
        //     </FormControl>
        //     <FormControl>
        //         <FormLabel>
        //             Celular
        //         </FormLabel>
        //         <FormInput 
        //             type="tel"
        //             placeholder="Celular" 
        //             required={true}
        //             value={values.mobile}
        //             onChange={handleChange('mobile')}
        //         />
        //     </FormControl>
        //     <FormControl>
        //         <FormLabel>
        //             Tipo de documento
        //         </FormLabel>
        //         <FormSelect 
        //             placeholder="Seleccionar rol" 
        //             required={true}
        //             value={values.rol}
        //             onChange={handleChange('rol')}
        //         >
        //             <option value="" disabled selected>Seleccionar una opción</option>
        //             <option value="emprendedor">Emprendedor</option>
        //             <option value="inversor">Inversor</option>
        //             <option value="mentor">Mentor</option>
        //         </FormSelect>
        //     </FormControl>
        //     <FormControl>
        //         <FormLabel>
        //             Número de documento
        //         </FormLabel>
        //         <FormInput 
        //             type="tel"
        //             placeholder="Celular" 
        //             required={true}
        //             value={values.mobile}
        //             onChange={handleChange('mobile')}
        //         />
        //     </FormControl>
        //     <FormControl>
        //         <FormLabel>
        //             Rol
        //         </FormLabel>
        //         <FormSelect 
        //             placeholder="Seleccionar rol" 
        //             required={true}
        //             value={values.rol}
        //             onChange={handleChange('rol')}
        //         >
        //             <option value="" disabled selected>Seleccionar una opción</option>
        //             <option value="emprendedor">Emprendedor</option>
        //             <option value="inversor">Inversor</option>
        //             <option value="mentor">Mentor</option>
        //         </FormSelect>
        //     </FormControl>
        //     <FormControl>
        //         <FormLabel>
        //             País
        //         </FormLabel>
        //         <FormSelect 
        //             placeholder="Seleccionar rol" 
        //             required={true}
        //             value={values.rol}
        //             onChange={handleChange('rol')}
        //         >
        //             <option value="" disabled selected>Seleccionar una opción</option>
        //             <option value="emprendedor">Emprendedor</option>
        //             <option value="inversor">Inversor</option>
        //             <option value="mentor">Mentor</option>
        //         </FormSelect>
        //     </FormControl>
        //     <FormControl>
        //         <FormLabel>
        //             Ciudad
        //         </FormLabel>
        //         <FormSelect 
        //             placeholder="Seleccionar rol" 
        //             required={true}
        //             value={values.rol}
        //             onChange={handleChange('rol')}
        //         >
        //             <option value="" disabled selected>Seleccionar una opción</option>
        //             <option value="emprendedor">Emprendedor</option>
        //             <option value="inversor">Inversor</option>
        //             <option value="mentor">Mentor</option>
        //         </FormSelect>
        //     </FormControl>
        //     <FormControl>
        //         <FormLabel>
        //             Contraseña
        //         </FormLabel>
        //         <FormInput 
        //             type="password" 
        //             placeholder="Contraseña" 
        //             required={true}
        //             value={values.password}
        //             onChange={handleChange('password')}
        //         />
        //     </FormControl>
        //     <FormButton onClick={handleSubmit}>
        //         Crear cuenta
        //     </FormButton>
        // </div>
    )
}