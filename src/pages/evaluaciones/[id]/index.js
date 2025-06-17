import HeadPage from '../../../components/head'
import HeaderSign from '../../../components/header/sign'
import { isLoggedUser } from 'utils/functions/auth'
import { useSession } from '../../../hooks'
import { detailEvaluation } from 'utils/api/evaluations';
import HypothesisEditForm from '../../../components/hyphotesis/edit';


const ResultPage = ({evaluation}) => {
  const { loggedUser, logout } = useSession()
  return (
    <>
      <HeadPage title={'IncubaUNT - Evaluaciones'} description={'Evaluaciones'} />
      <HeaderSign user={loggedUser} handleLogout={logout} />
      {/* <Evaluation /> */}
      <HypothesisEditForm evaluation={evaluation} />
    </>
  )
}

ResultPage.getInitialProps = async ctx => {
    const { jwt } = await isLoggedUser(ctx)
    const { id } = ctx.query

    const evaluation = await detailEvaluation(id, {populate: ['user', 'parent']}, jwt)
    if (evaluation.success) {
      return { evaluation }
    }
    return {}
}
  
export default ResultPage