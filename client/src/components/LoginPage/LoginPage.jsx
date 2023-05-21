import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import { loginAPI } from '../../store/auth/auth.actions';
import { useDispatch, useSelector } from 'react-redux';


const SignUpStyling = styled.div`
text-align:center;
margin:0px;
background-color:#f2f6f8;
width:100%;
height:100vh;
display:flex;
.navbarForLoginAndSignup{
  display:flex;
  justify-content:space-between;
  padding:20px 30px;
}
.mainSignUpDiv{
  width:370px;
  margin:auto;
  margin-top:40px;
}
.SignUpformDiv{
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius:5px;
  background-color:white;
  widht:100%;
  height:405px;
}
.SignUpform{
  widht:100%;
  height:fit-content;
  margin-top:20px;
  display:grid;
  gap:15px;
}
.SignUpinputAdjust{
  height:25px;
  width:77%;
  margin:auto;
  border-radius:2px;
  background-color:#f8f8f8;
  border:none;
  border:0.1px solid #cacaca;
  font-size:13px;
  padding:9px;
}
.SignUpSubmitButton{
  height:37px;
  width:80%;
  margin:auto;
  border-radius:2px;
  background-color:#0bacf5;
  border:none;
  color:white;
  font-size:13px;
  font-weight:500;
  padding:0px 10px;
  cursor:pointer;
}
.SignUpSubmitButton:hover{
  background-color:#44b6e8;
}
.POR{
  font-size:"18px";
  font-weight:600;
  opacity:0.7;
  position:relative;
  margin-top:-14px;
  margin-bottom:10px;
}
.DontHaveAccountSignUp{
  margin-top:20px;
  background-color:white;
  padding: 8px 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}
.playstore{
  width:75%;
}
.loginSideImage{
  height:fit-content;
  width:50vw;
}
@media (max-width: 1700px) {
  .loginSideImage{
    width:70%;
  }
}
@media (max-width: 1200px) {
  .loginSideImage{
    width:100%;
  }
}
@media (max-width: 900px) {
  display:block;
}

`
const LoginPage = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <SignUpStyling>
      <div style={{ width: '100vw' }}>
        <div className='navbarForLoginAndSignup'>
        <Image
    minWidth={150}
    maxHeight={50}
    objectFit='cover'
    src='https://ekanatechnologies.ca/static/media/ekana_logo.9ba8b85762139c8667cd.png'
    alt='logo'
  />
          <h3>Employee Tracker CRM</h3>
          <p style={{ fontSize: "14px", color: 'grey' }}>Don't Have an account ? <Link to='/signup' style={{ fontWeight: "600", color: "#1b74e4", cursor: "pointer", textDecoration: 'none' }}>Sign Up</Link></p>
        </div>
        <div className='mainSignUpDiv'>
          <div className='SignUpformDiv'>
            <Link to="/" style={{ textDecoration: "none" }}><h3 style={{ fontSize: "18px", color: "black", padding: "30px 0px 0px 40px", textAlign: "left", fontWeight: "600" }}>Log In</h3></Link>
            <form className='SignUpform'>
              <input type="text" className='SignUpinputAdjust' placeholder='Enter email' autoComplete="username"  required onChange={(e) => setInput1(e.target.value)} />
              <input type="password" className='SignUpinputAdjust' placeholder='Enter Password' autoComplete="new-password" required onChange={(e) => setInput2(e.target.value)} />
              <div style={{ display: "flex", justifyContent: 'space-between', alignItems: "center", padding: '0px 40px 0px 40px', height: '30px' }}>

                <p><input type="checkbox" style={{ marginRight: '10px' }} />Stay logged in</p>
               
              </div>
              <Link to={'/employee'}><input type="submit" className='SignUpSubmitButton' value='LOG IN' onClick={() => dispatch(loginAPI(
                {
                  email: input1,
                  password: input2,
                }
              ))} /></Link>
            </form>
            <hr style={{ width: "80%", opacity: "1", margin:'auto', marginTop: "20px" }} />
        
          </div>
          <div className='DontHaveAccountSignUp'>
            <p style={{ fontSize: "14px" }}>Don't Have an account ? <Link to='/signup' style={{ fontWeight: "600", color: "#1b74e4", cursor: "pointer", textDecoration: 'none' }}>Sign Up</Link></p>
          </div>
          <br />
         
          
        </div>
      </div>
      {/* <div className="loginSideImage" style={{ background: '#3f5abf' }}>
        <button style={{ border: 'none', fontSize: '12px', padding: '3px 10px', height: 'fit-content', marginTop: '20px', cursor: 'pointer' }}><Link to='/features' style={{ textDecoration: 'none' }}>NEW</Link></button>
        <p style={{ color: 'white', fontSize: '33px', margin: '10px 0px 0px 0px' }}>Scheduling</p>
        <p style={{ color: 'white', fontSize: '17px', width: '80%', margin: 'auto', marginTop: '20px', marginBottom: '20px' }}>Visualize projects on a timeline and plan team's capacity (see who's busy and who's available). </p>
        <button style={{ background: 'black', padding: '5px 20px', marginBottom: '20px', cursor: 'pointer' }}><Link to='/features' style={{ textDecoration: 'none', color: 'white' }}>SEE HOW IT WORKS</Link></button>
       
      </div> */}
    </SignUpStyling>
  )
}

export default LoginPage