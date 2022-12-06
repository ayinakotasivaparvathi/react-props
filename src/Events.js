import {Component}from 'react'
class Events extends Component{
	state={
		username:""
	}
	handlechange=()=>{
		alert()
	}
	render(){
		return(
			<div>
				<input
				onChange={this.handlechange}
				placeholder="Enter username"/>
			</div>
		)
	}
}
export default Events