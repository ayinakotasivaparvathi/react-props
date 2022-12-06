import {Link} from 'react-router-dom'
import'../App.css'
function Navbar(){
	return	(
		<div className="nav">
		<Link to='/'>Home</Link>
		<Link to='/About'>About</Link>
		<Link to='/Contact'>Contact</Link>
		</div>

		)
}
export default Navbar