 import Nav from './Nav'
 import '../CSS/Home.css'
 import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';

export default function Home () {

    return   <div className="bg-image">
   
        <Nav/>
         
          <div className="bg-text">
          <strong><h1>Welcome To BOX OFFICE</h1></strong>
           
                   <h3>-NEW ERA OF CINEMA-</h3>
        </div>
    </div>

}