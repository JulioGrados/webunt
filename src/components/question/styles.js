import styled from 'styled-components'

export const QuestionStyled = styled.div`
    width: 100%;
    height: calc(100% - 70px);
    margin: 0 auto;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 768px) {
      padding: 20px 10px;
      height: auto;
    }
`

export const QuestionControl = styled.div`
    max-width: 1200px;
    height: 100%;
    background-color: #fff;
    width: 100%;
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
      overflow-y: auto;
    }
`

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding:  0px 40px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    order: 1;
  }
`;

export const RightSection = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 0 40px 0 80px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    order: 2;
  }
`;

export const QuestionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const QuestionText = styled.h2`
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

`;

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 0px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export const Button = styled.button`
  background: #1A738D;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    padding: 10px;
  }
`;

export const ProgressContainer = styled.div`
  position: absolute;
  left: 30%;
  width: 5px;
  height: 100%;
  background: #1A738D;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CircleContainer = styled.div`
  position: relative;
  width: 62px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  background: white;
  border: 12px solid #EEEEEE;
  z-index: 1;
  color: ${({ active, completed }) =>
    completed ? "#1A738D" : active ? "#000000" : "#CCCCCC"};
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 12px;
    border-width: 10px;
  }
`;

export const ActiveBorder = styled.div`
  position: absolute;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: 3px solid #1A738D;
  z-index: 3;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const ProgressBorder = styled.div`
  position: absolute;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  z-index: 2;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const CircleQuarter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 12px solid transparent;
  clip-path: polygon(50% 50%, 100% 0, 100% 100%, 50% 100%);
  transform: rotate(${(props) => props.angle}deg);
  border-top-color: ${(props) => (props.filled ? "#1A738D" : "transparent")};
  border-right-color: ${(props) => (props.filled ? "#1A738D" : "transparent")};
`;