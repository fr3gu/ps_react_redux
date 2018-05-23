import React from "react"
import { Link } from "react-router-dom";

interface ICourseListRowProps {
    course: ICourse;
}

export const CourseListRow = (props: ICourseListRowProps) => {
    const courseLink = "/course/" + props.course.id;
    const course = props.course;
    
    return (
        <tr>
            <td><Link to={course.watchHref} target="_blank">Watch</Link></td>
            <td><Link to={courseLink}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
        </tr>
    );
};