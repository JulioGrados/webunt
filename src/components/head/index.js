import Head from 'next/head'
import { useRouter } from 'next/router'

const HeadPage = ({title, description}) => {
    const router = useRouter()
    let pathCanonical = router.asPath !== '/' ? router.asPath : ''

    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <link rel='shortcut icon' href='/static/img/logo.png' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <meta http-equiv='X-UA-Compatible' content='IE=Edge' />
            <meta charset='utf-8' />
            <link
                rel='canonical'
                href={'https://www.incubaunt.com' + pathCanonical}
            ></link>
        </Head>   
    )
} 
export default HeadPage