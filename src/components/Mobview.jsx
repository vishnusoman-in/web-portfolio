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
import more from 'assets/more2.jpg'
import project from 'assets/project.png'

import {ArrowRight} from '@mui/icons-material';

import chiper from 'assets/chiper.png'
import game from 'assets/game.png'

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
   const[moreQ, setmoreQ] = useState(false)
   const[projectQ, setprojectQ] = useState(false)

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
<Box display="Grid"   marginTop="5%" style={{position:"absolute", zIndex:"303",top:"5%", left:"3%",}}>

<Box display="flex" justifyContent="center" width="7vw" height="7vh" sx={{marginTop:"1vh", marginLeft:"1%"}}>
<img src={node}
onClick={() => {setnodeQ(nodeQ ? false:true); setlinea("Experienced in Javascript coding on Node.js platform"); setlineb("Experience with JSON, JWT and bcrypt for authentication and security using Node.js"); setlinec("Have experience with using Node.js to interact with Mongodb "); setlined("proficient in building MERN stack apps");
setmdbQ(false); setcssQ(false); sethtmlQ(false); setjsQ(false); setreactQ(false); setreduxQ(false); setsqlQ(false); setmuiQ(false);
setexpressQ(false); setgitQ(false); setbootstrapQ(false); setprojectQ(false); setmoreQ(false);
} }
width="95%"
height="95%"
 />
</Box>



<Box display="flex" justifyContent="center"  width="7vw" height="7vh" sx={{marginTop:"9vh", marginLeft:"1%"}}>
<img src={react}
onClick={() => {setreactQ(reactQ ? false:true); setlinea("Experienced in functional programming in React.js using Hooks "); setlineb("Familiar with 25+ react libraries and deep knownledge of major libraries"); setlinec("Experienced in react state management using Redux library and Context API"); setlined("Experienced in coding using React JSX");
setmdbQ(false); setcssQ(false); sethtmlQ(false); setjsQ(false); setnodeQ(false); setreduxQ(false); setsqlQ(false); setmuiQ(false);
setexpressQ(false); setgitQ(false); setbootstrapQ(false); setprojectQ(false); setmoreQ(false);
} }
width="95%"
height="95%"
 />
</Box>



<Box display="flex" justifyContent="center"  width="7vw" height="7vh" sx={{marginTop:"9vh", marginLeft:"1%"}}>
<img src={express}
onClick={() => {setexpressQ(expressQ ? false:true); setlinea("Experienced in implementing REST API using Express js"); setlineb(" Worked with various Express js middleware modules"); setlinec("have experience integerating Express js with Nosql like Mongodb"); setlined("Experience in deveoping Express server with complex routes");
setmdbQ(false); setcssQ(false); sethtmlQ(false); setjsQ(false); setreactQ(false); setreduxQ(false); setsqlQ(false); setmuiQ(false);
setnodeQ(false); setgitQ(false); setbootstrapQ(false); setprojectQ(false); setmoreQ(false);
} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center"  width="7vw" height="7vh" sx={{marginTop:"9vh", marginLeft:"1%"}}>
<img src={mangodb}
onClick={() => {setmdbQ(mdbQ ? false:true); setlinea("Experience on working with Mongodb Cloud manager and Atlas manager "); setlineb("Experience in integerating Mongodb with Node applications to update, insert, delete and retrieve data"); setlinec("Experience in developing managing and deploying Mongodb clusters"); setlined("");
            setnodeQ(false); setcssQ(false); sethtmlQ(false); setjsQ(false); setreactQ(false); setreduxQ(false); setsqlQ(false); setmuiQ(false);
            setexpressQ(false); setgitQ(false); setbootstrapQ(false); setprojectQ(false); setmoreQ(false);
} }

width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center"  width="7vw" height="7vh" sx={{marginTop:"9vh", marginLeft:"1%"}}>
<img src={redux}
onClick={() => {setreduxQ(reduxQ ? false:true); setlineb("Familiar with Redux toolkit and persist"); setlinea("Experience in developing state management workflows and implant them over the react Js responsive web application"); setlinec("familiar with redux Action,Reducer,Dispatch..etc"); setlined("Experience with Redux alternatives like Context API");
setnodeQ(false); setcssQ(false); sethtmlQ(false); setjsQ(false); setreactQ(false); setmdbQ(false); setsqlQ(false); setmuiQ(false);
setexpressQ(false); setgitQ(false); setbootstrapQ(false); setprojectQ(false); setmoreQ(false);
} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center"  width="7vw" height="7vh" sx={{marginTop:"9vh", marginLeft:"4%"}}>
<img src={js}
onClick={() => {setjsQ(jsQ ? false:true); setlinea("Have experience using vanilla Javascript to build web applications including games, ecommerce store and API based web apps"); setlineb("Experienced in coding for Node and React using Javascript"); setlinec("Familiar with Vanilla Javascript core concepts and it's implementation"); setlined("");
setnodeQ(false); setcssQ(false); sethtmlQ(false); setreduxQ(false); setreactQ(false); setmdbQ(false); setsqlQ(false); setmuiQ(false);
setexpressQ(false); setgitQ(false); setbootstrapQ(false); setprojectQ(false); setmoreQ(false);
} }
width="95%"
height="95%"
 />
</Box>

</Box>

{/*right side apps*/}

<Box display="Grid" marginTop="4%" style={{position:"absolute", zIndex:"305",top:"5%", left:"90vw",}}>

<Box display="flex" justifyContent="center" width="7vw" height="7vh"  sx={{marginTop:"1vh",}} >
<img src={git}
onClick={() => {setgitQ(gitQ ? false:true); setlinea("Used GIT tools to keep track of all works and all changes in source code and deployed the application "); setlineb("Experience in workflows and merging..etc"); setlinec("Experience in deploying website using github repositories"); setlined("");
setnodeQ(false); setcssQ(false); sethtmlQ(false); setjsQ(false); setreactQ(false); setmdbQ(false); setsqlQ(false); setmuiQ(false);
setexpressQ(false); setreduxQ(false); setbootstrapQ(false); setprojectQ(false); setmoreQ(false);
} }
width="95%"
height="95%"
/>
</Box>

<Box display="flex" justifyContent="center" width="7vw" height="7vh" sx={{marginTop:"10vh"}}>
<img src={html}
onClick={() => {sethtmlQ(htmlQ ? false:true); setlinea("Experienced in using HTML for building websites along with css and Javascript "); setlineb("Familiar with all HTML tags, attribute and features "); setlinec(""); setlined("");
setnodeQ(false); setcssQ(false); setreduxQ(false); setjsQ(false); setreactQ(false); setmdbQ(false); setsqlQ(false); setmuiQ(false);
setexpressQ(false); setgitQ(false); setbootstrapQ(false); setprojectQ(false); setmoreQ(false);
} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="7vw" height="7vh" sx={{marginTop:"9vh"}}>
<img src={css}
onClick={() => {setcssQ(cssQ ? false:true); setlinea("Experience in using css along with html and Js for UI of web applications"); setlineb("Experience in using css frameworks like Material UI and Bootstrap"); setlinec(""); setlined("");
setnodeQ(false); setreduxQ(false); sethtmlQ(false); setjsQ(false); setreactQ(false); setmdbQ(false); setsqlQ(false); setmuiQ(false);
setexpressQ(false); setgitQ(false); setbootstrapQ(false); setprojectQ(false); setmoreQ(false);
} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="7vw" height="7vh" sx={{marginTop:"9vh"}}>
<img src={bootstrap}
onClick={() => {setbootstrapQ(bootstrapQ ? false:true); setlinea("Experience in implementing single page app UI using Bootstrap"); setlineb("Experience with Bootstrap design templates and Javascript plugins"); setlinec("Experience in building mobile friendly UI using Bootstrap"); setlined("");
setnodeQ(false); setcssQ(false); sethtmlQ(false); setjsQ(false); setreactQ(false); setmdbQ(false); setsqlQ(false); setmuiQ(false);
setexpressQ(false); setgitQ(false); setreduxQ(false); setprojectQ(false); setmoreQ(false);
} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="7vw" height="7vh" sx={{marginTop:"9vh"}}>
<img src={sql}
onClick={() => {setsqlQ(sqlQ ? false:true); setlinea("Experience in integerating Mysql database with Node Js "); setlineb("Experience in extracting, transforming and loading data from Mysql database"); setlinec("Experience in CRUD operations"); setlined("");
setnodeQ(false); setcssQ(false); sethtmlQ(false); setjsQ(false); setreactQ(false); setmdbQ(false); setreduxQ(false); setmuiQ(false);
setexpressQ(false); setgitQ(false); setbootstrapQ(false); setprojectQ(false); setmoreQ(false);
} }
width="95%"
height="95%"
 />
</Box>

<Box display="flex" justifyContent="center" width="7vw" height="7vh" sx={{marginTop:"9.5vh"}}>
<img src={mui}
onClick={() => {setmuiQ(muiQ ? false:true); setlinea("Experience in implementing single page application using Material UI"); setlineb("Experience with mui themes, icons and components"); setlinec("Experience in using custom components in Mui to create unique designs"); setlined("Have experience building mobile friendly web apps using Mui");
setnodeQ(false); setcssQ(false); sethtmlQ(false); setjsQ(false); setreactQ(false); setmdbQ(false); setsqlQ(false); setreduxQ(false);
setexpressQ(false); setgitQ(false); setbootstrapQ(false); setprojectQ(false); setmoreQ(false);
} }
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


{/* own project and more icons */}

<Box display="flex" justifyContent="center" sx={{border:1, borderRadius:"0.5rem"}} style={{position:"absolute", zIndex:"202",top:"8%", }} >

<img src={project}
width="12%" 
height="12%"
onClick={() => {setprojectQ(projectQ ? false:true); 
setmdbQ(false); setcssQ(false); sethtmlQ(false); setjsQ(false); setreactQ(false); setreduxQ(false); setsqlQ(false); setmuiQ(false);
setexpressQ(false); setgitQ(false); setbootstrapQ(false); setmoreQ(false); setnodeQ(false);
} }
style={{marginRight:"4rem"}}
/>

<img src={more}
onClick={() => {setmoreQ(moreQ ? false:true); 
setmdbQ(false); setcssQ(false); sethtmlQ(false); setjsQ(false); setreactQ(false); setreduxQ(false); setsqlQ(false); setmuiQ(false);
setexpressQ(false); setgitQ(false); setbootstrapQ(false); setprojectQ(false); setnodeQ(false);
} }
width="12%" 
height="12%"

/>

</Box>

{/* tablet show */}

<Box display="Grid" width="58%" height="59%"  style={{position:"absolute", zIndex:"203",top:"23%", left:"24%",transform: "rotate(0deg)"}}>
</Box>

{moreQ &&
  <>
  <Box width="50%" height="50%" backgroundColor="#cfcfcf" alignItems="center" style={{position:"absolute", zIndex:"203",top:"23%", left:"24%",transform: "rotate(-0.3deg)"}}>
  <img src={more}
width="50%"
height="23%"
style={{ marginLeft:"35%",transform: "rotate(0.3deg)",}}
/>
 
 <Box display="Grid"  >
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     Postman
   </Typography>
   </Box>
   
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     Mysql
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     Formik & Yup
   </Typography>
   </Box>
 
   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     Figma & photoshop
   </Typography>
   </Box>

   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     JWT & bcrypt
   </Typography>
   </Box>

   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     multer, stripe & cloudinary
   </Typography>
   </Box>

   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     helmet & morgan
   </Typography>
   </Box>

   <Box display="flex">
   <ArrowRight></ArrowRight>
   <Typography style={{fontSize:"2vh"}}>
     React libraries including (router,framer-motion,..etc)
   </Typography>
   </Box>

 </Box>
 
 </Box>
 </>
}

{projectQ &&
  <>

  <Box width="50%" height="50%" backgroundColor="#cfcfcf" alignItems="center" style={{position:"absolute", zIndex:"203",top:"23%", left:"24%",transform: "rotate(-0.3deg)"}}>
     <Box sx={{border:1, borderRadius:"0.5rem", backgroundColor:"black", boxShadow:5,marginLeft:"15%"}}>
    <Typography color="white" variant="h6" style={{fontSize:"2vh", marginBottom:"1rem",textAlign:"center"}} > Own projects</Typography>
    </Box>
    <Typography variant="h6" style={{fontSize:"1.5vh", marginTop:"1rem",textAlign:"center",marginLeft:"5%"}} > Ecommerce website - chiper electronics</Typography>

  <img src={chiper}
width="90%"
height="35%"
onClick={() => {}}
style={{marginLeft:"15%",}}
/>
<Typography variant="h6" style={{fontSize:"1.5vh", marginTop:"1rem",textAlign:"center",marginLeft:"5%",transform: "rotate(-0.5deg)"}} > online multiplayer Gaming - GAMEnCHAT</Typography>
<img src={game}
width="90%"
height="35%"
onClick={() => {}}
style={{marginLeft:"15%",transform: "rotate(-0.5deg)"}}
/>

</Box>
</>
}

{mdbQ &&
 <>
 <Box width="50%" height="50%" backgroundColor="#cfcfcf" alignItems="center" style={{position:"absolute", zIndex:"203",top:"23%", left:"24%",transform: "rotate(-0.8deg)"}}>
<img src={mangodb}
width="50%"
height="23%"
style={{transform:"rotate(0.8deg)" ,marginLeft:"35%", }}
/>

<Box display="grid">
  <Box display="flex">
  <ArrowRight></ArrowRight>
  <Typography style={{fontSize:"1.8vh"}}>
    {linea}
  </Typography>
  </Box>
  
  <Box display="flex">
  <ArrowRight></ArrowRight>
  <Typography style={{fontSize:"1.8vh"}}>
    {lineb}
  </Typography>
  </Box>

  <Box display="flex">
  <ArrowRight></ArrowRight>
  <Typography style={{fontSize:"1.8vh"}}>
    {linec}
  </Typography>
  </Box>

  <Box display="flex">
  
  <Typography style={{fontSize:"1.8vh"}}>
    {lined}
  </Typography>
  </Box>
</Box>

</Box>
</>
}


{nodeQ &&
 <>
 <Box width="50%" height="50%" backgroundColor="#cfcfcf" alignItems="center" style={{position:"absolute", zIndex:"203",top:"23%", left:"24%",transform: "rotate(-0.8deg)"}}>
<img src={node}
width="50%"
height="23%"
style={{marginLeft:"35%",transform:"rotate(0.8deg)"}}
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
 <Box width="50%" height="50%" backgroundColor="#cfcfcf" alignItems="center" style={{position:"absolute", zIndex:"203",top:"23%", left:"24%",transform: "rotate(-0.8deg)"}}>
<img src={react}
width="50%"
height="23%"
style={{marginLeft:"35%",transform:"rotate(0.8deg)"}}
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
 <Box width="50%" height="50%" backgroundColor="#cfcfcf" alignItems="center" style={{position:"absolute", zIndex:"203",top:"23%", left:"24%",transform: "rotate(-0.8deg)"}}>
<img src={express}
width="50%"
height="23%"
style={{marginLeft:"35%",transform:"rotate(0.8deg)"}}
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
 <Box width="50%" height="50%" backgroundColor="#cfcfcf" alignItems="center" style={{position:"absolute", zIndex:"203",top:"23%", left:"24%",transform: "rotate(-0.3deg)"}}>
<img src={redux}
width="50%"
height="23%"
style={{marginLeft:"35%",transform:"rotate(0.3deg)"}}
/>

<Box display="grid">
  <Box display="flex">
  <ArrowRight></ArrowRight>
  <Typography style={{fontSize:"1.6vh"}}>
    {linea}
  </Typography>
  </Box>
  
  <Box display="flex">
  <ArrowRight></ArrowRight>
  <Typography style={{fontSize:"1.6vh"}}>
    {lineb}
  </Typography>
  </Box>

  <Box display="flex">
  <ArrowRight></ArrowRight>
  <Typography style={{fontSize:"1.6vh"}}>
    {linec}
  </Typography>
  </Box>

  <Box display="flex">
  <ArrowRight></ArrowRight>
  <Typography style={{fontSize:"1.6vh"}}>
    {lined}
  </Typography>
  </Box>
</Box>

</Box>
</>
}


{jsQ &&
 <>
 <Box width="50%" height="50%" backgroundColor="#cfcfcf" alignItems="center" style={{position:"absolute", zIndex:"203",top:"23%", left:"24%",transform: "rotate(-0.8deg)"}}>
<img src={js}
width="50%"
height="23%"
style={{marginLeft:"35%",transform:"rotate(0.8deg)"}}
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
 <Box width="50%" height="50%" backgroundColor="#cfcfcf" alignItems="center" style={{position:"absolute", zIndex:"203",top:"23%", left:"24%",transform: "rotate(-0.8deg)"}}>
<img src={git}
width="50%"
height="23%"
style={{marginLeft:"35%",transform:"rotate(0.8deg)"}}
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
 <Box width="50%" height="50%" backgroundColor="#cfcfcf" alignItems="center" style={{position:"absolute", zIndex:"203",top:"23%", left:"24%",transform: "rotate(-0.8deg)"}}>
<img src={html}
width="50%"
height="23%"
style={{marginLeft:"35%",transform:"rotate(0.8deg)"}}
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
  
  <Typography style={{fontSize:"2vh"}}>
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

{cssQ &&
 <>
 <Box width="50%" height="50%" backgroundColor="#cfcfcf" alignItems="center" style={{position:"absolute", zIndex:"203",top:"23%", left:"24%",transform: "rotate(-0.8deg)"}}>
<img src={css}
width="50%"
height="23%"
style={{marginLeft:"35%",transform:"rotate(0.8deg)"}}
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
  
  <Typography style={{fontSize:"2vh"}}>
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

{bootstrapQ &&
 <>
 <Box width="50%" height="50%" backgroundColor="#cfcfcf" alignItems="center" style={{position:"absolute", zIndex:"203",top:"23%", left:"24%",transform: "rotate(-0.8deg)"}}>
<img src={bootstrap}
width="50%"
height="23%"
style={{marginLeft:"35%",transform:"rotate(0.8deg)"}}
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
 <Box width="50%" height="50%" backgroundColor="#cfcfcf" alignItems="center" style={{position:"absolute", zIndex:"203",top:"23%", left:"24%",transform: "rotate(-0.8deg)"}}>
<img src={sql}
width="50%"
height="23%"
style={{marginLeft:"35%",transform:"rotate(0.8deg)"}}
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
 <Box width="50%" height="50%" backgroundColor="#cfcfcf" alignItems="center" style={{position:"absolute", zIndex:"203",top:"23%", left:"24%",transform: "rotate(-0.8deg)"}}>
<img src={mui}
width="50%"
height="23%"
style={{marginLeft:"35%",transform:"rotate(0.8deg)"}}
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





   )};

   export default Mobview;