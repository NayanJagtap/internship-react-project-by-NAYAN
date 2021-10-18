import React,{useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';
import Spinner from "./Spinner";


const App = () => {
  const [cardData,setData]=useState([]);
  const[visibility,setVisibility]=useState(false);
  const[loading,setLoading]=useState(false);
  const allData=async ()=>{
    if(visibility){
      const res= await axios.get("https://reqres.in/api/users?page=1");
      const delay =2000;
      await new Promise((resolve)=>setTimeout(resolve,delay));
      setData(res.data.data);
    }
    setLoading(false);
  };
  const display=()=>{
    setVisibility(true);
    setLoading(true);
  };
  useEffect(()=>{
    if(visibility){
      allData();
    }
  },[loading]);
    const renderCard=(user)=>{
      if(loading) return Spinner;
      else{
        return(
          <div className="card">
          <img 
          src={user.avatar}
          alt=""
          style={{width:"190px"}}
          />
          <h3>
          {user.first_name} {user.last_name}
          </h3>
          <h3>
          {user.email}
          </h3>
          </div>
  );
        }
      };
      return(
        <div className="Application">
        <nav className ="navbar" >
        <a href="#" id="logo">LETS GROW <br></br>MORE</a>
        <a href="https://www.linkedin.com/in/nayan-jagtap-3a0b71179" class="contact">CONTACT</a>
        
    

        <button
          className="button"
          style={{backgroundColor:"brown"}}
          onClick={display}
          >
          getusers</button>
          </nav>
          {loading?<Spinner/>:null}
          <div className="containers" style={userStyle}>
          {loading?null:cardData.map(renderCard)}</div>
          </div>
      );
      };

      const userStyle ={
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gridGap:"4rem",
        marginBottom:"40px",
        padding:"10px",
      };
      export default App;