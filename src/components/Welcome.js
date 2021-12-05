import Auth from './Auth'
import * as React from 'react';
import background from './Images/welcome.png'
import '../CSS/welcome.css';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import IconButton from '@mui/material/IconButton';
// import StarBorderIcon from '@mui/icons-material/StarBorder';

 function welcome()  {

    return <div className="welcome" style={{backgroundImage: `url(${background}`, width: '110%',  border: '20px solid white'}}>
       <div >
        <heading><h1>BOX OFFICE</h1></heading>
        </div>
     <Auth/>
     </div>


  
}

export default (welcome);