import { useAuth0 } from "@auth0/auth0-react"

function Login() {
  const {loginWithRedirect}=useAuth0()
  return (
    <div>
      <button onClick={()=>loginWithRedirect()}></button>
    </div>
  )
}

export default Login
