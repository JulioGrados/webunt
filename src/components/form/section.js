import { FormInformation, FormLine } from './styles'

export const FormSection = ({ children, hasLine = false }) => {
  return (
    <>
      <FormInformation>{children}</FormInformation>
      {hasLine && <FormLine />}
    </>
  )
}
