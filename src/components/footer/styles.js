import styled from 'styled-components'
export const FooterStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    /* padding: 2rem 1.5rem; */
    /* background-color: #f7f7f7; */

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
`
export const FooterLine = styled.hr`
    width: 100%;
    background-color: #1A738D;
    height: 3px;
    margin: 10px auto 0;
    border-radius: 40px;
    border: none;
`
export const FooterLeft = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-right: 40px;
    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        text-align: center;
        padding-right: 0;
    }
`
export const FooterLogo = styled.img`
    width: 220px;
    @media (max-width: 768px) {
        width: 180px;
    }
`
export const FooterText = styled.p`
    margin: 20px 0 30px 0;
    line-height: 22px;
    font-size: 13px;
    @media (max-width: 768px) {
        padding: 0 1rem;
    }
`
export const FooterSocial = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 768px) {
        justify-content: center;
        flex-wrap: wrap;
    }
`
export const FooterSocialItem = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
    background-color: #032539;
    overflow: hidden; /* Asegura que la imagen no sobresalga de la caja */
    display: flex; /* Flexbox para centrar la imagen */
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
`
export const FooterRight = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
`

export const FooterRightItem = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        text-align: center;
    }
`
export const FooterTitle = styled.h3`
    margin: 0;
    font-size: 18px;
    font-weight: 600;
`
export const FooterList = styled.ul`
    margin-top: 15px;
`
export const FooterListItem = styled.a`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media (max-width: 768px) {
        justify-content: center;
    }
`
export const FooterListItemCircle = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #032539;
    margin-right: 15px;
`
export const FooterListItemName =styled.a`
    font-weight: 300;
    font-size: 13px;
    color: #000;
    text-decoration: none;
`
export const FooterListItemContent = styled.div`
    display: flex;
    flex-direction: column;
`
export const FooterListItemSubtitle = styled.h4`
    font-size: 13px;
    font-weight: 600;
    margin: 0;
    text-align: left;
`