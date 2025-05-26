import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 60px;
`;

export const Card = styled.div`
  flex: 1 1 30%;
  min-width: 250px;
  height: 500px;
  position: relative;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(3, 37, 57, .4), rgba(26, 115, 141, .4));
  opacity: 0.7;
`;

export const Content = styled.div`
  position: absolute;
  inset: 0;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 1rem;
  font-weight: bold;
  color: white;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 2rem;
  font-weight: 400;
`;

export const Button = styled.a`
  border: 2px solid #fff;
  color: #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 40px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #032539;
  }
`;