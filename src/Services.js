import './App.css'



import React from 'react'
import {useState, useEffect} from 'react'


function Services(props) {
const [state, setstate]=useState("navstart")


    useEffect(()=>{
     const timer =   setTimeout(()=>{

            if (props.state[2]==="navstart"){
                setstate("navend")
               }
        
               else if(props.state[2]==='navendfull'){
        
                setstate("navendfull")
               }
        
        
               else{
            }
    
           }, 10)

           return ()=>{
            clearTimeout(timer)
           }
     })
    return ( 
<div className={state}>
<div className="home">

<h1 className = "h1">Our Services</h1>

<div className="homediv">
<p className='homep'>

We are team of two talented developers with an aim to develop web user interfaces for future. We keep our eye on the evolving nature of the web development. We see frontend development specially single page app is the technology of the future and we can achieve many special things which were not possible before.

<br></br>
Contact us wbear8078@gmail.com

</p>
</div>
</div>

</div>

     );
}

export default Services;