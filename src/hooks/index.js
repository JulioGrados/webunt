import { useState } from 'react'

export const useStateData = (initialData = {}) => {
  const [data, setData] = useState(initialData)

  // cambiar una propiedad
  const changeData = (name, value) => {
    data[name] = value
    setData({ ...data })
  }

  // cambiar varias propiedades
  const changeAllData = data => {
    setData({ ...data })
  }

  const cleanData = () => {
    setData({})
  }

  return { data, changeData, cleanData, changeAllData }
}

// export { usePayments } from './usePayments'
// export { useMetas } from './useMetas'
// export { useLabels } from './useLabel'
// export { useCertificates } from './useCertificates'
// export { useCourses } from './useCourses'
// export { useEnrols } from './useEnrols'
// export { useDeals } from './useDeals'
// export { useTestimony } from './useTestimony'
// export { useCompanies } from './useCompany'
// export { useLessons } from './useLessons'
// export { useAssessor } from './useAssessor'
export { useUsers } from './useUsers'
export { useSession } from './useSession'
export { useUploads } from './useUpload'
export { usePrograms } from './usePrograms'
export { useAllys } from './useAllys'
export { useGoals } from './useGoals'
export { useInitiatives } from './useInitiatives'
export { useMentors } from './useMentors'
export { useTeams } from './useTeams'
export { usePortfolio } from './usePortfolio'
export { useEvaluations } from './useEvaluations'
export { useInterviews } from './useInterviews'
export { useComments } from './useComment'
// export { useClaims } from './useClaim'
// export { useOrders } from './useOrders'
