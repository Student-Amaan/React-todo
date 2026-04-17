import React , {useContext} from 'react'
import userContext from '../context/UserContext';

function Profile() {

  const { user } = useContext(userContext);
  if(!user) return <div>please Login</div>

  return <div>Welcome: {user}</div>
}

export default Profile