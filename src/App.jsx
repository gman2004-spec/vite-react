import './App.module.css'
import { Menu } from './components/menu'
import { useState } from 'react'
import { Calcs } from './Calcs.jsx'
import { Req } from './Req.jsx'

function App() {
  const defaultPhoneNumber = "5541999999999"
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleZap = () => {
    const {name, email, message} = formData;

    const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome:%20${name}%0D%A
    Email:%20${email}%0D%0A
    Mensagem:%20${message}%0D%0A`;

    window.open(urlZAPZAP, "_blank")
  }
  
  return(
    <>
      <Menu option01="Session01" option02="Session02" option03="Contact" option04="Calculos"/>
      <main>
        <section id='s1'>
          primeira
          <Btn text={"Session01"} func={"#s3"}/>
        </section>
        <section id='s2'>
          segunda <br />
            <Btn text={"Session02"} func={"#s2"}/>
        </section>
        <section id='s3'>
          terceira <br />
            <Btn text={"Contact"} func={"#s1"}/>
            <input placeholder='Insira seu nome' type="text" id='name' name='name' value={formData.name} onChange={handleChange} required/><br /><br />
          <input placeholder='Insira seu email' type="email" id='email' name='email' value={formData.email} onChange={handleChange} required/><br /><br />
          <textarea placeholder='Insira mensagem' id='message' name='message' value={formData.message} onChange={handleChange} cols="30" rows="10" required></textarea>
          <button onClick={handleZap}>Enviar mensagem</button>
          </section>
      </main>

    </>
  )
}

export default App


