import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import HeaderDitt from '../components/header/ditt'
import Hero from '../components/hero'
import Unidades from '../components/sections/unit'
import SeccionImagen from '../components/sections/imagen'
import Us from '../components/us'
import Crew from '../components/crew'
import FooterDitt from '../components/footer/ditt'
import HeadPage from '../components/head'

const Home = ({ meta, country }) => {
  
  return (
    <>
      <HeadPage title={'DITT'} description={'¡Formando startups de alto impacto!. Visita a detalle nuestra página web y nuestras redes sociales.'} />
      <Hero />
      <Unidades />
      <SeccionImagen />
      <Us />
      <Crew />
      <FooterDitt />
    </>
  )
}

export default Home
