
import { React ,useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
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




const ProjectTask = () => {
    // const [myValue, setMyValue] = useState('');
    const [project, setProject]=useState([]);
    
    const [toggle, setToggle] = useState(true);

    const toggleNavbar = (x) => {
        setToggle(x)
    }

      useEffect(() => {
        async function getProject() {
          try {
            const response = await axios.get("http://localhost:8000/api/user/642c167b38919cbbf7f40c75/projects");
            const data = response.data
            setProject(data)
              console.log(data);
          } catch (error) {
            console.error(error);
          }
        }
      getProject()
    
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
{/* <!-- Page Content --> */}
<div className="content container-fluid">

    {/* <!-- Page Header --> */}
    <div className="page-header">
        <div className="row align-items-center">
            <div className="col">
                <h3 className="page-title">Project Details</h3>
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                    <li className="breadcrumb-item active">Project</li>
                </ul>
            </div>
            <div className="col-auto float-right ml-auto">

                <a href="/project/taskboard" className="btn btn-white float-right m-r-10" data-toggle="tooltip" title="Task Board">manubar</a>
            </div>
        </div>
    </div>
    {/* <!-- /Page Header --> */}


    <div>data: {JSON.stringify(project)}</div>

  {
    project?.map((item)=>{
        return  <div className="row" key={item._id}>
        <div className="col-lg-8 col-xl-9">
            <div className="card">
                <div className="card-body">
                    <div className="project-title">
                        <h5 className="card-title">projectName "====="  {item.title}</h5>
                        <small className="block text-ellipsis m-b-15"><span className="text-xs">2</span> <span className="text-muted">open tasks, </span><span className="text-xs">5</span> <span className="text-muted">tasks completed</span></small>
                    </div>
               <p>projectDescription  "====="   {item.title}</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title m-b-20">Uploaded image files</h5>
                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                            <div className="uploaded-box">
                                <div className="uploaded-img">
                                    <img src="https://images.pexels.com/photos/323645/pexels-photo-323645.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid" alt="" />
                                </div>
                                <div className="uploaded-img-name">
                                    demo.png
                                </div>
                            </div>
                        </div>
                   
                        
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title m-b-20">Uploaded files</h5>
                    <ul className="files-list">
                        <li>
                            <div className="files-cont">
                                <div className="file-type">
                                    <span className="files-icon"><i className="fa fa-file-pdf-o"></i></span>
                                </div>
                                <div className="files-info">
                                    <span className="file-name text-ellipsis"><a href="#">AHA Selfcare Mobile Application Test-Cases.xls</a></span>
                                    <span className="file-author"><a href="#">John Doe</a></span> <span className="file-date">May 31st at 6:53 PM</span>
                                    <div className="file-size">Size: 14.8Mb</div>
                                </div>
                                <ul className="files-action">
                                    <li className="dropdown dropdown-action">
                                        <a href="" className="dropdown-toggle btn btn-link" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_horiz</i></a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Download</a>
                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#share_files">Share</a>
                                            <a className="dropdown-item" href="#">Delete</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                     
                    </ul>
                </div>
            </div>
         
        </div>
        <div className="col-lg-4 col-xl-3">
            <div className="card">
                <div className="card-body">
                    <h6 className="card-title m-b-15">Project details</h6>
                    <table className="table table-striped table-border">
                        <tbody>
                            
                            <tr>
                                <td>Total Hrs/days:</td>
                                <td className="text-right">{item.timeDiff}</td>
                            </tr>
                            <tr>
                                <td>Created:</td>
                                <td className="text-right">{item.startTime}</td>
                            </tr>
                            <tr>
                                <td>Deadline:</td>
                                <td className="text-right">{item.endTime}</td>
                            </tr>
                            <tr>
                                <td>Priority:</td>
                                
                                <td className="text-right">{item.priority} </td>
                            </tr>
                           
                        </tbody>
                    </table>
                    <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                    <div className="progress progress-xs mb-0">
                        <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="40%" style={{width: "40%"}}></div>
                    </div>
                </div>
            </div>
            
            <div className="card project-user">
                <div className="card-body">
                    <h6 className="card-title m-b-20">
                        Assigned Enginner
                       
                    </h6>
                    <ul className="list-box">
                        <li>
                
                                <div className="list-item">
                                    
                   
                                    <div className="list-body">
                                    
                                        <span className="message-author">{item.addEngineer}</span>
                                        <div className="clearfix"></div>
                                        
                                    </div>
                                </div>
                         
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
    })
  }

   
</div>


</div>
                 


                </TimeTrackerStyling>
            </div>
        </div>





    </div>

     
    )
}

export default ProjectTask;



   
