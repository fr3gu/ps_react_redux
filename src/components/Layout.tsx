import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Header } from "./common/Header"
import Home from "./home/Home";
import { Courses } from "./courses/Courses";
import About from "./about/About";
import NoMatch from "./NoMatch";

import "./Layout.less";
import { ManageCourse } from "./courses/ManageCourse";
import { connect } from "react-redux";

class LayoutComponent extends React.Component<any> {
    render() {
        const self = this;
    
        return (
            <div className="container-fluid">
                <HashRouter>
                    <div>
                        <Header loading={self.props.loading} />
                        <Switch>
                            <Route name="home" path="/" exact={true} component={Home} />
                            <Route name="about" path="/about" component={About} />
                            <Route name="courses" path="/courses" exact component={Courses} />
                            <Route name="courses" path="/course" exact component={ManageCourse} />
                            <Route name="courses" path="/course/:id" exact component={ManageCourse} />
                            <Route name="notfound" path="*" component={NoMatch} />
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

function mapStateToProps(state: any, _ownProps: any) {
    return {
        loading: state.ajaxCallsInProgress > 0
    }
}

export default connect(mapStateToProps)(LayoutComponent);
