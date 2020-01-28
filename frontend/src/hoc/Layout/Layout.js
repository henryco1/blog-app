import React, { Component } from "react";

import Aux from "../Aux/Aux";
import Toolbar from "../../components/UI/Toolbar/Toolbar";

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar/>
                <p> Sidebar </p>
                <main>{this.props.children}</main>
            </Aux>
        )
    }
}

export default Layout;