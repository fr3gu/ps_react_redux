//This file is mocking a web API by hitting hard coded data.
/// <reference path="../Contracts.d.ts" />

import { CourseData } from "./CourseData";
import _ from "lodash";

var courses = CourseData.courses;

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(course: ICourse) {
	return course.title.toLowerCase().replace(/ /g, '-');
};

var _clone = function(item: any): any {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

export default class CourseApi {
    static getAllCourses() {
		return _clone(courses) as ICourse[];
	}

	static getCourseById(id: string) {
		var course = _.find(courses, {id: id});
		return _clone(course) as ICourse;
	}
	
	static saveCourse(course: ICourse) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the course to the DB via AJAX call...');
		
		if (course.id) {
			var existingCourseIndex = _.indexOf(courses, _.find(courses, {id: course.id})); 
			courses.splice(existingCourseIndex, 1, course);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new courses in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			course.id = _generateId(course);
			courses.push(course);
		}

		return _clone(course);
	}

	static deleteCourse(id: string) {
		console.log('Pretend this just deleted the course from the DB via an AJAX call...');
		_.remove(courses, { id: id});
	}
};