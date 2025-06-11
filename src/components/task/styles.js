import styled, { keyframes } from 'styled-components';

export const wave = keyframes`
  0% { background-position: 0 100%; }
  50% { background-position: 100% 0%; }
  100% { background-position: 0 100%; }
`;

export const TaskCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

// export const RocketIcon = styled.div`
//   width: 32px;
//   height: 32px;
//   position: relative;
//   mask: url('https://cdn-icons-png.flaticon.com/512/833/833472.png') center/contain no-repeat;
//   -webkit-mask: url('https://cdn-icons-png.flaticon.com/512/833/833472.png') center/contain no-repeat;
//   background: linear-gradient(135deg, #FFA500 25%, #FF8C00 75%);
//   background-size: 200% 200%;
//   animation: ${wave} 3s infinite linear;
// `;

export const TaskTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
`;

export const Meta = styled.div`
  font-size: 0.85rem;
  color: #777;
`;

export const Reactions = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 1rem;
  font-size: 0.85rem;
  color: #444;

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;