//import Navbar from "components/Navbar.jsx"

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import {Box,Typography,useMediaQuery,Divider,LinearProgress,Button} from "@mui/material";


//import desk from 'assets/portfolio_desktopwtext.jpg'

//import mob from 'assets/mob.jpg'

import Sidebar from 'components/Sidebar.jsx'
import Mobview from 'components/Mobview.jsx'

/*import css from 'assets/css.png'
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
import more from 'assets/more.jpg'


import chiper from 'assets/chiper.png'
import game from 'assets/game.png' */

import { motion } from "framer-motion";


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
   const[moreQ, setmoreQ] = useState(false)

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

<img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984235/Porfolio/portfolio_desktopwtext_zn1cqe.jpg"
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
<img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984257/Porfolio/mangodb_n3dc7r.png"
onMouseEnter={() => {setmdbQ(true); setlinea("Experience on working with Mongodb Cloud manager and Atlas manager "); setlineb("Experience in integerating Mongodb with Node applications to update, insert, delete and retrieve data"); setlinec("Experience in developing managing and deploying Mongodb clusters"); setlined("worked on Mongodb concepts like schema design");} }
onMouseLeave={() => {setmdbQ(false);setlinea(""); setlineb(""); setlinec("here"); setlined("here");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984229/Porfolio/node_lucrkq.png"
onMouseEnter={() => {setnodeQ(true); setlinea("Experienced in Javascript coding on Node.js platform"); setlineb("Experience with JSON, JWT and bcrypt for authentication and security using Node.js"); setlinec("Have experience with using Node.js to interact with Mongodb "); setlined("proficient in building MERN stack apps");}}
onMouseLeave={() => {setnodeQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984230/Porfolio/react_euww5p.png"
onMouseEnter={() => {setreactQ(true); setlinea("Experienced in functional programming in React.js using Hooks "); setlineb("Familiar with 25+ react libraries and deep knownledge of major libraries"); setlinec("Experienced in react state management using Redux library and Context API"); setlined("Experienced in coding using React JSX");} }
onMouseLeave={() => {setreactQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984234/Porfolio/express_ehocms.png"
onMouseEnter={() => {setexpressQ(true); setlinea("Experienced in implementing REST API using Express js"); setlineb(" Worked with various Express js middleware modules"); setlinec("have experience integerating Express js with Nosql like Mongodb"); setlined("Experience in deveoping Express server with complex routes");} }
onMouseLeave={() => {setexpressQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984237/Porfolio/js_enmosg.png"
onMouseEnter={() => {setjsQ(true); setlinea("Have experience using vanilla Javascript to build web applications including games, ecommerce store and API based web apps"); setlineb("Experienced in coding for Node and React using Javascript"); setlinec("Familiar with Vanilla Javascript core concepts and it's implementation"); setlined("");} }
onMouseLeave={() => {setjsQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984231/Porfolio/redux_yg2k6h.png"
onMouseEnter={() => {setreduxQ(true); setlineb("Familiar with Redux toolkit and persist"); setlinea("Experience in developing state management workflows and implant them over the react Js responsive web application"); setlinec("familiar with redux Action,Reducer,Dispatch..etc"); setlined("Experience with Redux alternatives like Context API");} }
onMouseLeave={() => {setreduxQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>


</Box>

<Box display="flex" justifyContent="flex-start" marginTop="2%">

<Box display="flex"  width="15%" height="30%" sx={{marginTop:"1%",}}>
<img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984237/Porfolio/git_a28eip.png"
onMouseEnter={() => {setgitQ(true); setlinea("Used GIT tools to keep track of all works and all changes in source code and deployed the application "); setlineb("Experience in workflows and merging..etc"); setlinec("Experience in deploying website using github repositories"); setlined("");} }
onMouseLeave={() => {setgitQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
/>
</Box>


<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984234/Porfolio/css_vpzbsx.png"
onMouseEnter={() => {setcssQ(true); setlinea("Experience in using css along with html and Js for UI of web applications"); setlineb("Experience in using css frameworks like Material UI and Bootstrap"); setlinec(""); setlined("");} }
onMouseLeave={() => {setcssQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984233/Porfolio/bootstrap_bdcfdu.png"
onMouseEnter={() => {setbootstrapQ(true); setlinea("Experience in implementing single page app UI using Bootstrap"); setlineb("Experience with Bootstrap design templates and Javascript plugins"); setlinec("Experience in building mobile friendly UI using Bootstrap"); setlined("");} }
onMouseLeave={() => {setbootstrapQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984232/Porfolio/sql_alz3ja.png"
onMouseEnter={() => {setsqlQ(true); setlinea("Experience in integerating Mysql database with Node Js "); setlineb("Experience in extracting, transforming and loading data from Mysql database"); setlinec("Experience in CRUD operations"); setlined("");} }
onMouseLeave={() => {setsqlQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984231/Porfolio/mui_zacvif.png"
onMouseEnter={() => {setmuiQ(true); setlinea("Experience in implementing single page application using Material UI"); setlineb("Experience with mui themes, icons and components"); setlinec("Experience in using custom components in Mui to create unique designs"); setlined("Have experience building mobile friendly web apps using Mui");} }
onMouseLeave={() => {setmuiQ(false);setlinea(""); setlineb(""); setlinec(""); setlined("");} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="15%" height="30%" sx={{marginTop:"1%", marginLeft:"1.5%"}}>
<img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984241/Porfolio/more_wwhfhu.png"
onMouseEnter={() => {setmoreQ(true); } }
onMouseLeave={() => {setmoreQ(false);} }
width="95%"
height="95%"
 />
</Box>

</Box>

<Box display="flex" justifyContent="flex-start">

</Box>
 

</Box>

{/*tablet-side module   //w=295  h=220*/}

{/* alert("NOTE: Using free backend hosting, there will be 20s initial loading delay"); */}

<Box width="21.5%" height="26.8%" backgroundColor="rgb(255,255,255)" style={{position:"absolute", zIndex:"5",top:"16%", left:"0%",cursor:"pointer"}}>
  <img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984282/Porfolio/chiper_lgalfw.png"
  onMouseEnter={() => {setchiperQ(true); setline1(".........Own Project......... "); 
                        setline2("Electronic ecommerce website with all features including user login,orders,cart,mobile-view,Admin upload Page,Payment...etc"); }}
  onMouseLeave={() => {setchiperQ(false); setline1(" "); setline2(" ");}}
  onClick={() => {window.open("https://e-chiper-electronics.onrender.com", "_blank"); alert("NOTE: 'chiper electronics' demo website using free backend hosting, there may be 20s initial loading delay - Vishnu");}}
width="100%"
height="100%"

 />
  <img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984260/Porfolio/game_gx1g6k.png"
  onMouseEnter={() => {setgameQ(true); setline1(".........Own Project......... "); 
  setline2("2D multiplayer online game with chat room , player stats viewer, mobile view, login/register page, player database."); }}
onMouseLeave={() => {setgameQ(false); setline1(" "); setline2(" ");}}
onClick={() => {window.open("https://e-gamenchat-room.onrender.com", "_blank"); alert("NOTE: 'gamenchat' demo website using free backend hosting, there may be 20s initial loading delay - Vishnu");}}
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

<Box width="27.5%" height="16.8%"  style={{position:"absolute", zIndex:"6",top:"46.5%", left:"48.4%"}}>




  {chiperQ &&
  <img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984282/Porfolio/chiper_lgalfw.png"
  width="100%"
  height="200%"
   />
}

{gameQ &&
  <img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984260/Porfolio/game_gx1g6k.png"
width="100%"
height="200%"
 />
}

{mdbQ &&
 <>
 <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center" style={{transform: "rotate(-0.3deg)",}}>
<img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984257/Porfolio/mangodb_n3dc7r.png"
width="30%"
height="20%"
style={{marginLeft:"35%",transform: "rotate(0.3deg)",}}
/>

<Box display="grid">
  <Box display="flex">
  <ArrowRight style={{fontSize:"2vh"}} ></ArrowRight>
  <Typography style={{fontSize:"1.5vh"}}>
    {linea}
  </Typography>
  </Box>
  
  <Box display="flex">
  <ArrowRight style={{fontSize:"2vh"}} ></ArrowRight>
  <Typography style={{fontSize:"1.5vh"}}>
    {lineb}
  </Typography>
  </Box>

  <Box display="flex">
  <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
  <Typography style={{fontSize:"1.5vh"}}>
    {linec}
  </Typography>
  </Box>

  <Box display="flex">
  <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
  <Typography style={{fontSize:"1.5vh"}}>
    {lined}
  </Typography>
  </Box>
</Box>

</Box>
</>
}

{moreQ &&
  <>
  <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center" style={{transform: "rotate(-0.3deg)",}}>
  <img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984241/Porfolio/more_wwhfhu.png"
width="20%"
height="20%"
style={{marginLeft:"40%",transform: "rotate(0.3deg)",}}
/>
 
 <Box display="Grid"  >
   <Box display="flex">
   <ArrowRight  style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     Postman
   </Typography>
   </Box>
   
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}} ></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     Python,jsx,Typescript
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}} ></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
   Formik , Yup & socket.i.o
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}} ></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     Figma & photoshop
   </Typography>
   </Box>

   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}} ></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     JWT & bcrypt
   </Typography>
   </Box>

   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}} ></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     multer, stripe & cloudinary
   </Typography>
   </Box>

   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}} ></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     helmet & morgan
   </Typography>
   </Box>

   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}} ></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     React libraries including (router,framer-motion,..etc)
   </Typography>
   </Box>

 </Box>
 
 </Box>
 </>
}

{cssQ &&
  <>
  <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center" style={{transform: "rotate(-0.3deg)",}}>
 <img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984234/Porfolio/css_vpzbsx.png"
 width="30%"
 height="20%"
 style={{marginLeft:"35%",transform: "rotate(0.3deg)",}}
 />
 
 <Box display="grid">
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {linea}
   </Typography>
   </Box>
   
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {lineb}
   </Typography>
   </Box>
 
   <Box display="flex">
   
   <Typography style={{fontSize:"1.5vh"}}>
     {linec}
   </Typography>
   </Box>
 
   <Box display="flex">
   
   <Typography style={{fontSize:"1.5vh"}}>
     {lined}
   </Typography>
   </Box>
 </Box>
 
 </Box>
 </>
}

{jsQ &&
  <>
  <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center" style={{transform: "rotate(-0.3deg)",}}>
 <img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984237/Porfolio/js_enmosg.png"
 width="30%"
 height="20%"
 style={{marginLeft:"35%",transform: "rotate(0.3deg)",}}
 />
 
 <Box display="grid">
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {linea}
   </Typography>
   </Box>
   
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {lineb}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {linec}
   </Typography>
   </Box>
 
   <Box display="flex">
   
   <Typography style={{fontSize:"1.5vh"}}>
     {lined}
   </Typography>
   </Box>
 </Box>
 
 </Box>
 </>
}

{nodeQ &&
  <>
  <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center" style={{transform: "rotate(-0.3deg)",}}>
 <img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984229/Porfolio/node_lucrkq.png"
 width="30%"
 height="20%"
 style={{marginLeft:"35%",transform: "rotate(0.3deg)",}}
 />
 
 <Box display="grid">
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {linea}
   </Typography>
   </Box>
   
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {lineb}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {linec}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {lined}
   </Typography>
   </Box>
 </Box>
 
 </Box>
 </>
}

{expressQ &&
 <>
 <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center" style={{transform: "rotate(-0.3deg)",}}>
<img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984234/Porfolio/express_ehocms.png"
width="30%"
height="20%"
style={{marginLeft:"35%",transform: "rotate(0.3deg)",}}
/>

<Box display="grid">
  <Box display="flex">
  <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
  <Typography style={{fontSize:"1.5vh"}}>
    {linea}
  </Typography>
  </Box>
  
  <Box display="flex">
  <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
  <Typography style={{fontSize:"1.5vh"}}>
    {lineb}
  </Typography>
  </Box>

  <Box display="flex">
  <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
  <Typography style={{fontSize:"1.5vh"}}>
    {linec}
  </Typography>
  </Box>

  <Box display="flex">
  <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
  <Typography style={{fontSize:"1.5vh"}}>
    {lined}
  </Typography>
  </Box>
</Box>

</Box>
</>
}



{reactQ &&
  <>
  <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center" style={{transform: "rotate(-0.3deg)",}}>
 <img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984230/Porfolio/react_euww5p.png"
 width="30%"
 height="20%"
 style={{marginLeft:"35%",transform: "rotate(0.3deg)",}}
 />
 
 <Box display="grid">
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {linea}
   </Typography>
   </Box>
   
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {lineb}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {linec}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {lined}
   </Typography>
   </Box>
 </Box>
 
 </Box>
 </>
}

{reduxQ &&
 <>
 <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center" style={{transform: "rotate(-0.3deg)",}}>
<img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984231/Porfolio/redux_yg2k6h.png"
width="30%"
height="20%"
style={{marginLeft:"35%",transform: "rotate(0.3deg)",}}
/>

<Box display="grid">
  <Box display="flex">
  <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
  <Typography style={{fontSize:"1.5vh"}}>
    {linea}
  </Typography>
  </Box>
  
  <Box display="flex">
  <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
  <Typography style={{fontSize:"1.5vh"}}>
    {lineb}
  </Typography>
  </Box>

  <Box display="flex">
  <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
  <Typography style={{fontSize:"1.5vh"}}>
    {linec}
  </Typography>
  </Box>

  <Box display="flex">
  <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
  <Typography style={{fontSize:"1.5vh"}}>
    {lined}
  </Typography>
  </Box>
</Box>

</Box>
</>
}

{sqlQ &&
  <>
  <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center" style={{transform: "rotate(-0.3deg)",}}>
 <img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984232/Porfolio/sql_alz3ja.png"
 width="30%"
 height="20%"
 style={{marginLeft:"35%",transform: "rotate(0.3deg)",}}
 />
 
 <Box display="grid">
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {linea}
   </Typography>
   </Box>
   
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {lineb}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {linec}
   </Typography>
   </Box>
 
   <Box display="flex">
   
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
  <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center" style={{transform: "rotate(-0.3deg)",}}>
 <img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984237/Porfolio/git_a28eip.png"
 width="30%"
 height="20%"
 style={{marginLeft:"35%",transform: "rotate(0.3deg)",}}
 />
 
 <Box display="grid">
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {linea}
   </Typography>
   </Box>
   
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {lineb}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {linec}
   </Typography>
   </Box>
 
   <Box display="flex">
   
   <Typography style={{fontSize:"1.5vh"}}>
     {lined}
   </Typography>
   </Box>
 </Box>
 
 </Box>
 </>
}

{bootstrapQ &&
  <>
  <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center" style={{transform: "rotate(-0.3deg)",}}>
 <img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984233/Porfolio/bootstrap_bdcfdu.png"
 width="30%"
 height="20%"
 style={{marginLeft:"35%",transform: "rotate(0.3deg)",}}
 />
 
 <Box display="grid">
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {linea}
   </Typography>
   </Box>
   
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {lineb}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {linec}
   </Typography>
   </Box>
 
   <Box display="flex">
   
   <Typography style={{fontSize:"1.5vh"}}>
     {lined}
   </Typography>
   </Box>
 </Box>
 
 </Box>
 </>
}

{muiQ &&
  <>
  <Box width="100%" height="200%" backgroundColor="#cfcfcf" alignItems="center" style={{transform: "rotate(-0.3deg)",}}>
 <img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672984231/Porfolio/mui_zacvif.png"
 width="30%"
 height="20%"
 style={{marginLeft:"35%",transform: "rotate(0.3deg)",}}
 />
 
 <Box display="grid">
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {linea}
   </Typography>
   </Box>
   
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {lineb}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
     {linec}
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight style={{fontSize:"2vh"}}></ArrowRight>
   <Typography style={{fontSize:"1.5vh"}}>
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