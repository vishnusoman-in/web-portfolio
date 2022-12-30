//import Navbar from "components/Navbar.jsx"

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import {Box,Typography,useMediaQuery,Divider,LinearProgress,Button} from "@mui/material";



import desk from 'assets/portfolio_desktop.jpg'
import mypic from "assets/mypic.jpg"
//import zIndex from "@mui/material/styles/zIndex";

const Portfoliopage = () => { 

   const isDesktop = useMediaQuery("(min-width: 1000px)");
   const navigate = useNavigate();
   // onClick={() => {navigate("/");}}
    
    return (
       
<Box display="flex" justifyContent="flex-start" style={{position:"relative", zIndex:"0", objectFit:"cover" }} >

<img src={desk}
width="auto"
height="785px"
objectFit="cover"
/>

<Box width="200px" height="785px" backgroundColor="#999696" sx={{border:1, borderColor:"#999696", borderWidth:2,}} m="0.5rem">


 <Box width="100px" height="100px" sx={{border:1, borderColor:"black", borderWidth:2,borderRadius:"50%",marginLeft:"2rem" }} >
 <img src={mypic}
 width="100px"
 height="100px"

 style={{borderRadius: "50%",}}
 />
</Box>   


<Typography color="whitesmoke" variant="h5" fontFamily="sans-serif" textAlign="center">Vishnu Soman</Typography>

<Divider color="red" ></Divider>

<Box display="flex">
<Typography>Age:</Typography>
<Typography>28</Typography>
</Box>

<Box display="flex">
<Typography>Location:</Typography>
<Typography>Alappy, Kerala</Typography>
</Box>

<Box display="flex">
<Typography>Role:</Typography>
<Typography>Mern Full Stack</Typography>
</Box>

<Divider color="red" ></Divider>

<Typography>Languages</Typography>

<Box display="flex" justifyContent="space-between">
<Typography>Malayalam</Typography>
<Typography>100%</Typography>
</Box>
<Box width="100%" height="4px" sx={{border:1, borderColor:"white", borderRadius:"0.5rem"}}>
    <Box width="80%" height="4px" backgroundColor="black">

    </Box>
</Box>

<Divider color="red" ></Divider>

<Typography>Skills</Typography>

<Divider color="red" ></Divider>

<Typography>extra skills</Typography>

<Divider color="red" ></Divider>

<Button>Download CV</Button>


</Box>


</Box>

)};

export default Portfoliopage;