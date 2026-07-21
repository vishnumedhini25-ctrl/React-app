import './App.css'
import Course from './Course'
import Footer from './Footer'
import Navbar from './Navbar'
import html from './assets/Html.png'
import css from './assets/css.png'
import js from './assets/javaScript-logo.png';


function App() {

  return (
    <>
    <Course name="HTML" price="199" image={html} show={true}/>
    <Course name="CSS" price="199" image={css} show={true}/>
    <Course name="JS" price="299" image={js}/>
    
    </>
      
  )
}

export default App
