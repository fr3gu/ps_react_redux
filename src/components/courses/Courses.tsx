/// <reference path="../../Contracts.d.ts" />

import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import * as redux from "redux";
import { Dispatch } from "redux";
import * as CourseActions from "../../actions/CourseActions";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

interface ICoursesState {
    courses: ICourse[];
}

interface ICoursesProps { }

interface IConnectedState {
    courses: ICourse[];
}

interface IConnectedDispatch {
    deleteCourse: (id: string) => void;
}

class CoursesComponent extends React.Component<IConnectedState & IConnectedDispatch & ICoursesProps, ICoursesState> {

    constructor(props: IConnectedState & IConnectedDispatch & ICoursesProps, context: any) {
        super(props, context);

        var self = this;

        self.state = {
            courses: []
        };
    }

    onClickDelete(id: string, event: Event) {
        event.preventDefault();
        var self = this;
        self.props.deleteCourse(id);

    }

    render() {
        var self = this;

        return (
            <div>
                <h1>Courses</h1>
                <Link to="/course" className="btn btn-primary">Add course</Link>
                <CourseList courses={self.props.courses} />
            </div>
        );
    }
}

const mapStateToProps = (state: ICoursesState, _ownProps: ICoursesProps): IConnectedState => ({
    courses: state.courses
});

/// ignore
const mapDispatchToProps = (dispatch: Dispatch<ICourseActionData, any>): IConnectedDispatch => ({
    deleteCourse: (id: string) => {
        dispatch(CourseActions.deleteCourse(id));
    },
});

export const Courses: React.ComponentClass<ICoursesProps> = connect(mapStateToProps, mapDispatchToProps)(CoursesComponent);