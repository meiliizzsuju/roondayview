import { useParams } from "react-router-dom"

export const UserDetails = () => {
  // const params = useParams()
  // const userId = params.userId
  // destructured below:
  const { userId } = useParams()
  return (
    <div>Details about User {userId}</div>
  )
}
