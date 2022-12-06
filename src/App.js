//import ClassComponent from './ClassComponent'
//import PropsExample from './PropsExample' 
//import FuncProps from './FuncProps'
//import StateExample from './StateExample'
/*import DemoExample from'./DemoExample'
import Events from'./Events'
import'./App.css'*/
import Home from'./Components/Home'
import About from'./Components/About'
import Contact from'./Components/Contact'
import Navbar from'./Components/Navbar'
import NotFound from './Components/NotFound'
import{BrowserRouter,Routes,Route} from'react-router-dom'
function App(){
  return(
    
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/"element={<Home/>}/>
    <Route path="/about"element={<About/>}/>
    <Route path="/contact"element={<Contact/>}/>
    <Route path="*"element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
     {/*<Events/>
       <DemoExample price="3rd price"/>
     <StateExample/>
      <FuncProps carname="paru" year="2002"/>
      <h1>hello</h1>

      <PropsExample name="deepu" age="20"/>
      <PropsExample name="chinni" age="19"/>
      <p>Have a great day</p>
      <h1>PANDA</h1>
      <img src="https://img.freepik.com/free-vector/cute-panda-with-bamboo_138676-3053.jpg?w=2000" width="40%" alt="panda"/>
      <ClassComponent/>*/}
      </div>
    );
} 
export default App; 