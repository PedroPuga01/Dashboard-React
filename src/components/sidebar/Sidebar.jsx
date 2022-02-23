import "./Sidebar.css"
import img from '../../img/index.jpeg'
import React, { useState, useRef, useEffect } from 'react'



const Sidebar = () => {
    // useEffect (() => {
    //     someRef.current.backgroundColor = "red"
    // }, [SidebarOpen])
    const someRef = useRef();
    const [SidebarOpen, setSidebarOpen ] = useState(true)
    return(
        <div  ref={ someRef } className={SidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                { <div className="sidebar__img">
                    <img src={img} alt=""/>
                </div> }
            {<i className="fa fa-times" id="sidebarIcon" onClick={() => setSidebarOpen(!SidebarOpen)}></i> }
            </div>

            <div className="sidebar__menu">
                <div classname="sidebar__link-active_menu_link">
                    <i className="fa fa-home"></i>
                    <div className="pie-foto">
                    <a href="#">Dashboard- Capital Sushi</a>
                    </div>
                </div>
                <h2>Actions</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <a href="#">Pages</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <a href="#">Charts</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <a href="#">Tables</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar