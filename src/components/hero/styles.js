import styled from "styled-components";

export const HeroSection = styled.section`
  background: url('/static/img/hero.jpg') center/cover no-repeat;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;
  color: white;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;

  h1 {
    font-size: 56px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1rem;
    color: #fff;
  }

  p {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 2rem;
    color: #fff;
  }

  button {
    padding: 0.75rem 2rem;
    font-size: 1rem;
    background-color: #00BF63;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #019875;
    }
  }
`;