import Link from 'next/link'
import { Actions, ActionButton } from './styles'

export const HeaderActions = ({
  path,
  loading,
  handleSubmit,
  isSaveClean,
  isOnly = false,
  btnName
}) => {
  return (
    <Actions>
      {
        isOnly === false && <Link href={path}>
        <ActionButton disabled={loading}>Cancelar</ActionButton>
      </Link>}
      {isSaveClean && (
        <ActionButton onClick={() => handleSubmit(false)} loading={loading}>
          Guardar y agregar otro
        </ActionButton>
      )}
      <ActionButton
        type='primary'
        onClick={() => handleSubmit(true)}
        loading={loading}
      >
        {btnName}
      </ActionButton>
    </Actions>
  )
}
