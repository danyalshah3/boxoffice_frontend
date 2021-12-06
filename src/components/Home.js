 import Nav from './Nav'
 import '../CSS/Home.css'
 import background from './Images/78856742.png'
export default function Home () {

    return <div className="bg-image" >
   <Nav/>

    <div className="bg-text" style={{backgroundImage: `url(${background}`, height: '76%', width: '110%',  border: '1px solid black'}}>
     </div>
    </div>

}