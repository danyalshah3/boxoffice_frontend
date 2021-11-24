import Auth from './Auth'
import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import IconButton from '@mui/material/IconButton';
// import StarBorderIcon from '@mui/icons-material/StarBorder';

 function welcome()  {

   
    return <div className="welcome">   
          <strong><h1>BOX OFFICE</h1></strong>
          <br></br>

         <h3 >'Hub of Entertainment'</h3>
  <br></br>

     <Auth/>
     </div>


  
}

export default (welcome);