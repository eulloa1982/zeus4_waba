import React, {useState} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { errorsIn } from '../../js/actions/errors'


const Login = (props) => {
  const dispatch = useDispatch()
  const [myKey, setMyKey] = useState('E@Js#07Do=U$');

  axios.post('/textmessage/login', {password: myKey})
    .then(res=> {
      //quitar el token del localStorage
      localStorage.setItem('jwtToken', res.data.token)
      axios.defaults.headers.common['Authorization'] =  'Bearer'+res.data.token
    })
    .catch(err=>{
      localStorage.removeItem('jwtToken')
      if (err.response.status === 401) {
        let message = "Error validating your credentials"
        dispatch(errorsIn(message));
      }
      else {
        dispatch(errorsIn(err.response.statusText));
      }

  })
  
}

export default Login