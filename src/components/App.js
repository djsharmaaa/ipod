import React from "react";
import ZingTouch from "zingtouch";
import Menu from "./Menu";
import Cover from "./Cover";
import Music from "./Music";
import Games  from "./Games";
import Settings from "./Settings";
import Albums from "./Albums";
import Artists  from "./Artists";
import AllSongs from "./AllSongs";

class App extends React.Component {

    constructor(){
        super(); 
        this.state = {
            component: "menu",
             active: "cover",
    
        }
    }

  
    //opne menu with mmenu button

    openMenu = () => {
        if (this.state.component === "menu"){
            this.setState({
                component: ""
            })
        }
      
         else if (this.state.component !== "menu")  {
          this.setState({
            component: "menu"
          });
        }
        
      };


      //open particular option by mid button

      openOnClick = () => {
        if(this.state.component === ""){
            this.setState({
                component:""
            })
        }
          else
          this.setState({
            component: this.state.active,
  
          });

      };

    // roation effect

    handleClick = () =>{
         let context = this;
        let touchArea = document.getElementById("mid");
        let myRegion = new ZingTouch.Region(touchArea);
        myRegion.bind(touchArea, "rotate", function(e){
            let distance = Math.abs(e.detail.distanceFromOrigin)%360;
            if ((distance >= 0 && distance <45) || (distance >= 180 && distance < 225)){
                 context.state.active = "cover";
                if (context.state.component === "menu") {
                  document.getElementById("settings").classList.remove("active");
                  document.getElementById("music").classList.remove("active");
                  document.getElementById("games").classList.remove("active");
                  document.getElementById("cover").classList.add("active");
                  
                  
                } else if (context.state.component === "music" ) {
                  context.state.active = "album";
                    document.getElementById("allsongs").classList.add("active");
                    document.getElementById("artists").classList.remove("active");
                    document.getElementById("album").classList.remove("active");

                  }
            }
            else if ((distance >= 45 && distance < 90) || (distance >= 225 && distance < 270)) {
                context.state.active = "music";
                if (context.state.component === "menu") {
                  document.getElementById("settings").classList.remove("active");
                  document.getElementById("cover").classList.remove("active");
                  document.getElementById("games").classList.remove("active");
                  document.getElementById("music").classList.add("active");
                } else if (context.state.component === "music") {
                  context.state.active = "artists";
                  document.getElementById("allsongs").classList.remove("active");
                  document.getElementById("album").classList.add("active");
                  document.getElementById("artists").classList.remove("active");
                }
              } else if ((distance >= 90 && distance < 135) || (distance >= 270 && distance < 315)) {
                context.state.active = "games";
                if (context.state.component === "menu") {
                  document.getElementById("settings").classList.remove("active");
                  document.getElementById("cover").classList.remove("active");
                  document.getElementById("music").classList.remove("active");
                  document.getElementById("games").classList.add("active");
                } else if (context.state.component === "music") {
                  context.state.active = "allsongs";
                  document.getElementById("artists").classList.add("active");
                  document.getElementById("album").classList.remove("active");
                  document.getElementById("allsongs").classList.remove("active");
                }
              } else if ((distance >= 135 && distance < 180)|| (distance >= 315 && distance < 360)) {
                context.state.active = "settings";
                if (context.state.component === "menu") {
                  document.getElementById("games").classList.remove("active");
                  document.getElementById("cover").classList.remove("active");
                  document.getElementById("music").classList.remove("active");
                  document.getElementById("settings").classList.add("active");
                } else if (context.state.component === "music") {
                  context.state.active = "album";
                  document.getElementById("allsongs").classList.add("active");
                  document.getElementById("artists").classList.remove("active");
                  document.getElementById("album").classList.remove("active");
                }
            }

        });  
    
    };



    render(){
    const { component} = this.state;

        return(
        <div className="App">
        <div className="cover">
                 {component === "menu" && <Menu/>}
                {component === "cover" && <Cover/>}
                {component === "music" && <Music/>}
                {component === "games" && <Games />}
                {component === "settings" && <Settings />}
                {component === "album" && <Albums/>}
                {component === "artists" && <Artists />}
                {component === "allsongs" && <AllSongs />}
                


                </div>
                    {/* compnents controls outer mid inner */}
                     <div id="outer">
                    <div id="mid" onMouseDown={this.handleClick}>
                        <div className="menu-button" onClick={this.openMenu}>
                           MENU
                        </div>

                        <img
                        src="https://cdn-icons-png.flaticon.com/512/2/2147.png"
                        id="prev"
                        alt="Previous"
                        height="16px"
                        width="16px"
                        />
                       
                        <img
                        src="https://cdn-icons-png.flaticon.com/512/4211/4211386.png"
                        id="forword"
                        alt="next"
                        height="16px"
                        width="16px"
                        />
                        <img
                        src="https://cdn-icons-png.flaticon.com/512/7960/7960808.png"
                        id="play-pause"
                        alt="play/pause"
                        height="16px"
                        width="16px"
                        />
                    </div>
                    <div id="inner" onClick={this.openOnClick}>
                        </div>
                </div>
                </div>
        );
    }
}

export default App;
