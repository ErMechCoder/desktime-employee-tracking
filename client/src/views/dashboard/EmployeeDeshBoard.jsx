import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getProjects} from '../../store/projects/projects.actions';

import { useDispatch, useSelector } from "react-redux";
import { Box } from '@mui/material';

import Navbar from '../../mainComponent/Navbar';
import SideNav from '../../mainComponent/NavbarAndSideBar/SideNav';


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

const Heading2 = styled.h2`
    font-size:28px;
    line-height: 1.2;
    font-weight: normal;
    color: #3D4853;
    margin-bottom:10px;
`
const Div1 = styled.div`
    background:#f7fcff;
    width:50%;
    margin: auto;
    padding:10px;

`
const Div2 = styled.div`
    background:#d7e8f2;
    width:50%;
    margin: auto;
    padding:10px;

`
const Button1 = styled.button`
    margin-top: 50px;
    border-radius: 5px;
    background: #0288D1;
    border-bottom: 4px solid #0277BD;
    width: 285px;
    height: 56px;
    text-transform: uppercase;
    color: #fff;
    padding-top: 4px;
    margin-bottom: 10px;
`
const BTag = styled.a`
    font-size: 13px;
    color: #01579B;
    cursor: pointer;
`
const CTag = styled.div`
    color: #5A6B7B;
    font-size: 16px;
    text-align:left;
    display: flex;
  justify-content: space-around;
  
    
`
const Div4 = styled.div`
    width: 100%;
    display: flex;
    
    gap: 7px;
`
const Div5 = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;
`


const EmployeeDeshBoard = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.projects);
  console.log('EmployeeDeshBoarddata:', data)

  const [toggle, setToggle] = useState(true)
  const toggleNavbar = (x) => {
    setToggle(x)
  }

  // const [isRunning, setIsRunning] = useState(false);

  // const handleStart = () => {
  //   setIsRunning(true);
  //   dispatch(addProjectScreen(
  //     {
  //       shouldStart: true,

  //     }
  //   ))
  // };

  // const handleStop = () => {
  //   setIsRunning(false);
  //   dispatch(addProjectScreen(
  //     {
  //       shouldStart: false,

  //     }
  //   ))
  // };



  useEffect(() => {
    dispatch(getProjects())
  }, [])






  return (
    <div>
      <Navbar props={{ toggle, toggleNavbar }} />
      <div style={{ display: 'flex' }}>
        <div style={toggle ? { width: "218px" } : { width: '53px' }}>
          <SideNav props={toggle} />
        </div>
        <div style={toggle ? { width: 'calc(100% - 218px)' } : { width: 'calc(100% - 53px)' }}>
          <TimeTrackerStyling>

            <div className="page-wrapper">
              <div className="content container-fluid">
                <div className="row d-flex" >
                  <div className="col-lg-4 col-md-4">
                    <div className="dash-sidebar">
                      <section>
                        <h5 className="dash-title">Projects</h5>
                        <div className="card">
                          <div className="card-body">
                            <div className="time-list">
                              <div className="dash-stats-list">
                                <h4>{data?.length}</h4>
                                <p>Total Tasks</p>
                              </div>
                              <div className="dash-stats-list">
                                <h4>14</h4>
                                <p>Pending Tasks</p>
                              </div>
                            </div>
                            <div className="request-btn">
                              <div className="dash-stats-list">
                                <h4>{data?.length}</h4>
                                <p>Total Projects</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      {/* <section>
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
                      </section> */}

                      <section>
                        <h5 className="dash-title">Your Leave</h5>
                        <div className="card">
                          <div className="card-body">
                            <div className="time-list">
                              <div className="dash-stats-list">
                                <h4>4.5</h4>
                                <p>Leave Taken</p>
                              </div>
                              <div className="dash-stats-list">
                                <h4>12</h4>
                                <p>Remain</p>
                              </div>
                            </div>
                            <div className="request-btn">
                              <a className="btn btn-primary" href="#">Apply Leave</a>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section>
                        <h5 className="dash-title">Upcoming Holiday</h5>
                        <div className="card">
                          <div className="card-body text-center">
                            <h4 className="holiday-title mb-0">Mon 20 May 2019 - Ramzan</h4>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>

                {/* Right side dashboard */}
                <div className="col-lg-8 ">
                    <div className="dash-sidebar">
                      <section>
                        <h5 className="dash-title">Current Task</h5>
                        <div className="card">
                          <div className="card-body">


                          {
                                                                        data?.map((item ,i)=>{
                                                                            return <div className="time-list" key={item._id}>
                                                                            <div className="d-flex gap-3">
                                                                             <h6>{i+1}</h6>
                                                                              <p>{item.title}</p>
                                                                            </div>
                                                                          
                                                                          </div>
                                                                        })
                }


                            
                           
                          </div>
                        </div>
                      </section>
                      
                    </div>
                  </div>





                </div>

              </div>
            </div>



          </TimeTrackerStyling>
        </div>
      </div>


    </div>



  )
}

export default EmployeeDeshBoard;












