import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import { addProjectScreen } from '../../store/screen/screen.actions';
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
const ScreenShots = () => {
  const [input1, setInput1] = useState("");
  const [checked, setChecked] = useState(true);
  const toggleChecked = () => setChecked(value => !value);
console.log(checked)


  const dispatch = useDispatch();

  return (
    <SignUpStyling>
      <div style={{ width: '100vw' }}>
        
        <div className='mainSignUpDiv'>
          <div className='SignUpformDiv'>
             
            <button

     className='SignUpSubmitButton' onClick={() => dispatch(addProjectScreen(
                {
                    start: checked,
              
                }
              ))} >Start ScreenShort</button>

        
          </div>
   
          
        </div>
      </div>
      
    </SignUpStyling>
  )
}

export default ScreenShots;