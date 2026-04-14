import { useSelector } from "react-redux"
import EditProfile from "./EditProfile"

const Profile = () => {
    const userProfile = useSelector(store => store.user);  
  return (
    userProfile && (<div>
      <EditProfile user={userProfile}/>
    </div>)
  )
}

export default Profile