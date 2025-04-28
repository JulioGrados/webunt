import { HeaderSectionContent, HeaderSectionTitle } from './styles'

export const HeaderSection = ({ children, title }) => {
  return (
    <HeaderSectionContent>
      <HeaderSectionTitle>{title}</HeaderSectionTitle>
      {children}
    </HeaderSectionContent>
  )
}
