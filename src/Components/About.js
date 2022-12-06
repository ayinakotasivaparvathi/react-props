import {useState} from'react'
function About(){
const[country,setCountry]=useState("paris");
const[village,setVillage]=useState("esthanbull")
const[password,setPassword]=useState("paruuuu")
	return(
		<div>
		{/*<h1>{country}</h1>
				<p>{village}</p>*/}
		<p><input
		onChange={(e)=>setVillage(e.target.value)} placeholder="enter your village"/></p> 
		<p>
		<input
		onChange={(e)=>setCountry(e.target.value)} placeholder="enter your country"/>
		</p>
		<button onClick={()=>console.log(village,country)}>submit</button>
		
		</div>
		)
}

export default About