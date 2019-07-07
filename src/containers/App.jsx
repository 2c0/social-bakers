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

  sideBarContent = () => {
    return <div>test</div>
  }


  render() {

    return (
      <Sidebar
        sidebar={<SideBarContent />}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={
          { root: { background: "#737880" },
            sidebar: {background: "#f9f9fa"}
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