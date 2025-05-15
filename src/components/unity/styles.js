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
  min-width: 300px;
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
  background-color: #032539;
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
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: white;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
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