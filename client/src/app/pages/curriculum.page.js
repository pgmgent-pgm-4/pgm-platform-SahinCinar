import React, { Component } from "react";

class CurriculumPage extends Component {
    constructor() {
        super();
        this.state = {
            showCloud: true,
            showInteractive: false
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(type, button) {
        switch (type) {
        case "showCloud":
            if(this.state.showInteractive === true){
                this.setState({ showCloud: !this.state.showCloud });
                this.setState({ showInteractive: !this.state.showInteractive });
            }
            break;
        case "showInteractive":
            if(this.state.showCloud === true){                
                this.setState({ showCloud: !this.state.showCloud });
                this.setState({ showInteractive: !this.state.showInteractive });
            }
            break;
        default:
            break;
        }
    }

  render() {
    const { showCloud, showInteractive } = this.state;
    return (
        <div class="mx-auto p-center align-middle">
             <div class="container-fluid py-5 text-center">
            <h1 class="text-purple-500">Graduaat Programmeren</h1>
            <span class="h4"><span onClick={() => this.hideComponent("showCloud", 1)} class={showCloud ? "text-pink-500 text-decoration-underline" : "text-pink-500"}>Cloud Application Development</span> of <span onClick={() => this.hideComponent("showInteractive", 2)} class={showInteractive ? "text-orange-500 text-decoration-underline" : "text-orange-500"}>Interactive Media Develoment</span></span>
          {showCloud && (
           
            <div class="container p-4" >
            <div class="m-1 row">
                <div class="p-1 bg-purple-500 text-white col">
                2022-2023
                </div>
                <div class="p-1 bg-purple-500 text-white col ms-1">
                2023-2024
                </div>
            </div>
            <div class="m-1 row">
            <div class="p-2 bg-purple-500 text-white col">
                Jaar 1
                </div>
                <div class="p-2 bg-purple-500 text-white col ms-1">
                Jaar 2
                </div>
            </div>
            <div class="row m-1">
                    <div class="p-1 bg-purple-500 text-white col me-1">
                        Semester 1
                    </div>
                    <div class="p-1 bg-purple-500 text-white col me-1">
                        Semester 2
                    </div>
                    <div class="p-1 bg-purple-500 text-white col me-1">
                        Semester 3
                    </div>
                    <div class="p-1 bg-purple-500 text-white col">
                        Semester 4
                    </div>
                </div>
                <div class="row m-1">
                    <div class="bg-purple-400 text-white col me-1">
                        Periode 1
                    </div>
                    <div class="bg-purple-400 text-white col me-1">
                        Periode 2
                    </div>
                    <div class="bg-purple-400 text-white col me-1">
                        Periode 3
                    </div>
                    <div class="bg-purple-400 text-white col me-1">
                        Periode 4
                    </div>
                    <div class="bg-purple-400 text-white col me-1">
                        Periode 5
                    </div>
                    <div class="bg-purple-400 text-white col me-1">
                        Periode 6
                    </div>
                    <div class="bg-purple-400 text-white col me-1">
                        Periode 7
                    </div>
                    <div class="bg-purple-400 text-white col ">
                        Periode 8
                    </div>
                </div>
                <div class="row m-1">
                    <div class="bg-cyan-100 p-4 text-white col ">
                    
                    </div>
                    <div class="bg-cyan-100 p-4 text-white col me-1">
                        
                    </div>
                    <div class="bg-blue-500 p-4 text-white col me-1">
                        <span>IT Communication</span>
                    </div>
                    <div class="bg-blue-500 p-4 text-white col me-1">
                        <span>IT Business</span>
                    </div>
                    <div class="bg-blue-500 p-4 text-white col me-1">
                        <span>Digital Marketing</span>
                    </div>
                    <div class="bg-cyan-100 p-4 text-white col">
                    </div>
                    <div class="bg-cyan-100 p-4 text-white col me-1">
                    </div>
                    <div class="bg-blue-500 p-4 text-white col ">
                        IT Entrepreneurship
                    </div>
                </div>
                <div class="row m-1">
                    <div class="bg-green-500 p-4 text-white col me-1">
                        Computer systems
                    </div>
                    <div class="bg-green-100 p-4 text-white col">
                        
                    </div>
                    <div class="bg-green-100 p-4 text-white col">
                    </div>
                    <div class="bg-green-100 p-4 text-white col me-1">
                    </div>
                    <div class="bg-green-500 p-4 text-white col me-1">
                        <span>Data Management</span>
                    </div>
                    <div class="bg-green-500 p-4 text-white col me-1">
                        <span>Content Management</span>
                    </div>
                    <div class="bg-green-500 p-4 text-white col me-1">
                        <span>IT Exploration</span>
                    </div>
                    <div class="bg-green-100 p-4 text-white col ">
                    </div>
                </div>
                <div class="row m-1">
                    <div class="bg-orange-500 p-4 text-white col me-1">
                        <span>Web Design</span>
                    </div>
                    <div class="bg-orange-500 p-4 text-white col me-1">
                        <span>User Interface Design</span>
                    </div>
                    <div class="bg-orange-500 p-4 text-white col me-1">
                        <span>User Interface Prototyping</span>
                    </div>
                    <div class="bg-orange-100 p-4 text-white col">
                    </div>
                    <div class="bg-orange-100 p-4 text-white col">
                    </div>
                    <div class="bg-orange-100 p-4 text-white col">
                    </div>
                    <div class="bg-orange-100 p-4 text-white col">
                    </div>
                    <div class="bg-orange-100 p-4 text-white col">
                    </div>
                </div>
                <div class="row m-1">
                    <div class="bg-pink-500 p-4 text-white col me-1">
                        <span>Programming 1</span>
                    </div>
                    <div class="bg-pink-500 p-4 text-white col me-1">
                        <span>Programming 2</span>
                    </div>
                    <div class="bg-pink-500 p-4 text-white col me-1">
                        <span>Programming 3</span>
                    </div>
                    <div class="bg-pink-500 p-4 text-white col me-1">
                        <span>Programming 4</span>
                    </div>
                    <div class="bg-pink-500 p-4 text-white col me-1">
                        <span>Programming 5</span>
                    </div>
                    <div class="bg-pink-500 p-4 text-white col me-1">
                        <span>Programming 6</span>
                    </div>
                    <div class="bg-pink-100 p-4 text-white col">
                    </div>
                    <div class="bg-pink-100 p-4 text-white col">
                    </div>
                </div>
                <div class="row m-1">
                   <div class="bg-red-100 p-4 text-white col">
                   </div>
                   <div class="bg-red-500 p-4 text-white col">
                       <span>@Work 1</span>
                   </div>
                   <div class="bg-red-100 p-4 text-white col me-1">
                   </div>
                   <div class="bg-red-500 p-4 text-white col ">
                    <span>@Work 2</span>
                   </div>
                   <div class="bg-red-100 p-4 text-white col ">
                   </div>
                   <div class="bg-red-500 p-4 text-white col ">
                    <span>@Work 3</span>
                   </div>
                   <div class="bg-red-500 p-4 text-white col">
                   <span>@Work 4</span>
                   </div>
                   <div class="bg-red-500 p-4 text-white col">
                   <span>@Work 5</span>
                   </div>
                   </div>
            </div>
          )}
          {showInteractive && (
           <div class="container p-4" >
           <div class="m-1 row">
               <div class="p-1 bg-purple-500 text-white col">
               2022-2023
               </div>
               <div class="p-1 bg-purple-500 text-white col ms-1">
               2023-2024
               </div>
           </div>
           <div class="m-1 row">
           <div class="p-2 bg-purple-500 text-white col">
               Jaar 1
               </div>
               <div class="p-2 bg-purple-500 text-white col ms-1">
               Jaar 2
               </div>
           </div>
           <div class="row m-1">
                   <div class="p-1 bg-purple-500 text-white col me-1">
                       Semester 1
                   </div>
                   <div class="p-1 bg-purple-500 text-white col me-1">
                       Semester 2
                   </div>
                   <div class="p-1 bg-purple-500 text-white col me-1">
                       Semester 3
                   </div>
                   <div class="p-1 bg-purple-500 text-white col">
                       Semester 4
                   </div>
               </div>
               <div class="row m-1">
                   <div class="bg-purple-400 text-white col me-1">
                       Periode 1
                   </div>
                   <div class="bg-purple-400 text-white col me-1">
                       Periode 2
                   </div>
                   <div class="bg-purple-400 text-white col me-1">
                       Periode 3
                   </div>
                   <div class="bg-purple-400 text-white col me-1">
                       Periode 4
                   </div>
                   <div class="bg-purple-400 text-white col me-1">
                       Periode 5
                   </div>
                   <div class="bg-purple-400 text-white col me-1">
                       Periode 6
                   </div>
                   <div class="bg-purple-400 text-white col me-1">
                       Periode 7
                   </div>
                   <div class="bg-purple-400 text-white col ">
                       Periode 8
                   </div>
               </div>
               <div class="row m-1">
                   <div class="bg-cyan-100 p-4 text-white col ">
                   
                   </div>
                   <div class="bg-cyan-100 p-4 text-white col me-1">
                       
                   </div>
                   <div class="bg-blue-500 p-4 text-white col me-1">
                       <span>IT Communication</span>
                   </div>
                   <div class="bg-blue-500 p-4 text-white col me-1">
                       <span>IT Business</span>
                   </div>
                   <div class="bg-blue-500 p-4 text-white col me-1">
                       <span>Digital Marketing</span>
                   </div>
                   <div class="bg-cyan-100 p-4 text-white col">
                   </div>
                   <div class="bg-cyan-100 p-4 text-white col me-1">
                   </div>
                   <div class="bg-blue-500 p-4 text-white col ">
                       IT Entrepreneurship
                   </div>
               </div>
               <div class="row m-1">
                   <div class="bg-green-500 p-4 text-white col me-1">
                       Computer systems
                   </div>
                   <div class="bg-green-100 p-4 text-white col">
                       
                   </div>
                   <div class="bg-green-100 p-4 text-white col">
                   </div>
                   <div class="bg-green-100 p-4 text-white col me-1">
                   </div>
                   <div class="bg-green-500 p-4 text-white col me-1">
                       <span>Data Management</span>
                   </div>
                   <div class="bg-green-500 p-4 text-white col me-1">
                       <span>Content Management</span>
                   </div>
                   <div class="bg-green-500 p-4 text-white col me-1">
                       <span>IT Exploration</span>
                   </div>
                   <div class="bg-green-100 p-4 text-white col ">
                   </div>
               </div>
               <div class="row m-1">
                   <div class="bg-orange-500 p-4 text-white col me-1">
                       <span>Web Design</span>
                   </div>
                   <div class="bg-orange-500 p-4 text-white col me-1">
                       <span>User Interface Design</span>
                   </div>
                   <div class="bg-orange-500 p-4 text-white col me-1">
                       <span>User Interface Prototyping</span>
                   </div>
                   <div class="bg-orange-500 p-4 text-white col me-1">
                    <span>Interactive Visual Media</span>
                   </div>
                   <div class="bg-orange-500 p-4 text-white col me-1">
                    <span>Interactive Visual Reality</span>
                   </div>
                   <div class="bg-orange-500 p-4 text-white col me-1">
                    <span>Interactive Augmented Reality</span>
                   </div>
                   <div class="bg-orange-100 p-4 text-white col">
                   </div>
                   <div class="bg-orange-100 p-4 text-white col">
                   </div>
               </div>
               <div class="row m-1">
                   <div class="bg-pink-500 p-4 text-white col me-1">
                       <span>Programming 1</span>
                   </div>
                   <div class="bg-pink-500 p-4 text-white col me-1">
                       <span>Programming 2</span>
                   </div>
                   <div class="bg-pink-500 p-4 text-white col me-1">
                       <span>Programming 3</span>
                   </div>
                   <div class="bg-pink-100 p-4 text-white col ">
                   </div>
                   <div class="bg-pink-100 p-4 text-white col ">
                   </div>
                   <div class="bg-pink-100 p-4 text-white col ">
                   </div>
                   <div class="bg-pink-100 p-4 text-white col">
                   </div>
                   <div class="bg-pink-100 p-4 text-white col">
                   </div>
               </div>
                              <div class="row m-1">
                   <div class="bg-red-100 p-4 text-white col">
                   </div>
                   <div class="bg-red-500 p-4 text-white col">
                       <span>@Work 1</span>
                   </div>
                   <div class="bg-red-100 p-4 text-white col me-1">
                   </div>
                   <div class="bg-red-500 p-4 text-white col ">
                    <span>@Work 2</span>
                   </div>
                   <div class="bg-red-100 p-4 text-white col ">
                   </div>
                   <div class="bg-red-500 p-4 text-white col ">
                    <span>@Work 3</span>
                   </div>
                   <div class="bg-red-500 p-4 text-white col">
                   <span>@Work 4</span>
                   </div>
                   <div class="bg-red-500 p-4 text-white col">
                   <span>@Work 5</span>
                   
                   </div>
               </div>
           </div>
          )}
        
         
      </div>
      </div>
    );
  }
}

export default CurriculumPage;