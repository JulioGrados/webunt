// import { LoginFormUser } from './form'
import Router from 'next/router'

import { useState } from 'react'

import { Container, Cover, Footer, FormError, Grid, Image, LinkA, Register, Root, Title, Underline } from './styles'
import { LoginFormUser } from './form'
import { SignupFormUser } from './formSignup'
import { useSession } from '../../hooks'

export const Signup = () => {
  const { singup } = useSession()
  const [error, setError] = useState('')

  const handleSuccess = async (data) => {
    console.log('data', data)
    const resp = await singup(data)
    console.log('resp', resp)
    if (resp.success) {
      setError('')
      Router.push('/bienvenida')
    } else {
      resp.message ? setError(resp.message) : setError('Hay un error con tus datos, verifica tu información')
    }
  }

  const handleError = (warning) => {
    setError(warning)
  }

  return (
    <Grid>
      <Root>
        <Cover></Cover>
      </Root>
      <Root>
        <Container>
          <Image src={`/static/img/logo.png`} alt='logo' />
          <Register>
            <Title>
              Regístrate
            </Title>
            {
              error &&
                <FormError>{'Error: '  + error}</FormError>
            }
            <SignupFormUser handleSuccess={handleSuccess} handleError={handleError} />
          </Register>
          <Underline>
            <LinkA
              href="/login"
            >
              ¿Ya tienes cuenta? Inicia sesión
            </LinkA> 
          </Underline>
          <Footer>
            <span variant="body2" align="center" gutterBottom>
              Copyright © IncubaUNT 2025
            </span>
          </Footer>
        </Container>
      </Root>
    </Grid>
  )
}
