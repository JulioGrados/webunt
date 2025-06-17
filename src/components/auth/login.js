// import { LoginFormUser } from './form'
import Router from 'next/router'

import { useState } from 'react'

import { Container, Cover, Footer, FormError, Grid, Image, LinkA, Register, Root, Title, Underline, RootCover } from './styles'
import { LoginFormUser } from './form'

export const Login = () => {
  const [error, setError] = useState('')

  const handleSucces = (user) => {
    Router.push('/')
  }

  const handleError = (warning) => {
    setError(warning)
  }

  return (
    <Grid>
      <RootCover>
        <Cover></Cover>
      </RootCover>
      <Root>
        <Container>
          <Image src={`/static/img/logo.png`} alt='logo' />
          <Register>
            <Title>
              Ingresa con tu cuenta
            </Title>
            {
              error &&
                <FormError>{'Error: '  + error}</FormError>
            }
            <LoginFormUser onSuccess={handleSucces} handleError={handleError} />
          </Register>
          <Underline>
            <LinkA
              href="/signup"
            >
              ¿No tienes cuenta? Regístrate
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
