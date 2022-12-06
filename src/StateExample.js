import React from'react'
class StateExample extends React.Component{
	state={name:"paru", year:"2002"}
	render(){
		return(
			<div>
			<h1>hello world</h1>
			<p>{this.state.name}{this.state.year}</p>

			</div>
			)
	}
	

}
export default StateExample