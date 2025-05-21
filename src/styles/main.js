import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`
export const Section = styled.section`
  border-bottom: ${props => props.bottom ? '5px solid #1A738D' : 'none'};
  
`
export const Trama1 = styled.img`
  position: absolute;
  left: 0;
  top: 0;
`
export const Trama2 = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`
export const Trama3 = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
`
export const Trama4 = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`
export const SectionItem = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0 50px 0;
`
export const SectionImg = styled.section`
  position: sticky;
  width: 100%;
  background: linear-gradient(to bottom right, rgba(3, 37, 57, .2), rgba(26, 115, 141, .2)) 0% 0% / cover, url(/static/img/home2.jpg) center center no-repeat;
`
export const SectionTitle = styled.h1`
  text-align: center;
  font-size: 70px;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
  padding: 50px 0;
`