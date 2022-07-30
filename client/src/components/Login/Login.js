import React, {useState} from 'react'
import axios from 'axios'

const Login = ({setUser})=>{
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors('')
    axios.post('/wabaSend/login', {name:username,password:password})
    .then(res=> {
       localStorage.setItem('jwtToken', res.data.token)
       axios.defaults.headers.common['Authorization'] =  'Bearer'+res.data.token
       setUser({ auth:true, name: res.data.username })
    })
    .catch(err=>{
       if(err.response){
         if(err.response.status===401) setErrors('Invalid credentials')
         else setErrors('Please try again.')
    }
       console.log(err)
    })
  }
 
  return (
    <form>
      <input type='text' name='username' placeholder='username'
        onChange = {e=> setUsername(e.target.value)}/>
      <input type='password' name='pass' placeholder='password'
        onChange = {e=> setPassword(e.target.value)}/>
      <button type='submit' onClick= {e=> handleSubmit(e)}>Submit</button>
      <p>{errors}</p>
    </form>
  )
}

export default Login