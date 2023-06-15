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
      </div>
      </div>
    );
  }
}

export default CurriculumPage;