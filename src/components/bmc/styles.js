import styled from 'styled-components';

export const Header = styled.div`
  display: grid;
  gap: 1rem;
  padding: 2rem 2rem 0 2rem;
  background-color: #f8f8f8;
`;

export const Footer = styled.div`
  display: grid;
  gap: 1rem;
  padding: 0rem 2rem 10rem 2rem;
  background-color: #f8f8f8;
`;

export const HeaderTitle = styled.h1`
  text-align: center;
  margin: 0;
  font-weight: 500;
`

export const HeaderTitleCompany = styled.span`
  text-align: center;
  margin: 0;
  color: #1A738D;
`

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderbuttonHy = styled.a`
  width: 150px;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  background-color: #FFA500;
  border-radius: 100px;
  &:hover {
    color: #fff;
    transform: scale(1.1);
  }
`

export const HeaderbuttonIn = styled.a`
  width: 150px;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  background-color: #1A738D;
  border-radius: 100px;
  margin-left: 8px;
  &:hover {
    color: #fff;
    transform: scale(1.1);
  }
`

export const Canvas = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding: 2rem;
  background-color: #f8f8f8;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 700px;
`;

export const Box = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0.75rem;
  height: ${props => props.medium ? '50%' : '100%'};
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  overflow-y: auto;
`;

export const SplitColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  height: 100%;
`;

export const BottomRow = styled.div`
  background: #f8f8f8;
  display: flex;
  gap: 1rem;
  padding: 0 2rem 2rem 2rem;
  height: 350px;
`;

export const HalfBox = styled(Box)`
  flex: 1;
  height: 100%;
`;

export const Task = styled.div`
  background: #fafafa;
  border: 1px solid #ddd;
  padding: 0.5rem;
  border-radius: 4px;
  margin-top: 0.5rem;
`;