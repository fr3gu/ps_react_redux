import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Header } from "./common/Header"
import Home from "./home/Home";
import About from "./about/About";
import NoMatch from "./NoMatch";

import "./Layout.less";

export default class Layout extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Switch>
                            <Route name="home" path="/" exact={true} component={Home} />
                            <Route name="about" path="/about" component={About} />
                            <Route name="notfound" path="*" component={NoMatch} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}