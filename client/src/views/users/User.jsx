import React, { useState, useEffect } from 'react';
import { getProjects } from '../../store/projects/projects.actions';
import styled from 'styled-components';

import EditIcon from '@mui/icons-material/Edit';
import Modal from 'react-bootstrap/Modal';
import Navbar from '../../mainComponent/Navbar';
import SideNav from '../../mainComponent/NavbarAndSideBar/SideNav';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';



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
const User = () => {

    const [toggleElement, setToggleElement] = useState(false);
    const [show, setShow] = useState(false);
    const [ engineer,setEngineer]= useState([]);
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

    useEffect(()=>{
      
       const userdata= async()=>{
               try {
                const x = JSON.parse(localStorage.getItem("userData"));
                let id = x.user._id;

                const {data}= await axios.get(`https://vast-red-crocodile-boot.cyclic.app/api/user/${id}/profile`)
            
                setEngineer(data)
               } catch (error) {
                console.log(error)
               }
       }

       userdata()
    },[])

    
    console.log("engineer",engineer)
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

                            {/* <!-- Page Content --> */}
                            <div className="content container-fluid">

                                {/* <!-- Page Header --> */}
                                <div className="page-header">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h3 className="page-title">Profile</h3>
                                            <ul className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                                <li className="breadcrumb-item active">Profile</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Page Header --> */}
                                <div className="card mb-0">
                                    {
                                        engineer.map((item)=>{
                                            return <div className="card-body" key={item._id}>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="profile-view">
                                                        <div className="profile-basic">
                                                            <div className="row">
                                                                <div className="col-md-5">
                                                                    <div className="profile-info-left">
                                                                        <h3 className="user-name m-t-0 mb-0">{item.firstName} {item.lastName}</h3>
                                                                        <h6 className="text-muted">{item.department}</h6>
                                                                        <small className="text-muted">{item.designation}</small>
                                                                        <div className="staff-id">{item._id}</div>
                                                                    
                                                                        <div className="staff-msg"><a className="btn btn-custom" href="/employee/chat/login">Send Message</a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-7">
                                                                    <ul className="personal-info">
                                                                        <li>
                                                                            <div className="title">Phone:</div>
                                                                            <div className="text">{item.contact}</div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="title">Email:</div>
                                                                            <div className="text">{item.email}</div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="title">Birthday:</div>
                                                                            <div className="text">{item.birthDate}</div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="title">Address:</div>
                                                                            <div className="text">{item.address}</div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="title">Gender:</div>
                                                                            <div className="text">{item.gender}</div>
                                                                        </li>
    
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pro-edit" ><EditIcon onClick={() => setShow(true)} /></div>
    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        })
                                    }
                                    
                                </div>
                                <div className="card tab-box">
                                    <div className="row user-tabs">
                                        <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                                            <ul className="nav nav-tabs nav-tabs-bottom">
                                                <li className="nav-item col-sm-3"><span className="nav-link " data-toggle="tab" onClick={() => setToggleElement((prev) => !prev)}>Projects</span></li>
                                                <li className="nav-item col-sm-3"><span className="nav-link" data-toggle="tab" onClick={() => setToggleElement((prev) => !prev)}>Tasks</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="tab-content profile-tab-content">



                                            {/* <!-- Projects Tab --> */}
                                            {
                                                toggleElement ? <div>
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
                                                </div>
                                                    :

                                                    <div >
                                                        <div className="project-task">
                                                            <ul className="nav nav-tabs nav-tabs-top nav-justified mb-0">
                                                                <li className="nav-item"><div className="nav-link " data-toggle="tab" aria-expanded="true">All Tasks</div></li>

                                                            </ul>
                                                            <div className="tab-content">
                                                                <div className="tab-pane show active" id="all_tasks">

                                                                    {
                                                                        data?.map((item)=>{
                                                                            return <div className="task-wrapper" key={item._id}>

                                                                            <div className="task-list-container">
                                                                                <div className="task-list-body">
                                                                                    <ul id="task-list">
                                                                                        <li className="task">
                                                                                            <div className="task-container">
                                                                                                <span className="task-action-btn task-check">
                                                                                                    <span className="action-circle large complete-btn" title="Mark Complete">
                                                                                                        <i className="material-icons">check</i>
                                                                                                    </span>
                                                                                                </span>
                                                                                                <span className="task-label" >{item.title}</span>
                                                                                                <span className="task-action-btn task-btn-right">
                                                                                                    <Link to="/employee/timetracker">
                                                                                                    <span className="action-circle large" title="Assign">
                                                                                                        <i className="material-icons">person_add</i>
                                                                                                    </span>
                                                                                                    </Link>
                                                                                                    
                                                                                                    
                                                                                                </span>
                                                                                            </div>
                                                                                        </li>
    
                                                                                    </ul>
                                                                                </div>
                                                                                {/* <div className="task-list-footer">
                                 <div className="new-task-wrapper">
                                     <textarea id="new-task" placeholder="Enter new task here. . ."></textarea>
                                     <span className="error-message hidden">You need to enter a task first</span>
                                     <span className="add-new-task-btn btn" id="add-task">Add Task</span>
                                     <span className="btn" id="close-task-panel">Close</span>
                                 </div>
                             </div> */}
                                                                            </div>
                                                                        </div>
                                                                        })
                }

{/* End All Task List */}
                                                                </div>
                                                                <div className="tab-pane" id="pending_tasks"></div>
                                                                <div className="tab-pane" id="completed_tasks"></div>
                                                            </div>
                                                        </div>
                                                    </div>


                                            }

                                        </div>
                                    </div>
                                </div>

                                <Modal
                                    show={show}
                                    onHide={() => setShow(false)}
                                    dialogClassName="modal-90w"
                                    style={{ margin: "50px" }}
                                    aria-labelledby="example-custom-modal-styling-title"
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="example-custom-modal-styling-title">
                                            Emplooye Profile
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form>
                                            <div className="row">
                                                <div className="col-md-12">

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>First Name</label>
                                                                <input type="text" className="form-control" value="John" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Last Name</label>
                                                                <input type="text" className="form-control" value="Doe" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Birth Date</label>
                                                                <div className="cal-icon">
                                                                    <input className="form-control datetimepicker" type="text" value="05/06/1985" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Gender</label>
                                                                <select className="select form-control">
                                                                    <option value="male selected">Male</option>
                                                                    <option value="female">Female</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Address</label>
                                                        <input type="text" className="form-control" value="4487 Snowbird Lane" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>State</label>
                                                        <input type="text" className="form-control" value="New York" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Country</label>
                                                        <input type="text" className="form-control" value="United States" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Pin Code</label>
                                                        <input type="text" className="form-control" value="10523" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Phone Number</label>
                                                        <input type="text" className="form-control" value="631-889-3206" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Department <span className="text-danger">*</span></label>
                                                        <select className="select">
                                                            <option>Select Department</option>
                                                            <option>Web Development</option>
                                                            <option>IT Management</option>
                                                            <option>Marketing</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Designation <span className="text-danger">*</span></label>
                                                        <select className="select">
                                                            <option>Select Designation</option>
                                                            <option>Web Designer</option>
                                                            <option>Web Developer</option>
                                                            <option>Android Developer</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Reports To <span className="text-danger">*</span></label>
                                                        <select className="select">
                                                            <option>-</option>
                                                            <option>Wilmer Deluna</option>
                                                            <option>Lesley Grauer</option>
                                                            <option>Jeffery Lalor</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="submit-section">
                                                <button className="btn btn-primary submit-btn">Submit</button>
                                            </div>
                                        </form>
                                    </Modal.Body>
                                </Modal>

                            </div>
                            {/* <!-- /Page Content --> */}

                        </div>


                    </TimeTrackerStyling>
                </div>
            </div>





        </div>
    )
}



export default User;
