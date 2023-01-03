import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import {Box,Typography,useMediaQuery,Divider,LinearProgress,Button} from "@mui/material";

//import {Menu} from '@mui/icons-material';

//import desk from 'assets/portfolio_desktop.jpg'
import mypic from "assets/mypic.png"
//import zIndex from "@mui/material/styles/zIndex";

import {KeyboardDoubleArrowDown} from '@mui/icons-material';

import mob from 'assets/mob.jpg'
//import bg from 'assets/peakpx.jpg'
import Sidebar from 'components/Sidebar.jsx'

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




const Mobview = () => { 

   const isDesktop = useMediaQuery("(min-width: 1000px)");
   const navigate = useNavigate();

   const[bar, setbar] = useState(false)

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

   return(

    

    <Box  display="flex" justifyContent="center" width="auto" height="100vh" backgroundColor="#cfcfcf"  style={{position:"relative", zIndex:"300",}}>

  
{/*
backgroundImage: `url(${mob})`, backgroundSize: "99.5%",
   */}
<Box onClick={() => {setbar(bar ? false:true)}} width="100vw" height="5vh"  backgroundColor="#afcfcf" sx={{border:1, borderColor:"black", boxShadow:5,borderBottomRightRadius:"1rem", borderBottomLeftRadius:"1rem"}} style={{position:"absolute", zIndex:"301",}}>

<Box marginLeft="48vw" >
<KeyboardDoubleArrowDown  />
</Box>
</Box>




{/* chain of left apps */}
<Box display="Grid"   marginTop="5%" style={{position:"absolute", zIndex:"303",top:"5%", left:"1%",}}>

<Box display="flex" justifyContent="center" width="15%" height="50%" sx={{marginTop:"1%", marginLeft:"1%"}}>
<img src={node}
onMouseEnter={() => {setnodeQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setnodeQ(false);setlinea(""); setlineb(""); setlinec("here"); setlined("here");} }
width="95%"
height="95%"
 />
</Box>



<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"15%", marginLeft:"1%"}}>
<img src={react}
onMouseEnter={() => {setreactQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setreactQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>



<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"15%", marginLeft:"1%"}}>
<img src={express}
onMouseEnter={() => {setexpressQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setexpressQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"15%", marginLeft:"1%"}}>
<img src={mangodb}
onMouseEnter={() => {setmdbQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setmdbQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"15%", marginLeft:"1%"}}>
<img src={redux}
onMouseEnter={() => {setreduxQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setreduxQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="8%" height="27%" sx={{marginTop:"15%", marginLeft:"4%"}}>
<img src={js}
onMouseEnter={() => {setjsQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setjsQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

</Box>

{/*right side apps*/}

<Box display="Grid" marginTop="4%" style={{position:"absolute", zIndex:"305",top:"5%", left:"90vw",}}>

<Box display="flex" justifyContent="center" width="6vw" height="4vh"  sx={{marginTop:"1vh",}} >
<img src={git}
onMouseEnter={() => {setgitQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setgitQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
/>
</Box>

<Box display="flex" justifyContent="center" width="5vw" height="5vh" sx={{marginTop:"10vh"}}>
<img src={html}
onMouseEnter={() => {sethtmlQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {sethtmlQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="5vw" height="5vh" sx={{marginTop:"9vh"}}>
<img src={css}
onMouseEnter={() => {setcssQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setcssQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="5vw" height="5vh" sx={{marginTop:"9vh"}}>
<img src={bootstrap}
onMouseEnter={() => {setbootstrapQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setbootstrapQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="5vw" height="5vh" sx={{marginTop:"9vh"}}>
<img src={sql}
onMouseEnter={() => {setsqlQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setsqlQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="5vw" height="5vh" sx={{marginTop:"9.5vh"}}>
<img src={mui}
onMouseEnter={() => {setmuiQ(true); setlinea("here "); setlineb("here"); setlinec("here"); setlined("here");} }
onMouseLeave={() => {setmuiQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

</Box>

{bar && 
<Box width="auto" height="50%" style={{position:"absolute", zIndex:"410",top:"5%", left:"22%",}}>
<Sidebar heigh="60vh" />
</Box>
}

<Box sx={{boxShadow:15,}} width="50vh" height="100vh" style={{position:"relative", zIndex:"200",}} >
<img src={mob}
width="100%" 
height="100%"
/>


{/* own project box */}

<Box display="Grid" sx={{border:1, borderRadius:"0.5rem"}} style={{position:"absolute", zIndex:"202",top:"8%", left:"27%",}} backgroundColor="#dfcfcf">
<Typography textAlign="center" color="white">Own Projects</Typography>
<Box display="flex">
<Typography marginRight="2rem" color="white">Ecommerce</Typography>
<Typography color="white">Gaming</Typography>
</Box>
</Box>

{/* tablet show */}

<Box display="Grid" width="58%" height="59%"  style={{position:"absolute", zIndex:"203",top:"23%", left:"24%",transform: "rotate(0deg)"}}>
</Box>

</Box>

</Box>





   )};

   export default Mobview;