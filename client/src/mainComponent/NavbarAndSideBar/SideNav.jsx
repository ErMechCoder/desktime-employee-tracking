import React from 'react'
import { useNavigate } from 'react-router-dom'
import i1 from '../../assets/svg/MainComponentSVG/time.svg'
import i2 from '../../assets/svg/MainComponentSVG/calendar.svg'
import i3 from '../../assets/svg/MainComponentSVG/dashboard.svg'
import i4 from '../../assets/svg/MainComponentSVG/reports.svg'
import i5 from '../../assets/svg/MainComponentSVG/projects.svg'
import i6 from '../../assets/svg/MainComponentSVG/team.svg'
import i7 from '../../assets/svg/MainComponentSVG/clients.svg'
import i8 from '../../assets/svg/MainComponentSVG/tags.svg'
import i9 from '../../assets/svg/MainComponentSVG/settings.svg'
import i10 from '../../assets/svg/MainComponentSVG/dropdown.svg'
import styled from 'styled-components'

const MainComponentAppStylingPart = styled.div`
.MainComponentAppMainSideNav{
    margin-top:50px;
    border-top:1px solid #cacaca; 
    border-right:1px solid #cacaca; 
    width:fit-content;
    background:white;
    height:100vh;   
    position:fixed;
    z-index:10000;
}
.MainComponentAppSubMainSideNav{
    display:grid;
    grid-template-columns:1fr;
    width:fit-content;
    height:fit-content;
}
.MainComponentSubMenuNavMainDiv1{
    width:190px;
    display:flex;
    padding:15px;
    gap:20px;
    align-items:center;
    background:white;
}
.MainComponentSubMenuNavMainDiv{
    width:190px;
    display:flex;
    padding:15px;
    gap:20px;
    align-items:center;
    background:white;/* default color */

    /* "to left" / "to right" - affects initial color */
    background: linear-gradient(to left, white 50%, #e4eaee 50%) right;
    background-size: 200%;
    transition: .3s ease-out;
}
.MainComponentSubMenuNavMainDiv:hover{
    background-position: left;
}
.MainComponentImgAVG{
    height:20px;
    color:#a1a1a1;
}
.MainComponentMenuHeading{
    color:black;
    font-size:14px;
}
.MainComponentMenuHeading1{
    color:#a1a1a1;
    font-size:12px;
    font-weight:500
}

${'' /* Toggled SideBar */}
.MainComponentSubMenuNavMainDivToggle{
    width:fit-content;
    display:flex;
    padding:15px 20px;
    gap:20px;
    align-items:center;
    background:white;/* default color */

    /* "to left" / "to right" - affects initial color */
    background: linear-gradient(to left, white 50%, #e4eaee 50%) right;
    background-size: 200%;
    transition: .3s ease-out;
    position:relative;
}
.MainComponentSubMenuNavMainDivToggle:hover{
    background-position: left;
}
`

const SideNav = ({ props }) => {
    const navigate = useNavigate()
    return (
        <MainComponentAppStylingPart>
            <div>
                {
                    props ? (<div className='MainComponentAppMainSideNav'>
                        <div className='MainComponentAppSubMainSideNav'>
                            <div className='MainComponentSubMenuNavMainDiv' onClick={()=>navigate('/employee/timetracker')}>
                                <img src={i1} className='MainComponentImgAVG' alt='menu1' />
                                <p className='MainComponentMenuHeading'>TASK TRACKER</p>
                            </div>
                            <div className='MainComponentSubMenuNavMainDiv' onClick={()=>navigate('/employee/profile')}>
                                <img src={i2} className='MainComponentImgAVG' alt='menu1' />
                                <p className='MainComponentMenuHeading'>PROFILE</p>
                            </div>
                            <div className='MainComponentSubMenuNavMainDiv1'>
                                <p className='MainComponentMenuHeading1'>ANALYZE</p>
                            </div>
                            <div className='MainComponentSubMenuNavMainDiv' onClick={()=>navigate('/employee/dashboard')}>
                                <img src={i3} className='MainComponentImgAVG' alt='menu1' />
                                <p className='MainComponentMenuHeading'>DASHBOARD</p>
                            </div>
                            {/* <div className='MainComponentSubMenuNavMainDiv' onClick={()=>navigate('/employee/reports')}>
                                <img src={i4} className='MainComponentImgAVG' alt='menu1' />
                                <p className='MainComponentMenuHeading'>REPORTS</p>
                                <img src={i10} style={{ height: '12px', color: '#e4eaee', marginLeft: '40px' }} alt='menu1' />
                            </div> */}
                            <div className='MainComponentSubMenuNavMainDiv1'>
                                <p className='MainComponentMenuHeading1'>MANAGE</p>
                            </div>
                           
                            <div className='MainComponentSubMenuNavMainDiv' onClick={()=>navigate('/employee/chat/login')}>
                                <img src={i6} className='MainComponentImgAVG' alt='menu1' />
                                <p className='MainComponentMenuHeading'>Chat</p>
                            </div>
                            <div className='MainComponentSubMenuNavMainDiv' onClick={()=>navigate('/employee/projecttask')}>
                                <img src={i5} className='MainComponentImgAVG' alt='menu1' />
                                <p className='MainComponentMenuHeading'>PROJECTS</p>
                            </div>
                            <div className='MainComponentSubMenuNavMainDiv' onClick={()=>navigate('/employee/projectboard')}>
                                <img src={i7} className='MainComponentImgAVG' alt='menu1' />
                                <p className='MainComponentMenuHeading'>PROJECTS BOARD</p>
                            </div>
                            <div className='MainComponentSubMenuNavMainDiv' onClick={()=>navigate('/employee/credentiallist')}>
                                <img src={i8} className='MainComponentImgAVG' alt='menu1' />
                                <p className='MainComponentMenuHeading'>Credential list</p>
                            </div>
                            <div className='MainComponentSubMenuNavMainDiv' onClick={()=>navigate('/employee/admintask')}>
                                <img src={i9} className='MainComponentImgAVG' alt='menu1' />
                                <p className='MainComponentMenuHeading'>Assign Task</p>
                            </div>
                        </div>
                    </div>) : (<div className='MainComponentAppMainSideNav'>
                        <div className='MainComponentAppSubMainSideNav'>
                            <div className='MainComponentSubMenuNavMainDivToggle' onClick={()=>navigate('/employee/')}>
                                <img src={i1} className='MainComponentImgAVG' alt='menu1' />
                            </div>
                            {/* <div className='MainComponentSubMenuNavMainDivToggle' onClick={()=>navigate('/employee/calendar')}>
                                <img src={i2} className='MainComponentImgAVG' alt='menu1' />
                            </div> */}
                            <div className='MainComponentSubMenuNavMainDivToggle' onClick={()=>navigate('/employee/dashboard')}>
                                <img src={i3} className='MainComponentImgAVG' alt='menu1' />
                            </div>
                            <div className='MainComponentSubMenuNavMainDivToggle' onClick={()=>navigate('/employee/reports')}>
                                <img src={i4} className='MainComponentImgAVG' alt='menu1' />
                            </div>
                            <div className='MainComponentSubMenuNavMainDivToggle' onClick={()=>navigate('/employee/projects')}>
                                <img src={i5} className='MainComponentImgAVG' alt='menu1' />
                            </div>
                            <div className='MainComponentSubMenuNavMainDivToggle' onClick={()=>navigate('/employee/team')}>
                                <img src={i6} className='MainComponentImgAVG' alt='menu1' />
                            </div>
                            <div className='MainComponentSubMenuNavMainDivToggle' onClick={()=>navigate('/employee/clients')}>
                                <img src={i7} className='MainComponentImgAVG' alt='menu1' />
                            </div>
                            <div className='MainComponentSubMenuNavMainDivToggle' onClick={()=>navigate('/employee/tags')}>
                                <img src={i8} className='MainComponentImgAVG' alt='menu1' />
                            </div>
                            <div className='MainComponentSubMenuNavMainDivToggle' onClick={()=>navigate('/employee/setting')}>
                                <img src={i9} className='MainComponentImgAVG' alt='menu1' />
                            </div>
                        </div>
                    </div>)
                }
            </div>   
        </MainComponentAppStylingPart>
    )
}

export default SideNav