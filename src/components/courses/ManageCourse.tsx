/// <reference path="../../Contracts.d.ts" />

import * as React from "react";
import { Component, ChangeEvent, FormEvent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as redux from "redux";
import { Dispatch } from "redux";
import * as courseActions from "../../actions/CourseActions";
import { CourseForm } from "./CourseForm";
import { CourseErrorData, Course } from "../../Models";
import { RouteComponentProps } from "react-router-dom";
import toastr from "toastr";
import { authorsFormattedForDropdown } from "../../selectors/Selectors";

export interface ICourseParams {
    id: string;
}

export interface IManageCourseState {
    courses: ICourse[];
    course: ICourse;
    errors: ICourseErrorData;
    authors: IAuthor[];
    saving: boolean;
}

export interface IManageCourseProps extends RouteComponentProps<ICourseParams> { }

interface IConnectedState {
    course: ICourse;
    errors: ICourseErrorData;
    authors: IOptionData[];
}

interface IConnectedDispatch {
    saveCourse: (course: ICourse) => Promise<void>;
}

export class ManageCourseComponent extends React.Component<IConnectedState & IConnectedDispatch & IManageCourseProps, IManageCourseState> {

    constructor(props: IConnectedState & IConnectedDispatch & IManageCourseProps, context: any) {
        super(props, context);

        const self = this;

        self.state = {
            courses: Array<ICourse>(),
            course: Object.assign({}, self.props.course),
            errors: new CourseErrorData(),
            authors: Array<IAuthor>(),
            saving: false
        };

        self.updateCourseState = self.updateCourseState.bind(self);
        self.saveCourse = self.saveCourse.bind(self);
    }

    componentWillReceiveProps(nextProps: IConnectedState & IConnectedDispatch & IManageCourseProps) {
        const self = this;
        if (self.props.course.id !== nextProps.course.id) {
            this.setState({ course: Object.assign({}, nextProps.course) });
        }
    }

    updateCourseState(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const self = this;
        const field = event.target.name;
        const updatedCourse = Object.assign({}, self.state.course);
        (updatedCourse as any)[field] = event.target.value;
        self.setState({ course: updatedCourse });

    }

    redirect() {
        const self = this;
        self.setState({ saving: false });
        toastr.success("Course created successfully!");
        self.props.history.push("/courses");
    }

    courseFormIsValid() {
        const self = this;
        let formIsValid = true;
        const errors = new CourseErrorData();

        if (self.state.course.title.length < 5) {
            errors.title = "Title must be at least 5 characters.";
            formIsValid = false;
        }

        self.setState({ errors });

        return formIsValid;
    }

    saveCourse(event: FormEvent<HTMLButtonElement>) {
        event.preventDefault();
        const self = this;

        if (!self.courseFormIsValid()) { return; }

        self.setState({ saving: true });

        self.props.saveCourse(self.state.course)
            .then(() => {
                self.redirect();
            }).catch((error) => {
                toastr.error(error);
                self.setState({ saving: false });
            });
    }

    render() {
        const self = this;

        return (
            <CourseForm
                course={self.state.course}
                errors={self.state.errors}
                allAuthors={self.props.authors}
                saving={self.state.saving}
                onSave={self.saveCourse}
                onChange={self.updateCourseState}
            />
        );
    }
}

function getCourseById(courses: ICourse[], id: string) {
    const theCourses = courses.filter(course => course.id === id);
    if (theCourses.length > 0) {
        return theCourses[0];
    }
    return new Course();
}

function mapStateToProps(state: IManageCourseState, ownProps: IManageCourseProps): IConnectedState {
    const id = ownProps.match.params.id;
    let theCourse = new Course();
    if (id && state.courses.length > 0) {
        theCourse = getCourseById(state.courses, id);
    }

    return {
        course: theCourse,
        errors: new CourseErrorData(),
        authors: authorsFormattedForDropdown(state.authors)
    };
}

const mapDispatchToProps = (dispatch: Dispatch<ICourseActionData, any>): IConnectedDispatch => ({
    saveCourse: (course: ICourse) => {
        return dispatch(courseActions.saveCourse(course));
    }
});

export const ManageCourse: React.ComponentClass<IManageCourseProps> = connect(mapStateToProps, mapDispatchToProps)(ManageCourseComponent);
