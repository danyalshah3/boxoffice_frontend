import Auth from './Auth'
import * as React from 'react';
import background from './Images/welcome.png'
import '../CSS/welcome.css';

 function welcome()  {

    return <div className="welcome" style={{backgroundImage: `url(${background}`, width: '110%',  border: '20px solid white'}}>
       <div >
        <h1>BOX OFFICE</h1>
        </div>
     <Auth/>
     </div>
  
}

export default (welcome);