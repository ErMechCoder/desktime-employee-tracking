import React, { useState, useEffect } from 'react';
import { getProjects } from '../../store/projects/projects.actions';
import styled from 'styled-components';

import EditIcon from '@mui/icons-material/Edit';
import Modal from 'react-bootstrap/Modal';
import Navbar from '../../mainComponent/Navbar';
import SideNav from '../../mainComponent/NavbarAndSideBar/SideNav';
import { useDispatch, useSelector } from 'react-redux';




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
const TaskBoard= () => {


    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.projects);
    console.log('Profile task data:', data)


    const [toggle, setToggle] = useState(true);

    const toggleNavbar = (x) => {
        setToggle(x)
    }



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
                            {/* <!-- Page Header --> */}
                            <div className="page-header">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h3 className="page-title">PROJECTS BOARD</h3>
                                            <ul className="breadcrumb">
                                                <li className="breadcrumb-item">Dashboard</li>
                                                <li className="breadcrumb-item active">PROJECTS BOARD</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                    <div className="row">
                                                        <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                                                            <div className="card">
                                                                <div className="card-body">
                                                                    <div className="dropdown profile-action">
                                                                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="project-title"><a href="project-view.html">Office Management</a></h4>
                                                                    <small className="block text-ellipsis m-b-15">
                                                                        <span className="text-xs">1</span> <span className="text-muted">open tasks, </span>
                                                                        <span className="text-xs">9</span> <span className="text-muted">tasks completed</span>
                                                                    </small>
                                                                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                                                                        typesetting industry. When an unknown printer took a galley of type and
                                                                        scrambled it...
                                                                    </p>
                                                                    <div className="pro-deadline m-b-15">
                                                                        <div className="sub-title">
                                                                            Deadline:
                                                                        </div>
                                                                        <div className="text-muted">
                                                                            17 Apr 2019
                                                                        </div>
                                                                    </div>


                                                                    <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                                                                    <div className="progress progress-xs mb-0">
                                                                        <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="40%" style={{ width: "40%" }}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                                                            <div className="card">
                                                                <div className="card-body">
                                                                    <div className="dropdown profile-action">
                                                                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="project-title"><a href="project-view.html">Project Management</a></h4>
                                                                    <small className="block text-ellipsis m-b-15">
                                                                        <span className="text-xs">2</span> <span className="text-muted">open tasks, </span>
                                                                        <span className="text-xs">5</span> <span className="text-muted">tasks completed</span>
                                                                    </small>
                                                                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                                                                        typesetting industry. When an unknown printer took a galley of type and
                                                                        scrambled it...
                                                                    </p>
                                                                    <div className="pro-deadline m-b-15">
                                                                        <div className="sub-title">
                                                                            Deadline:
                                                                        </div>
                                                                        <div className="text-muted">
                                                                            17 Apr 2019
                                                                        </div>
                                                                    </div>

                                                                    <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                                                                    <div className="progress progress-xs mb-0">
                                                                        <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="40%" style={{ width: "40%" }}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                                                            <div className="card">
                                                                <div className="card-body">
                                                                    <div className="dropdown profile-action">
                                                                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="project-title"><a href="project-view.html">Video Calling App</a></h4>
                                                                    <small className="block text-ellipsis m-b-15">
                                                                        <span className="text-xs">3</span> <span className="text-muted">open tasks, </span>
                                                                        <span className="text-xs">3</span> <span className="text-muted">tasks completed</span>
                                                                    </small>
                                                                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                                                                        typesetting industry. When an unknown printer took a galley of type and
                                                                        scrambled it...
                                                                    </p>
                                                                    <div className="pro-deadline m-b-15">
                                                                        <div className="sub-title">
                                                                            Deadline:
                                                                        </div>
                                                                        <div className="text-muted">
                                                                            17 Apr 2019
                                                                        </div>
                                                                    </div>

                                                                    <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                                                                    <div className="progress progress-xs mb-0">
                                                                        <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="40%" style={{ width: "40%" }}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                                                            <div className="card">
                                                                <div className="card-body">
                                                                    <div className="dropdown profile-action">
                                                                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="project-title"><a href="project-view.html">Hospital Administration</a></h4>
                                                                    <small className="block text-ellipsis m-b-15">
                                                                        <span className="text-xs">12</span> <span className="text-muted">open tasks, </span>
                                                                        <span className="text-xs">4</span> <span className="text-muted">tasks completed</span>
                                                                    </small>
                                                                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                                                                        typesetting industry. When an unknown printer took a galley of type and
                                                                        scrambled it...
                                                                    </p>
                                                                    <div className="pro-deadline m-b-15">
                                                                        <div className="sub-title">
                                                                            Deadline:
                                                                        </div>
                                                                        <div className="text-muted">
                                                                            17 Apr 2019
                                                                        </div>
                                                                    </div>

                                                                    <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                                                                    <div className="progress progress-xs mb-0">
                                                                        <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="40%" style={{ width: "40%" }}></div>
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



export default TaskBoard;


