import React from "react";
import Sidebar from "react-sidebar";
import SideBarContent from "../components/SideBarContent";

import  './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  onSetSideBarClose() {
    this.setState({ sidebarOpen: false });
  }


  render() {

    const sideBarStyles = {
      root: { background: "#e4e5e6" },
      sidebar: { background: "#f9f9fa", overflow: "initial" }

    }

    return (
      <Sidebar
        sidebar={<SideBarContent
          onClose={() => this.onSetSideBarClose()}
          isOpen={this.state.sidebarOpen}
        />}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={sideBarStyles}
        pullRight
      >
        <div className="main-section-wrap">
          <p>CLICK ME :-)</p>
            <button className="main-btn" onClick={() => this.onSetSidebarOpen(true)}>
              Open
          </button>
        </div>

      </Sidebar >
    );
  }
}

export default App;