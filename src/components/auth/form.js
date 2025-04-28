import { useRef, useState } from "react"
import { FormButton, FormControl, FormInput, FormLabel } from "./styles"
import { useSession } from "../../hooks"

export const LoginFormUser = ({onSuccess, handleError}) => {
    const formRef = useRef()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, loading, error } = useSession()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const band = formRef.current.reportValidity()
        if (email && password && band) {
          const resp = await login(email, password)
          
          if (resp.success) {
            onSuccess(resp.user)
          } else {
            handleError(error)
          }
        }
    }
    return (
        <form ref={formRef}>
            <FormControl>
                <FormLabel>
                    Email
                </FormLabel>
                <FormInput type="email" placeholder="Correo electrónico" required={true} value={email} onChange={(event) => { setEmail(event.target.value) }} />
            </FormControl>
            <FormControl>
                <FormLabel>
                    Contraseña
                </FormLabel>
                <FormInput type="password" placeholder="Contraseña" required={true} value={password} onChange={(event) => {setPassword(event.target.value)}} />
            </FormControl>
            <FormButton onClick={handleSubmit}>
                iniciar sesión
            </FormButton>
        </form>
    )
}