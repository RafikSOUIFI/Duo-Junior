import './App.css';
import { useState,useEffect } from 'react'
import axios from "axios"
import Home from './components/Home';
import Accessories from './components/Accessories';
import Laptops from './components/Laptops';
import Smartphones from './components/Smartphones';
import Smartwatches from './components/Smartwatches';
import Search from './components/Search';
import Contact from './components/Contact';
import Cart from './components/Cart';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';




const App = () => {
const [view,setView] = useState("Home");
const switchView = (x) => {
  setView(x)
}

const[data,setData]=useState([])
const[searchTerm,setSearchTerm]=useState("")
const [cart,setCart]=useState([])
// const [userData,setUserData]= useState([])

useEffect(()=>{
  axios.get("http://localhost:6001/api/devices").then(({data})=>setData(data)).catch((err)=>console.log(err))
},[])

// const getUserData=()=>{
//   axios.get("http://localhost:6001/api/customers").then(({data})=>setUserData(data)).catch((err)=>console.log(err))
// }

const clickSignUp=()=>{
  // getUserData()
  switchView ("SignUp")
  // console.log(userData)
}


const handleSearch = (e)=>{
  setSearchTerm(e.target.value)
  switchView ("Search")
}
const emptyInp =()=>{
  document.getElementById("emty").value = ""
  switchView ("Search")

}

  return (
    <>
    <div class="search" id="searchinitial">

        <a class="active" href="#home" onClick={()=>switchView ("Home")}>Home</a>

        <a id="Laptops" href="#Laptops" onClick={()=>switchView ("Laptops")}>Laptops</a>

        <a id="Smartphones" href="#Smartphones" onClick={()=>switchView ("Smartphones")}>Smartphones</a>
        
        <a id="Smartwatches" href="#Smartwatches" onClick={()=>switchView ("Smartwatches")}>Smartwatches</a>

        <a id="Accessoires" href="#Accessoires" onClick={()=>switchView ("Accessories")}>Accessoires</a>
        
        <div class="search-Div">
            <input id="emty" class="find" type="text" placeholder="What are you looking for ?" name="search" required onChange={handleSearch}/>
            <button id="btn" type="submit" class="bt" onClick={emptyInp}>Find</button>
        </div>
        <a id="Contact" href="#contact" onClick={()=>switchView ("Contact")}>Contact</a>
        <a id="SignUp" href="#SignUp" onClick={clickSignUp} >Sign Up</a>
        <a id="logIn" href="#Login" onClick={()=>switchView ("LogIn")} >Login</a> 
        <a id="shop" href="#shop"><img className="Shopimg img" src="https://lh3.googleusercontent.com/UNKBs5nuWWoYHVr-4BXewjnuxF8RJ1uc4G0jA3_Le2NKkJzrBmrSEgyHRlSATmsiJyW8avGWigPlGPetypD2XMyi_pri_SAmFf_yk1OS" alt="Shop" onClick={()=>switchView ("Cart")}/></a>
      </div>
      {view === "Home" && <Home switchView={switchView}/>}
      {view === "Laptops" && <Laptops data={data} cart={cart} setCart={setCart}/>}
      {view === "Smartphones" && <Smartphones data={data} cart={cart} setCart={setCart}/>}
      {view === "Smartwatches" && <Smartwatches data={data} cart={cart} setCart={setCart}/>}
      {view === "Accessories" && <Accessories data={data} cart={cart} setCart={setCart}/>}
      {view === "Search" && <Search data={data} searchTerm={searchTerm} cart={cart} setCart={setCart}/>}
      {view === "Contact" && <Contact />}
      {view === "Cart" && <Cart cart={cart} setCart={setCart} switchView={switchView}/>}
      {view === "SignUp" && <SignUp/>}
      {view === "LogIn" && <LogIn switchView={switchView}/>}
      </>
  );
}
export default App;
