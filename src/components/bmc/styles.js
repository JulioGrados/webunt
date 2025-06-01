import styled from 'styled-components';

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
`;

export const SplitColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  height: 100%;
`;

export const BottomRow = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 2rem 2rem 2rem;
  height: 350px;
`;

export const HalfBox = styled(Box)`
  flex: 1;
  height: 100%;
`;

export const Title = styled.h4`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const Task = styled.div`
  background: #fafafa;
  border: 1px solid #ddd;
  padding: 0.5rem;
  border-radius: 4px;
  margin-top: 0.5rem;
`;