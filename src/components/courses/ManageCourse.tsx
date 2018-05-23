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

interface ICourseParams {
    id: string;
}

interface IManageCourseState {
    courses: ICourse[];
    course: ICourse;
    errors: ICourseErrorData;
    authors: IAuthor[];
    saving: boolean;
}

interface IManageCourseProps extends RouteComponentProps<ICourseParams> { }

interface IConnectedState {
    course: ICourse;
    errors: ICourseErrorData;
    authors: IOptionData[];
}

interface IConnectedDispatch {
    saveCourse: (course: ICourse) => Promise<void>;
}

class ManageCourseComponent extends React.Component<IConnectedState & IConnectedDispatch & IManageCourseProps, IManageCourseState> {

    constructor(props: IConnectedState & IConnectedDispatch & IManageCourseProps, context: any) {
        super(props, context);

        var self = this;

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
        if(self.props.course.id !== nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    updateCourseState(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const self = this;
        const field = event.target.name;
        let updatedCourse = Object.assign({}, self.state.course);
        (updatedCourse as any)[field] = event.target.value;
        self.setState({ course: updatedCourse });

    }

    redirect() {
        const self = this;
        self.setState({saving: false});
        toastr.success("Course created successfully!");
        self.props.history.push("/courses");        
    }

    saveCourse(event: FormEvent<HTMLButtonElement>) {
        event.preventDefault();
        const self = this;
        self.setState({saving: true});
        console.log(self.state.course);
        self.props.saveCourse(self.state.course)
            .then(() => {
                self.redirect();
            }).catch((error) => {
                toastr.error(error);
                //const errorData = {
                //    title: error,
                //    authorId: "",
                //    category: "",
                //    length: ""
                //};

                self.setState({
                    saving: false,
                    //errors: errorData
                });
                
                console.log("fel!", error);
            });
    }

    render() {
        var self = this;

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
    if(theCourses.length > 0) {
        return theCourses[0];
    }
    return new Course();
}

function mapStateToProps(state: IManageCourseState, ownProps: IManageCourseProps): IConnectedState {
    var id = ownProps.match.params.id;
    let theCourse = new Course();
    if(id && state.courses.length > 0) {
        theCourse = getCourseById(state.courses, id);
    }
    let authorsFormattedForDropdown = state.authors.map((author: IAuthor) => { return { value: author.id, text: author.firstName + " " + author.lastName };} );
    return {
        course: theCourse,
        errors: new CourseErrorData(),
        authors: authorsFormattedForDropdown
    };  
};

const mapDispatchToProps = (dispatch: Dispatch<ICourseActionData, any>): IConnectedDispatch => ({
    saveCourse: (course: ICourse) => {
        return dispatch(courseActions.saveCourse(course));
    }
});

export const ManageCourse: React.ComponentClass<IManageCourseProps> = connect(mapStateToProps, mapDispatchToProps)(ManageCourseComponent);