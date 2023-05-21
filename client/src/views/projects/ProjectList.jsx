import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ManOutlined from '@mui/icons-material/ManOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import axios from 'axios';

const ProjectList = () => {
	
	const [show ,setShow]=useState(false)
	

	const [data, setData]=useState([]);


	useEffect(() => {

	  async function getProject() {
		try {
		  const response = await axios.get("https://vast-red-crocodile-boot.cyclic.app/api/user/641c262b809f6481d552a020/projects");
		  const resdata = response.data
		  console.log("projectlist",data);
		  setData(resdata)
			
		} catch (error) {
		  console.error(error);
		}
	  }
	getProject()
  
	}, [])




	const showPriority=(()=>{
		setShow(!show)
	})





  return (
    <div className="page-wrapper">
			
				{/* <!-- Page Content --> */}
                <div className="content container-fluid">
			
					{/* <!-- Page Header --> */}
					<div className="page-header">
						<div className="row align-items-center">
							<div className="col">
								<h3 className="page-title">Projects</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
									<li className="breadcrumb-item active">Projects</li>
								</ul>
							</div>
							<div className="col-auto float-right ml-auto">
								<a href="#" className="btn add-btn" data-toggle="modal" data-target="#create_project"><ChatIcon/> Chat</a>
								
                                <div className="view-icons">
									
									<Link to="/project" className="grid-view btn btn-link"><ManOutlined/></Link>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /Page Header -->
					
					<!-- Search Filter --> */}
					<div className="row filter-row">
						<div className="col-sm-6 col-md-3">  
							<div className="form-group form-focus">
								<input type="text" className="form-control floating"/>
								<label className="focus-label">Project Name</label>
							</div>
						</div>
						<div className="col-sm-6 col-md-3">  
							<div className="form-group form-focus">
								<input type="text" className="form-control floating"/>
								<label className="focus-label">Employee Name</label>
							</div>
						</div>
						<div className="col-sm-6 col-md-3"> 
							<div className="form-group form-focus select-focus">
								<select className="select floating"> 
									<option>Select Roll</option>
									<option>Web Developer</option>
									<option>Web Designer</option>
									<option>Android Developer</option>
									<option>Ios Developer</option>
								</select>
								<label className="focus-label">Role</label>
							</div>
						</div>
						<div className="col-sm-6 col-md-3">  
							<a href="#" className="btn btn-success btn-block"> Search </a>  
						</div>     
                    </div>
					{/* <!-- /Search Filter --> */}
					
					

<div className="row">
						<div className="col-md-12">
							<div className="table-responsive">
								<table className="table table-striped custom-table datatable">
									<thead>
										<tr>
											<th>Project</th>
											<th>Project Id</th>
											<th>Employee</th>
											<th>Start Date</th>
											<th>Deadline</th>
											<th>Priority</th>
											
										
										</tr>
									</thead>
									<tbody>

									{
					
					data?.map((item,_id)=>{
					
					return  	<tr>
					<td>
						<a href="project-view.html">{item.projectName}</a>
					</td>
					<td>{item._id}</td>
					
					<td>
						<ul className="team-members text-nowrap">
							<li>
								<a href="#" title="Sachin Kumar" data-toggle="tooltip"><img alt="" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" /></a>
							</li>
						</ul>
					</td>
					<td>{item.startTime} </td>
					<td>{item.endTime} </td>
					<td>
					{item.priority} 
					</td>
					
				
				</tr>

					})
				}

										
									
									</tbody>
								</table>
							</div>
						</div>
					</div>	
					
                </div>
				
				
				
            </div>
  )
}

export default ProjectList;