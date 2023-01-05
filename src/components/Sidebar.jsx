import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import {Box,Typography,useMediaQuery,Divider,LinearProgress,Button} from "@mui/material";

import {CheckCircleOutline} from '@mui/icons-material';

//import desk from 'assets/portfolio_desktop.jpg'
import mypic from "assets/mypic.jpg"
//import zIndex from "@mui/material/styles/zIndex";

import {LinkedIn, Facebook, Instagram, Twitter, WhatsApp } from '@mui/icons-material';

const Sidebar = ({heigh,}) => { 

   const isDesktop = useMediaQuery("(min-width: 1000px)");
   const navigate = useNavigate();
   const isFirefox = typeof InstallTrigger !== 'undefined';
   //const isIE = false || !!document.documentMode;
   //const isEdge =  !!window.StyleMedia; //!isIE &&
   // onClick={() => {navigate("/");}}

   //Box 1 - width="200px" height="785px"
   //Box 2 - width="150px" height="750px"

   //<Box sx={{position:"absolute", zIndex:"12", backgroundColor:"rgb(100,250,100)",left:"100px", top:"700px", }}>
//<KeyboardDoubleArrowDown></KeyboardDoubleArrowDown>
//</Box> //98%
    //75%
    return (

        <Box display={isFirefox  ? "flex":""} justifyContent={isFirefox  ? "center":""} width={isFirefox && isDesktop  ? "800px":"200px"} height="auto" overflowX={isFirefox  ? "hidden":"scroll"} overflow="scroll"   backgroundColor="#cfcfcf" sx={{ boxShadow:5,borderRadius:"0.8rem"}}  marginLeft="0.8rem" marginRight="0.8rem" style={{position:"relative", zIndex:"10",}}>

<Box width={isFirefox ? "150px":"150px"} height={heigh} backgroundColor="#cfcfcf" marginLeft="0.9rem" marginTop="1rem" borderRadius="0.5rem">

{ (!isFirefox) && <Box  sx={{position:"absolute", zIndex:"11", backgroundColor:"rgb(100,250,100)", left:"120px", top:"90px", border:1, borderColor:"black" }} borderRadius="50%" width="12px" height="12px" >

</Box >}



 <Box width="100px" height="100px" marginTop="1rem" backgroundColor="whitesmoke"  sx={{ borderRadius:"50%",marginLeft:"1.5rem", }} >
 <img src={mypic}
 width="90px"
 height="100px"
 
style={{border:"2px",borderRadius: "50%",borderColor:"white", marginLeft:"0.325rem"}}
 />
</Box>   



<Typography color="black" variant="h6" fontFamily="sans-serif" textAlign="center">Vishnu Soman</Typography>
<Typography color="black" fontSize="12px" fontFamily="sans-serif" textAlign="center">Full Stack Developer</Typography>




<Box display="flex" justifyContent="center"  marginTop="0.5rem">
        <LinkedIn onClick={() => {window.open("https://e-chiper-electronics.onrender.com", "_blank");}} style={{fontSize:"14px",marginRight:"1.5rem", cursor:"pointer"}}></LinkedIn>
        <WhatsApp onClick={() => {window.open("https://e-chiper-electronics.onrender.com", "_blank");}} style={{fontSize:"14px", cursor:"pointer"}}></WhatsApp>
</Box>

<Divider color="black" sx={{marginTop:"0.5rem", marginBottom:"0.5rem", height:"1px"}}  ></Divider>

<Box display="flex" justifyContent="space-between">
<Typography>Age:</Typography>
<Typography fontSize="15px" >28</Typography>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>Location:</Typography>
<Typography fontSize="15px" >Kerala</Typography>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>Looking for Job:</Typography>
<CheckCircleOutline fontSize="40px" sx={{color:"green", marginTop:"4px"}} ></CheckCircleOutline>
</Box>

<Divider color="black" sx={{marginTop:"0.5rem", marginBottom:"0.5rem", height:"1px"}}  ></Divider>

<Typography fontSize="20px" sx={{marginTop:"0.5rem", marginBottom:"0.5rem"}} >Languages</Typography>

<Box display="flex" justifyContent="space-between">
<Typography>Malayalam</Typography>
<Typography>100%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="100%" height="4px" backgroundColor="green">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>English</Typography>
<Typography>90%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="90%" height="4px" backgroundColor="green">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>Hindi</Typography>
<Typography>70%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="70%" height="4px" backgroundColor="green">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>Tamil</Typography>
<Typography>50%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="50%" height="4px" backgroundColor="green">
</Box>
</Box>

<Divider color="black" sx={{marginTop:"1.5rem", marginBottom:"0.5rem", height:"1px"}}  ></Divider>

<Typography fontSize="20px" sx={{marginTop:"0.5rem", marginBottom:"0.5rem"}} >Programming</Typography>



<Box display="flex" justifyContent="space-between">
<Typography>JS</Typography>
<Typography>75%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="75%" height="4px" backgroundColor="green">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>C/C++</Typography>
<Typography>74%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="74%" height="4px" backgroundColor="green">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>Python</Typography>
<Typography>50%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="50%" height="4px" backgroundColor="green">
</Box>
</Box>

<Divider color="black" sx={{marginTop:"1.5rem", marginBottom:"0.5rem", height:"1px"}}  ></Divider>

<Typography fontSize="20px" sx={{marginTop:"0.5rem", marginBottom:"0.5rem"}} >Development</Typography>

<Box display="flex" justifyContent="space-between">
<Typography>HTML</Typography>
<Typography>80%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="80%" height="4px" backgroundColor="green">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>CSS</Typography>
<Typography>82%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="82%" height="4px" backgroundColor="green">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>JSX</Typography>
<Typography>80%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="80%" height="4px" backgroundColor="green">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>React</Typography>
<Typography>70%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="70%" height="4px" backgroundColor="green">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>Express</Typography>
<Typography>70%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="70%" height="4px" backgroundColor="green">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>Node</Typography>
<Typography>70%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="70%" height="4px" backgroundColor="green">
</Box>
</Box>

<Divider color="black" sx={{marginTop:"1.5rem", marginBottom:"0.5rem", height:"1px"}}  ></Divider>

<Typography fontSize="20px" sx={{marginTop:"0.5rem", marginBottom:"0.5rem"}} >UI Design</Typography>

<Box display="flex" justifyContent="space-between">
<Typography>Mui & Bootstrap</Typography>
<Typography>70%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="70%" height="4px" backgroundColor="green">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>Figma </Typography>
<Typography>65%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="65%" height="4px" backgroundColor="green">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>Photoshop </Typography>
<Typography>65%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="65%" height="4px" backgroundColor="green">
</Box>
</Box>

<Divider color="black" sx={{marginTop:"1.5rem", marginBottom:"0.5rem", height:"1px"}}  ></Divider>

<Typography fontSize="20px" sx={{marginTop:"0.5rem", marginBottom:"0.5rem"}} >State Manage</Typography>

<Box display="flex" justifyContent="space-between">
<Typography>Redux</Typography>
<Typography>70%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="70%" height="4px" backgroundColor="green">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>Context API</Typography>
<Typography>75%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="75%" height="4px" backgroundColor="green">
</Box>
</Box>

<Divider color="black" sx={{marginTop:"1.5rem", marginBottom:"0.5rem", height:"1px"}}  ></Divider>

<Typography fontSize="20px" sx={{marginTop:"0.5rem", marginBottom:"0.5rem"}} >Database </Typography>

<Box display="flex" justifyContent="space-between">
<Typography>Mysql</Typography>
<Typography>60%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="60%" height="4px" backgroundColor="green">
</Box>
</Box>

<Box display="flex" justifyContent="space-between">
<Typography>Mongodb</Typography>
<Typography>75%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="75%" height="4px" backgroundColor="green">
</Box>
</Box>

<Divider color="black" sx={{marginTop:"1.5rem", marginBottom:"0.5rem", height:"1px"}}  ></Divider>

<Typography fontSize="20px" sx={{marginTop:"0.5rem", marginBottom:"0.5rem"}} >Version Control </Typography>

<Box display="flex" justifyContent="space-between">
<Typography>GIT</Typography>
<Typography>70%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
<Box width="70%" height="4px" backgroundColor="green">
</Box>
</Box>


<Divider color="black" sx={{marginTop:"1rem", marginBottom:"1rem", height:"1px"}}  ></Divider>

<Button sx={{color:"white", backgroundColor:"black", width:"150px", height:"20px"}}>Download CV</Button>

<Divider color="black" sx={{marginTop:"1rem", marginBottom:"0.5rem", height:"1px"}}  ></Divider>

</Box>


</Box>


        )};

export default Sidebar;