import React from 'react';

function Music(props){
    return(
        <div className='music'>


<div className="status-bar">
                <span>Apple Ipod</span>
                <img className="battery" alt="Battery" src="https://cdn-icons-png.flaticon.com/128/1436/1436390.png"/>
            </div>

        <div className='menu-block'>
            <h3 id='heading'>MUSIC</h3>
            <ul id='menu-list'>
            <li id='allsongs' className='item'> All songs</li>
                <li id='album' className='item'> Albums</li>
                <li id='artists' className='item'> Artists</li>
            
            </ul>
            
        </div>

        </div>
    )


}

export default Music;