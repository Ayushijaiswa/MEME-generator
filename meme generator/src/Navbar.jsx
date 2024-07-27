import './navbar.css'
import troll from './assets/Troll Face.png'
export default function Navbar(){
    return (
        <>
        <nav className="navbar-component">
       
        <div className='div-h1'>
              <img src={troll}/>
              <h1>Meme Generator</h1>
        </div>
            
            
                <h3>
                    React course-project 3
                </h3>
            

        </nav>
        </>
    )
}