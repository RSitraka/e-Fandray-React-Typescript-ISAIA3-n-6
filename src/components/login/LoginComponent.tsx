import React, {useState} from 'react'
import Message from '../message/MessageForme'

const users = [
	{
		"email": "Sitraka@gmail.com",
		"pseudo": "Sitraka",
		"password": "0123456789"
	},
	{
		"email": "Benja@gmail.com",
		"pseudo": "Benja",
		"password": "master"
	},
	{
		"email": "Zozefa@gmail.com",
		"pseudo": "Zozefa",
		"password": "tendry"
	}
]

const Login = () => {

const [email, setEmail] =useState('') 
const [password, setPassword] = useState('')
const [pseudo, setPseudo] = useState('')
const [connected, setConnected] = useState(false)

const handleEmailChange = (e:any) => {
	setEmail(e.target.value)
}

const handlePasswordChange = (e:any) => {
	setPassword(e.target.value)
}

const login = (e:any) => {
	e.preventDefault()
	users.map(function(user) {
		if(user.email === email && user.password === password) {
			setConnected(true)
			setPseudo(user.pseudo)
			return
		}
	})
}


	if(connected) {
		return(
			<Message email={email} pseudo={pseudo}/>
		)
	} else {
		return(
		<fieldset>
		<div id="form1">
			<form className="form-signin">
  				
  				<h1 className="h3 mb-3 font-weight-normal" id="entete">Bienvenu sur e-Fandray</h1>
  				<label  className="sr-only">Email</label><br/>
  				<input type="email" id="inputEmail"  value={email}  onChange={handleEmailChange} className="form-control" placeholder="Email ... " /><br/>
  				<label  className="sr-only">Mot de passe</label><br/>
  				<input type="password" id="inputPassword" value={password} onChange={handlePasswordChange} className="form-control" placeholder="Mot de passe ..." required/><br/>
  				<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={login}  id="go">e-Fandray</button>
			</form>
		</div>
		<h1 id="maill">Email  == Sitraka@gmail.com <br/>Password == 0123456789</h1>
		</fieldset>
	)
	}
}

export default Login