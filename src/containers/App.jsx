import React from "react";
import Sidebar from "react-sidebar";
import SideBarContent from "../components/SideBarContent";

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

    return (
      <Sidebar
        sidebar={<SideBarContent 
                    onClose={()=> this.onSetSideBarClose()} 
                    isOpen={this.state.sidebarOpen}
                    />}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={
          { root: { background: "#e4e5e6" },
            sidebar: {background: "#f9f9fa", overflow: "initial"}
           }
        }
        pullRight
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar >
    );
  }
}

export default App;