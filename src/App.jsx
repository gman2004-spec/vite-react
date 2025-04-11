import './App.module.css'
import { Btn } from './components/btn.jsx'
import { Menu } from './components/menu.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  return(
    <>
      <Menu s1="Session01" s2="Session02" s3="Contact"/>
      <main>
        <section id='s1'>
          primeira
          <Btn text='Session01' func="#s2"/>
        </section>
        <section id='s2'>
          segunda <br />
            <Btn text='Session02' func="#s3"/>
        </section>
        <section id='s3'>
          terceira <br />
            <Btn text='Contact' func='#s1'/>
          </section>
      </main>

    </>
  )
}

export default App

