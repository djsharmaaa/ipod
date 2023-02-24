import React from "react";


function Menu(props){
    return(
        <div className="menu">

            <div className="status-bar">
                <span>Apple Ipod</span>
                <img className="battery" alt="Battery" src="https://cdn-icons-png.flaticon.com/128/1436/1436390.png"/>
            </div>

            <div className="menu-block">
                <h3 id="heading">MENU</h3>
                    <ul id="menu-list">
                        <li id="cover" className="item"> CoverFlow </li>
                        <li id="music" className="item"> Music </li>
                        <li id="games" className="item"> Games </li>
                        <li id="settings" className="item"> Settings </li>
                    </ul>

            </div>

        </div>
    )
}

export default Menu;