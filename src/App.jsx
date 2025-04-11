import './App.module.css'
import { Btn } from './components/btn'
import { Menu } from './components/menu'

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
       <p>GANHEI UM PLAYSTATION 2</p>
 <footer>
   <adress>
     <p>kkkkk</p>
   </adress>
   <p>Copyright sr barriga</p>
 </footer>
    </>
  )
}

export default App
