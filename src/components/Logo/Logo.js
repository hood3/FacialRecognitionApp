import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import facial_recognition_pic from './facial_recognition_pic.jpg';


const Logo = () => {
    return(
       <div className='ma4 mt0'>    
           <Tilt className="Tilt br2 shadow-2" options={{max:25}} style={{height:250,width:250}}>
               <div className="Tilt-inner pa3"><img src={facial_recognition_pic} alt="logo" style={{paddingTop:'5px'}}/></div>
            </Tilt>
        </div>
    );
}

export default Logo;