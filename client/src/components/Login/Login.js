import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { errorsIn } from '../../js/actions/errors'


function mapDispatchToProps(dispatch) {
  return {
    error: message => dispatch(errorsIn(message))
  };
}


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        myKey: 'E@Js#07Do=U$'
        
    }
  }
  componentDidMount() {
    
    this.handleSubmit()
  }

 
  handleSubmit(e) {
    //e.preventDefault()
    axios.post('/wabaSend/login', {password: this.state.myKey})
    .then(res=> {
       localStorage.setItem('jwtToken', res.data.token)
       axios.defaults.headers.common['Authorization'] =  'Bearer'+res.data.token
    })
    .catch(err=>{
      localStorage.removeItem('jwtToken')
      if (err.response.status === 401) {
        let message = "Error validating your credentials"
        this.props.error(message);
      }
      else {
        this.props.error(err.response.statusText);
      }

    })
  }
 
  render(){
  return (
    <div>


      
    </div>
  )
  }
}

const connected = connect(null, mapDispatchToProps)(Login);
export default connected