// import Auth from 'react'
import {useState} from 'react'
import {signUp} from '../redux/actionCreators'
import {Login} from '../redux/actionCreators'
import {connect} from 'react-redux'

function Auth(props) {

   const [signup, setSignUp] = useState(false)
   const [name, setName] = useState("")
   const [username, setUsername] = useState("")
   const [creditcardnum, setCreditCardNum] = useState("")
   const [password, setPassword] = useState("")


   const toggleSignUp = () => setSignUp(!signup)

   const handleSubmit = (e) => {
       e.preventDefault()
      { signup ? props.signUp({name, username, creditcardnum, password}) : props.Login({username, password})}
   }

    return <>
      {signup ? <h1>Sign up</h1> : <h1>Login</h1>}

     <form onSubmit={handleSubmit}>
     {signup && <label>
          Name:
        <input type="text" name="name" placeholder="e.g John"  value={name} onChange={(e) => setName(e.target.value)}/>
        </label>}
        <label>
          UserName:
        <input type="text" name="username"  value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        {signup && <label>
         Credit Card Number:
        <input type="number" name="creditcard" placeholder="e.g Master, Visa, AE"   value={creditcardnum} onChange={(e) => setCreditCardNum(e.target.value)}/>
        </label>}
        <label>
         Password:
        <input type="password" name="password" placeholder="e.g 1234"  value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
     </form>

      <button onClick={toggleSignUp}> {signup ? "Login" : "SignUp"} </button>
         </>

}


export default connect (null , {signUp, Login})(Auth);