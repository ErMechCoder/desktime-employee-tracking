import React, { useEffect, useRef, useState } from 'react'
import { Box, Input, Text } from '@chakra-ui/react';
import styled from "styled-components";
import plus from "../../assets/svg/plus.svg"
import tag from "../../assets/svg/tag-gray.svg"
import list from "../../assets/svg/list-blue.svg"
import clock from "../../assets/svg/clock-blue.svg"
import { useDispatch, useSelector } from "react-redux";
import { addProject, getProjects} from '../../store/projects/projects.actions';
import { addProjectScreen } from '../../store/screen/screen.actions';
import ProjectList from "./ProjectList"
import Navbar from '../Navbar';
import SideNav from '../NavbarAndSideBar/SideNav';

const TimeTrackerStyling = styled.div`
margin:50px;
padding:50px 20px;
.MainDivForTimeTracking{
    display:flex;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
    border:1px solid #dedede;
    height:fit-content;
    align-items:center;
    background:white;
    justify-content:space-between;
}
.MainDivForTimeTrackingLeftPart{
    height:40px;
    margin:10px 0px 10px 20px;
    padding:5px 15px;
    font-size:14px;
    width:57%;
}
.MainDivForTimeTrackingLeftPart:hover{
    border:1px solid #dedede;
}
.MainDivForTimeTrackingRightPartSubDiv{
    display:flex;
    align-items:center;
    gap:10px;
}
.MainDivForTimeTrackingRightPart{
    display:flex;
    align-items:center;
    gap:25px;
    margin-right:10px;
}

`

const Button1 = styled.button`
    padding: 10px 30px;
    font-size: 14px;
    line-height: 1.4;
    border-radius: 2px;
    background-color: #03a9f4;
    color: white;
    cursor: pointer;
    font-weight: 600;
    &:hover{
        background-color: #0795d6;
    }
`

const TimeTracker = () => {
    const [watch, setwatch] = useState(0);
    const [input, setInput] = useState("")
    const [timer, settimer] = useState(null);
    const [check, setcheck] = useState(true);
    const [totalTime, setTotalTime] = useState(0);
    const [projectData, setProjectData] = useState([])
    const startTime = useRef(null);

    

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.projects);
    // console.log('task data:', data)
   
    const [isRunning, setIsRunning] = useState(false);

    const handleStart = () => {
      setIsRunning(true);
      dispatch(addProjectScreen(
        {
          shouldStart: true,
  
        }
      ))
    };
  
    const handleStop = () => {
      setIsRunning(false);
      dispatch(addProjectScreen(
        {
          shouldStart: false,
  
        }
      ))
    };
  

    useEffect(() => {
        dispatch(getProjects())
    }, [])

    const start = () => {
        let x = new Date()
        startTime.current = x.getHours() + ":" + x.getMinutes()
        setcheck(!check)
        if (!timer) {
            let id = setInterval(() => {
                setwatch((e) => e + 10)
            }, 10)
            settimer(id)
        }
    }

    const stop = () => {
        var total = 0
        for(var i=0; i<data.length; i++){
            total += Number(data[i].timediff)
         
        }
        // console.log("total",total)
        setTotalTime(total)
        let y = new Date();
        setcheck(!check);
        clearInterval(timer);
        setwatch(0);
        settimer(null);
        dispatch(addProject({
            title: input,
            starttime: startTime.current,
            endtime: y.getHours() + ":" + y.getMinutes(),
            timediff: watch
        }))
    }

    const reset = () => {
        clearInterval(timer)
        setwatch(0)
    }

    function msToTime(duration) {
        var milliseconds = parseInt((duration % 1000))
            , seconds = parseInt((duration / 1000) % 60)
            , minutes = parseInt((duration / (1000 * 60)) % 60)
            , hours = parseInt((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds
        if (hours == 0 && minutes == 0) {
            return seconds + "s" + " " + milliseconds / 10;
        }
        else if (hours == 0 && minutes > 0) {
            return minutes + "m" + " " + seconds + "s" + " " + (milliseconds / 10);
        }
        else if (hours > 0) {
            return hours + "h" + " " + minutes + "m" + " " + seconds + "s" + " " + (milliseconds / 10);
        }
    }

    const [toggle, setToggle] = useState(true)
    const toggleNavbar = (x) => {
      setToggle(x)
    }
    
    



    return (
        <div>
        <Navbar props = {{toggle, toggleNavbar}} />
        <div style={{display:'flex'}}>
            <div  style={toggle ? {width:"218px"} : {width:'53px'}}>
              <SideNav props = {toggle}/>
            </div>
            <div style={toggle ? {width: 'calc(100% - 218px)'} :{width: 'calc(100% - 53px)'}}>
            <TimeTrackerStyling>
            <section>
                        <h5 className="dash-title">Screen Recording</h5>
                        <div className="card">
                          <div className="card-body">
                            <div className="time-list">
                              <div className="dash-stats-list">
                                <p>START CAPTURE</p>
                              </div>

                            </div>
                            <div className="request-btn">
                            {isRunning ? (
        <button   className="btn btn-primary" onClick={handleStop}>Stop</button>
      ) : (
        <button    className="btn btn-primary" onClick={handleStart}>Start</button>
      )}

                            </div>
                          </div>
                        </div>
                      </section>
            <div className='MainDivForTimeTracking'>
                <input className='MainDivForTimeTrackingLeftPart' placeholder='what are you working on today?' onChange={(e) => setInput(e.target.value)} />
                <div className='MainDivForTimeTrackingRightPart'>
                    <div className='MainDivForTimeTrackingRightPartSubDiv'>
                        <img src={plus} alt="error"/> 
                        <p style={{fontSize:'14px', color:'#03a9f4', fontWeight:'500', marginRight:'1.5vw'}}>Project Task</p>
                    </div>
                    <div style={{borderRight:'1px solid #e4eaee', borderLeft:'1px solid #e4eaee', padding:'5px 20px'}}>
                        <img src={tag} alt="error"/>
                    </div>
               
                    <div style={{fontWeight:'600', fontSize:'18px'}}>{msToTime(watch)}</div>
                    <Button1 onClick={check ? start : stop}>{check ? "START" : "STOP"}</Button1>
                    
                    <div style={{display:'grid',gap:'10px'}}>
                        <img src={clock} alt="error" />
                        <img src={list} alt="error" />
                    </div>
                </div>
            </div>

            
            <br />
            <br />
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <p style={{ fontSize:'14px'}}>Current Task</p>
                <div style={{ fontSize:'12px', display:'flex', alignItems:'center',color:'#9c9c9c'}}>Week Total: <p style={{ fontSize:'18px', padding:'0px 10px', fontWeight:'500',color:'black'}}>{msToTime(totalTime)}</p> </div>
            </div>
            <div>
                {
                    data.map((e, ind) => (
                        <ProjectList key={ind} e={e} />
                    ))
                }
            </div>
        </TimeTrackerStyling>
            </div>
        </div>
   
   

   
    
       </div>
    )
}

export default TimeTracker