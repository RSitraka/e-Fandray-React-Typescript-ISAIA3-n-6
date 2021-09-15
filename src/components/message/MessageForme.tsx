import React, {useState} from 'react'
import './message.css'

interface Iprops {
	pseudo: string
	email: string
}

let tableau:any = [''];
let tableau2:any = [''];

const Message:React.FC<Iprops> = ({email, pseudo}) => {

	const [textMessage, setTextMessage] = useState('')
	const [allMessage, setAllMessage] = useState([' '])

	const [nomDestinataire, setnomDestinataire] = useState('')
	const [validerDest, setvaliderDest] = useState('')

	const handleClickSend = (e:any) => {
		e.preventDefault()
		console.log(tableau)
		tableau.push(textMessage)
		setAllMessage(tableau)
		setTextMessage("")
	}

	const handleMessageChange = (e:any) => {
		setTextMessage(e.target.value)
	}

	const valideDestination = (e:any) =>{
		e.preventDefault()
		tableau2.push(nomDestinataire)
		setvaliderDest(tableau2)
	}

	const handleDestchange = (e:any) => {
		setnomDestinataire(e.target.value)
	}

	return(
		<fieldset>
		<div>
			<div>
				<input type="text" placeholder="Entrer le nom du destinataire" id="destin" value={nomDestinataire} onChange={handleDestchange}/>
				<button type="submit" className="btn btn-success" onClick={valideDestination}  id="send"> Valider </button><br/>
			</div>
			<div>
				{
					allMessage.map(function(message){
						return <p key={message}>{message}</p> 	
					})
				}
			</div>
			<div>
				<input type="text" placeholder="Entrer votre message"  value={textMessage} onChange={handleMessageChange}  id="mess"/>	
				<button type="submit" className="btn btn-success" onClick={handleClickSend}  id="send"> Envoyer </button>
			</div>
		</div>	
		</fieldset>	
	)

}

export default Message
