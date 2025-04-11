import './App.module.css'
import { Menu } from './components/menu'

function App() {
  return(
    <>
      <Menu s1="SESSÃO 1" s2="SESSÃO 2" s3="SESSÃO 3"/>
      <main>
        <section id='s1'>
         <h2>SESSÃO 1</h2>
        </section>
        <section id='s2'>
          <h2>SESSÃO 2</h2>
        </section>
        <section id='s3'>
          <h2>SESSÃO 3</h2>
          </section>
      </main>
    </>
  )
}

export default App
