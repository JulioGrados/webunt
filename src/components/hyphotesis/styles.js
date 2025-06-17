import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  max-width: 768px;
  margin: 0 auto;
`;

export const Section = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #aaa;
  border-radius: 4px;
  background: ${({ active }) => (active ? '#ffe066' : '#f1f1f1')};
  font-weight: ${({ active }) => (active ? '600' : 'normal')};
  cursor: pointer;

  &:hover {
    background: #e0e0e0;
  }
`;

export const ButtonA = styled.a`
  width: 150px;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  background: #FFA500;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: #fff;
    transform: scale(1.1);
  }
`;

export const ButtonB = styled.a`
  width: 150px;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  background: #1A738D;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: #fff;
    transform: scale(1.1);
  }
`;


export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #aaa;
  border-radius: 4px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #aaa;
  border-radius: 4px;
  resize: vertical;
`;

export const FileInput = styled.input`
  margin-top: 0.5rem;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-left: 15px;
`

export const Url = styled.a`
  font-size: 14px;
  margin-left: 15px;
`

export const Interviews = styled.div`
  display: flex;
  margin-left: 15px;
`

export const Bar = styled.div`
  background-color: #f1f1f1;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const BarEdit = styled.a`
  width: 120px;
  padding: 0.3rem 1rem;
  border-radius: 100px;
  background: #1A738D;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: #fff;
    transform: scale(1.1);
  }
`

export const BarDelete = styled.a`
  width: 120px;
  padding: 0.3rem 1rem;
  border-radius: 100px;
  background: #1A738D;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  text-align: center;
  margin-left: 10px;
  &:hover {
    color: #fff;
    transform: scale(1.1);
  }
`