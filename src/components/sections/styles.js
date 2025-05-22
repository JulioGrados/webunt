import styled from 'styled-components'

export const GoalsSectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 120px 0;

    @media (max-width: 768px) {
        padding: 80px 0;
    }

    @media (max-width: 480px) {
        padding: 60px 0;
    }
`
export const GoalsList = styled.ul`
    margin-top: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;

    @media (max-width: 768px) {
        gap: 1.5rem;
        margin-top: 40px;
    }

    @media (max-width: 480px) {
        gap: 1rem;
    }
`
export const MentorsSectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    z-index: -1;
`
export const TestimoniesSectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
`
export const TestimoniesList = styled.ul`
    width: 100%;
    display: flex;
    margin-top: 60px;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;

    @media (max-width: 768px) {
        gap: 1rem;
        margin-top: 40px;
    }

    @media (max-width: 480px) {
        gap: 0.5rem;
        padding: 0 1rem;
    }
`
export const ProgramsSectionStyled = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
`
export const ProgramContent = styled.ul`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 50px;
`
export const ProgramRecatangle = styled.div`
    width: 10px;
    height: 70px;
    border-radius: 10px;
    background-color: #1A738D;
    margin-top: ${props => props.margin};
`
export const UsSectionStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const UsSectionContent = styled.div`
    width: calc(100% - 412px);
    padding-left: 50px;
`
export const UsBenefitContent = styled.div`
    width: calc(100% - 412px);
    padding-right: 50px;
`
export const UsSectionContentText = styled.p`
    font-size: 16px;
    font-weight: 300;
    line-height: 30px;
    margin: 25px 0;
    text-align: left;
`
export const UsSectionContentList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 30px;
`
export const UsSectionContentItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
export const UsSectionContentItemText = styled.p`
    display: inline;
    padding-left: 15px;
    font-size: 16px;
    line-height: 25px;
    margin: 0;
`
export const UsSectionContentItemTextBold = styled.b`
    font-weight: 600;
`
export const UsBenefitContentList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 25px 0;
`
export const UsSectionContentButton = styled.a`
    width: 180px;
    height: 44px;
    line-height: 44px;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    color: #fff;
    background-color: #1A738D;
    display: inline-block;
    border-radius: 22px;
`
export const TeamSectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
`
export const TeamList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 50px;
`
export const PortfolioSectionStyled = styled.ul`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
`
export const PortfolioItem = styled.li`
    border: 1px solid #F5F5F5;
    box-shadow: 0px 2px 2px rgba(0,0,0,.2);
    border-radius: 15px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 330px;
    height: 440px;
    justify-content: space-between;
    margin-bottom: 30px;
`
export const PortfolioItemFigure = styled.div`
    width: 280px;
    height: 118px;
    display: flex; /* Flexbox para centrar la imagen */
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
`
export const PortfolioItemImg = styled.img`
    max-width: 200px;
    max-height: 79px;
`
export const PortfolioItemTag = styled.div`
    width: 103px;
    height: 21px;
    background-color: rgba(26, 115, 141, .5);
    text-align: center;
    line-height: 21px;
    font-size: 12px;
    font-weight: 500;
    color: #1A738D;
    margin: 15px 0 8px 0;
    border-radius: 15px;
`
export const PortfolioItemText = styled.div`
    width: 280px;
    height: 66px;
    font-size: 13px;
    line-height: 22px;
    overflow: hidden;
`
export const PortfolioItemList = styled.ul`
    padding-top: 5px;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
`
export const PortafolioItemli = styled.li`
    display: flex;
    align-items: center;
    margin-top: 5px;
    width: 100%;
`
export const PortfolioItemliContent = styled.div`
    display: flex;
    align-items: center;
    width: calc(100% - 19px);
    flex-wrap: wrap;
    padding-left: 10px;
`
export const PortfolioItemliContentBold = styled.span`
    font-weight: 500;
    font-size: 13px;
`
export const PortfolioItemliContentText = styled.span`
    font-size: 13px;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    margin-left: 5px;
`
export const PortfolioItemLink = styled.a`
    text-align: center;
    color: #1A738D;
    font-size: 14px;
    font-weight: 400;
    text-decoration: underline;
    cursor: pointer;
`
export const ProgramsPageSectionStyled = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
export const ProgramsPageItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 100px;
`
export const ProgramsPageFigure = styled.div`
    position: relative;
    z-index: -1;
`
export const ProgramsPageImg = styled.img`
    width: 397px;
    height: 270px;
    border-radius: 15px;
`
export const ProgramsPageLogo = styled.div`
    position: absolute;
    bottom: -20px;
    right: -20px;
    background-color: #fff;
    border: 1px solid #F5F5F5;
    box-shadow: 0px 5px 5px rgba(0,0,0,.15);
    overflow: hidden; /* Asegura que la imagen no sobresalga de la caja */
    display: flex; /* Flexbox para centrar la imagen */
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
    padding: 10px;
    border-radius: 15px;
`
export const ProgramsPageLogoImg = styled.img`
    width: 54px;
`
export const ProgramPageContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: ${props => props.right ? '0px' : '80px'};
    padding-right: ${props => props.right ? '80px' : '0px'};
`
export const ProgramPageTitle = styled.h3`
    font-size: 50px;
    margin: 0;
    text-align: left;
    font-weight: 600;
    color: #000;
`
export const ProgramPageText = styled.p`
    font-size: 18px;
    line-height: 30px;
    margin: 20px 0 30px 0;
    text-align: left;
    color: #000;
`
export const ProgramPageButton = styled.a`
    display: inline-block;
    width: 180px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    background-color: #1A738D;
    border-radius: 15px;
    &:hover {
        color: #fff;
        transform: scale(1.01);
    }
`
export const SectionInitiativesPageStyled = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
`
export const SectionContactStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const SectionContactList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
export const SectionContactItem = styled.li`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const SectionContactItemCircle = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    flex: 1;
    border: 3px solid #1A738D;
    overflow: hidden; /* Asegura que la imagen no sobresalga de la caja */
    display: flex; /* Flexbox para centrar la imagen */
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
`
export const SectionContactItemContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: calc(100% - 80px);
    padding-left: 15px;
`
export const SectionContactItemContentName = styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    text-align: left;
`
export const SectionContactItemContentText = styled.p`
    font-size: 14px;
    margin: 0;
    text-align: left;
    line-height: 22px;
`
export const SectionContactMaps = styled.div`
    width: 100%;
    height: 400px;
    margin: 80px 0;
`

export const SectionContactMapsIframe = styled.iframe`
    width: 100%;
    height: 100%;
`
export const SectionContactForm = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`
export const SectionContactFormInput = styled.input`
    border: 1px solid #98B0B7;
    width: 30%;
    height: 44px;
    padding: 14px 20px;
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
`
export const SectionContactMesaje = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`
export const SectionContactMesajeTitle = styled.h1`
    font-size: 24px;
    font-weight: 600;
    margin: 0;
`
export const SectionContactMesajeText = styled.p`
    margin: 10px 0 30px 0;
    font-size: 16px;
`
export const SectionContactFormTextarea = styled.textarea`
    border: 1px solid #98B0B7;
    width: 100%;
    height: 100px;
    margin-top: 20px;
    padding: 14px 20px;
    border-radius: 4px;
    overflow: auto;
    resize: none;
    font-family: 'Montserrat', sans-serif;
`
export const SectionContactFormButton = styled.button`
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    background-color: #1A738D;
    border-radius: 23px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    margin-top: 20px;
    cursor: pointer;
`

export const Section = styled.div`
    width: 100%;
    padding-top: 80px;
`