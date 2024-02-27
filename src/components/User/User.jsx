import { useParams } from "react-router-dom"
function User() {

const {id} = useParams();    

  return (
    <div className="text-center font-bold text-2xl">User{id}</div>
  )
}
export default User