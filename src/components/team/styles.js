import styled from "styled-components"

export const TeamStyled = styled.li`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 300px;
`
export const TeamImg = styled.img`
    width: 100%;
    height: 400px;
    border-radius: 15px;
`
export const TeamName = styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    text-align: left;
`
export const TeamRol = styled.p`
    margin: 0;
    font-size: 14px;
    line-height: 22px;
    text-align: left;
`


export const Card = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
`;

export const Photo = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const Info = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #1A738D;
  color: white;
  padding: 1rem;
  font-size: 18px;
  line-height: 1.3;
`;

export const Name = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const Rol = styled.div`
  font-weight: 300;
  font-size: 15px;
  margin-bottom: 0.25rem;
`;