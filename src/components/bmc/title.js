import styled from 'styled-components';

export const Title = ({ children, icons }) => (
  <TitleContainer>
    <span>{children}</span>
    {icons && <IconGroup>{icons}</IconGroup>}
  </TitleContainer>
);

const TitleContainer = styled.h4`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const IconGroup = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: flex-start;
`;