/// <reference path="../../Contracts.d.ts" />

import * as React from "react";
import { Component } from "react";
import { CourseListRow } from "./CourseListRow";

interface ICourseListState { }

interface ICourseListProps {
    courses: ICourse[];
}

export default class CourseList extends React.Component<ICourseListProps, ICourseListState> {

    constructor(props: ICourseListProps) {
        super(props);

        const self = this;

        self.state = {};
    }

    render() {
        const self = this;
        const courseListRows = self.props.courses.map((c, i) => <CourseListRow key={i} course={c} />);

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Length</th>
                    </tr>
                </thead>
                <tbody>
                        {courseListRows}
                    </tbody>
            </table>
        );
    }
}
