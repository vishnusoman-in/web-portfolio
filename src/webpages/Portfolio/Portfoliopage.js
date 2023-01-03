//import Navbar from "components/Navbar.jsx"

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import {Box,Typography,useMediaQuery,Divider,LinearProgress,Button} from "@mui/material";


import desk from 'assets/portfolio_desktop-clean.jpg'

import mob from 'assets/mob.jpg'

import Sidebar from 'components/Sidebar.jsx'
import Mobview from 'components/Mobview.jsx'

import css from 'assets/css.png'
import html from 'assets/html.png'
import js from 'assets/js.png'
import node from 'assets/node.png'
import mangodb from 'assets/mangodb.png'
import react from 'assets/react.png'
import redux from 'assets/redux.png'
import sql from 'assets/sql.png'
import mui from 'assets/mui.png'
import express from 'assets/express.png'
import git from 'assets/git.png'
import bootstrap from 'assets/bootstrap.png'


import chiper from 'assets/chiper.png'
import game from 'assets/game.png'
import { motion } from "framer-motion";

import {Circle} from '@mui/icons-material';

import {ArrowRight} from '@mui/icons-material';

const Portfoliopage = () => { 

   const isDesktop = useMediaQuery("(min-width: 1000px)");
   const navigate = useNavigate();
   const isFirefox = typeof InstallTrigger !== 'undefined';
   //const isIE = false || !!document.documentMode;
   //const isEdge = !isIE && !!window.StyleMedia;
   // onClick={() => {navigate("/");}}

   //const line1 =" Hello there!"
   //const line2 =" Vishnu Soman here"

   const sentence = {
    hidden:{opacity: 1,},
    visible:{opacity:1, transition:{delay:1, staggerChildren:0.01,},},
   }

   const letter = {
    hidden: {opacity: 0, y:50},
    visible: {opacity: 1, y: 0,},
   }

   const[time, settime] = useState('9:42:11')

   const[line1, setline1] = useState(" ")
   const[line2, setline2] = useState(" ")
   const[linea, setlinea] = useState(" ")
   const[lineb, setlineb] = useState(" ")
   const[linec, setlinec] = useState(" ")
   const[lined, setlined] = useState(" ")

   const[mdbQ, setmdbQ] = useState(false)
   const[cssQ, setcssQ] = useState(false)
   const[htmlQ, sethtmlQ] = useState(false)
   const[jsQ, setjsQ] = useState(false)
   const[nodeQ, setnodeQ] = useState(false)
   const[reactQ, setreactQ] = useState(false)
   const[reduxQ, setreduxQ] = useState(false)
   const[sqlQ, setsqlQ] = useState(false)
   const[muiQ, setmuiQ] = useState(false)
   const[expressQ, setexpressQ] = useState(false)
   const[gitQ, setgitQ] = useState(false)
   const[bootstrapQ, setbootstrapQ] = useState(false)
   const[chiperQ, setchiperQ] = useState(false)
   const[gameQ, setgameQ] = useState(false)

   setInterval(() => {
    const d = new Date();
    const t = d.toLocaleTimeString();
    const result = t.slice(0, 8);
    settime(result);
    
   }, 1000);


    
    return (
<>
      {(isDesktop) && 
       
<Box width="100vw" height="100vh" display="flex" justifyContent="flex-start">



<Box width="auto" height="auto" style={{position:"relative", zIndex:"2",}}>

<img src={desk}
width="99.5%" // auto
height="99.5%" // 788px
/>

{/*watch Time module*/}
<Box width="3%" height="3%" style={{position:"absolute", zIndex:"3",top:"30.5%", left:"27.1%"}}>
 
 <Typography fontSize="1.5vh" color="greenyellow" >{time}</Typography>
 
</Box>


{/*smartphone module w=220 h=120 */}
<Box id={isFirefox  ? "ff" : "sp"} width="18%" height="14%" backgroundColor="rgb(255,255,255,0)" overflow={isFirefox  ? "hidden" : "scroll"} overflowX="hidden" style={{position:"absolute", zIndex:"4",top:"7%", left:"53%",cursor:"pointer"}}>

<Box display="flex" justifyContent="flex-start"  marginTop="5%">

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%"}}>
<img src={mangodb}
onMouseEnter={() => {setmdbQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setmdbQ(false);setlinea(""); setlineb(""); setlinec("here"); setlined("here");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src={node}
onMouseEnter={() => {setnodeQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setnodeQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src={react}
onMouseEnter={() => {setreactQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setreactQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src={express}
onMouseEnter={() => {setexpressQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setexpressQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src={js}
onMouseEnter={() => {setjsQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setjsQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src={redux}
onMouseEnter={() => {setreduxQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setreduxQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>


</Box>

<Box display="flex" justifyContent="flex-start" marginTop="2%">

<Box display="flex"  width="15%" height="30%" sx={{marginTop:"1%",}}>
<img src={git}
onMouseEnter={() => {setgitQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setgitQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
/>
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src={html}
onMouseEnter={() => {sethtmlQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {sethtmlQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src={css}
onMouseEnter={() => {setcssQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setcssQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src={bootstrap}
onMouseEnter={() => {setbootstrapQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setbootstrapQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src={sql}
onMouseEnter={() => {setsqlQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setsqlQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src={mui}
onMouseEnter={() => {setmuiQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setmuiQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

</Box>

<Box display="flex" justifyContent="flex-start">

</Box>
 

</Box>

{/*tablet-side module   //w=295  h=220*/}
<Box width="21.5%" height="26.8%" backgroundColor="rgb(255,255,255)" style={{position:"absolute", zIndex:"5",top:"16%", left:"0%",cursor:"pointer"}}>
  <img src={chiper}
  onMouseEnter={() => {setchiperQ(true); setline1(".........Own Project......... "); 
                        setline2("Electronic ecommerce website with all features including user login,orders,cart,mobile-view,Admin upload Page,Payment...etc"); }}
  onMouseLeave={() => {setchiperQ(false); setline1(" "); setline2(" ");}}
width="100%"
height="100%"

 />
  <img src={game}
  onMouseEnter={() => {setgameQ(true); setline1(".........Own Project......... "); 
  setline2("2D multiplayer online game with chat room , player stats viewer, mobile view, login/register page, player database."); }}
onMouseLeave={() => {setgameQ(false); setline1(" "); setline2(" ");}}
width="100%"
height="100%"
 />
</Box>

{/*description module 21.5 13 */}

<Box width="33.5%" height="13%"  style={{position:"absolute", zIndex:"7",top:"25%", left:"46%",}}>
<Box display="grid">
  <motion.Typography 
  style={{fontSize:"2vh"}}
  variants={sentence}
  initial="hidden"
  animate={chiperQ || gameQ ? "visible" :"" }
   >

  {line1.split("").map((char, index) => {
    return(
      <motion.span key={char+"-"+index} variants={letter} >
        {char}
      </motion.span>
    )
  })}

  </motion.Typography>

  <motion.Typography 
  
  variants={sentence}
  initial="hidden"
  animate={chiperQ || gameQ ? "visible" :""}
  style={{fontSize:"2vh"}}
  >

  {line2.split("").map((char, index) => {
    return(
      <motion.span key={char+"-"+index} variants={letter} >
        {char}
      </motion.span>
    )
  })}

  </motion.Typography>

  </Box>

</Box>

{/* main tab displaying results */}

<Box width="27.5%" height="16.8%" backgroundColor="rgb(255,255,255)" style={{position:"absolute", zIndex:"6",top:"46.5%", left:"48.4%"}}>

  {!gameQ && !chiperQ && !mdbQ && !htmlQ && !cssQ && !jsQ && !nodeQ && !expressQ && !reactQ && !reduxQ && !sqlQ && !gitQ && !bootstrapQ && !muiQ &&
  <>
  <Box src={chiper}
  width="100%"
  height="100%"
  backgroundColor="white"
   >
  <Typography fontSize="1vh" textAlign="center"> Vishnu Soman</Typography>
   </Box>

  <Box src={chiper}
  width="100%"
  height="100%"
   >
<Typography fontSize="1vh" textAlign="center">Full Stack Developer</Typography>
  </Box>

  </>
   }


  {chiperQ &&
  <img src={chiper}
  width="100%"
  height="200%"
   />
}

{gameQ &&
  <img src={game}
width="100%"
height="200%"
 />
}

{mdbQ &&
 <>
 <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center">
<img src={mangodb}
width="50%"
height="50%"
style={{marginLeft:"5.5rem",}}
/>

<Box display="grid">
  <Box display="flex">
  <ArrowRight></ArrowRight>
  <Typography style={{fontSize:"2vh"}}>
    {linea}
  </Typography>
  </Box>
  
  <Box display="flex">
  <ArrowRight></ArrowRight>
  <Typography style={{fontSize:"2vh"}}>
    {lineb}
  </Typography>
  </Box>

  <Box display="flex">
  <ArrowRight></ArrowRight>
  <Typography style={{fontSize:"2vh"}}>
    {linec}
  </Typography>
  </Box>

  <Box display="flex">
  <ArrowRight></ArrowRight>
  <Typography style={{fontSize:"2vh"}}>
    {lined}
  </Typography>
  </Box>
</Box>

</Box>
</>
}

{htmlQ &&
  <>
  <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center">
 <img src={html}
 width="50%"
 height="50%"
 style={{marginLeft:"5.5rem",}}
 />
 
 <Box display="grid">
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {linea}
   </Typography>
   </Box>
   
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {lineb}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {linec}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {lined}
   </Typography>
   </Box>
 </Box>
 
 </Box>
 </>
}

{cssQ &&
  <>
  <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center">
 <img src={css}
 width="50%"
 height="50%"
 style={{marginLeft:"5.5rem",}}
 />
 
 <Box display="grid">
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {linea}
   </Typography>
   </Box>
   
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {lineb}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {linec}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {lined}
   </Typography>
   </Box>
 </Box>
 
 </Box>
 </>
}

{jsQ &&
  <>
  <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center">
 <img src={js}
 width="50%"
 height="50%"
 style={{marginLeft:"5.5rem",}}
 />
 
 <Box display="grid">
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {linea}
   </Typography>
   </Box>
   
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {lineb}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {linec}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {lined}
   </Typography>
   </Box>
 </Box>
 
 </Box>
 </>
}

{nodeQ &&
  <>
  <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center">
 <img src={node}
 width="50%"
 height="50%"
 style={{marginLeft:"5.5rem",}}
 />
 
 <Box display="grid">
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {linea}
   </Typography>
   </Box>
   
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {lineb}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {linec}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {lined}
   </Typography>
   </Box>
 </Box>
 
 </Box>
 </>
}

{expressQ &&
 <>
 <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center">
<img src={express}
width="50%"
height="50%"
style={{marginLeft:"5.5rem",}}
/>

<Box display="grid">
  <Box display="flex">
  <ArrowRight></ArrowRight>
  <Typography style={{fontSize:"2vh"}}>
    {linea}
  </Typography>
  </Box>
  
  <Box display="flex">
  <ArrowRight></ArrowRight>
  <Typography style={{fontSize:"2vh"}}>
    {lineb}
  </Typography>
  </Box>

  <Box display="flex">
  <ArrowRight></ArrowRight>
  <Typography style={{fontSize:"2vh"}}>
    {linec}
  </Typography>
  </Box>

  <Box display="flex">
  <ArrowRight></ArrowRight>
  <Typography style={{fontSize:"2vh"}}>
    {lined}
  </Typography>
  </Box>
</Box>

</Box>
</>
}



{reactQ &&
  <>
  <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center">
 <img src={react}
 width="50%"
 height="50%"
 style={{marginLeft:"5.5rem",}}
 />
 
 <Box display="grid">
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {linea}
   </Typography>
   </Box>
   
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {lineb}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {linec}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {lined}
   </Typography>
   </Box>
 </Box>
 
 </Box>
 </>
}

{reduxQ &&
 <>
 <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center">
<img src={redux}
width="50%"
height="50%"
style={{marginLeft:"5.5rem",}}
/>

<Box display="grid">
  <Box display="flex">
  <ArrowRight></ArrowRight>
  <Typography style={{fontSize:"2vh"}}>
    {linea}
  </Typography>
  </Box>
  
  <Box display="flex">
  <ArrowRight></ArrowRight>
  <Typography style={{fontSize:"2vh"}}>
    {lineb}
  </Typography>
  </Box>

  <Box display="flex">
  <ArrowRight></ArrowRight>
  <Typography style={{fontSize:"2vh"}}>
    {linec}
  </Typography>
  </Box>

  <Box display="flex">
  <ArrowRight></ArrowRight>
  <Typography style={{fontSize:"2vh"}}>
    {lined}
  </Typography>
  </Box>
</Box>

</Box>
</>
}

{sqlQ &&
  <>
  <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center">
 <img src={sql}
 width="50%"
 height="50%"
 style={{marginLeft:"5.5rem",}}
 />
 
 <Box display="grid">
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {linea}
   </Typography>
   </Box>
   
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {lineb}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {linec}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {lined}
   </Typography>
   </Box>
 </Box>
 
 </Box>
 </>
}

{gitQ &&
  <>
  <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center">
 <img src={git}
 width="50%"
 height="50%"
 style={{marginLeft:"5.5rem",}}
 />
 
 <Box display="grid">
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {linea}
   </Typography>
   </Box>
   
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {lineb}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {linec}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {lined}
   </Typography>
   </Box>
 </Box>
 
 </Box>
 </>
}

{bootstrapQ &&
  <>
  <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center">
 <img src={bootstrap}
 width="50%"
 height="50%"
 style={{marginLeft:"5.5rem",}}
 />
 
 <Box display="grid">
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {linea}
   </Typography>
   </Box>
   
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {lineb}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {linec}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {lined}
   </Typography>
   </Box>
 </Box>
 
 </Box>
 </>
}

{muiQ &&
  <>
  <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center">
 <img src={mui}
 width="50%"
 height="50%"
 style={{marginLeft:"5.5rem",}}
 />
 
 <Box display="grid">
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {linea}
   </Typography>
   </Box>
   
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {lineb}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {linec}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     {lined}
   </Typography>
   </Box>
 </Box>
 
 </Box>
 </>
}


</Box>

</Box>

<Sidebar heigh="98%" />

</Box>

  }

{!isDesktop && 

  <Mobview/>

}

</>

)

};

export default Portfoliopage;