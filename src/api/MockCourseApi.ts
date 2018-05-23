//This file is mocking a web API by hitting hard coded data.
/// <reference path="../Contracts.d.ts" />

import {delay } from "./delay";
import { MockCourseData as CourseData } from "./MockCourseData";
import _ from "lodash";

var courses = CourseData.courses;

//This would be performed on the server in a real app. Just stubbing in.
function replaceAll(str: string, find: string, replace: string) {
	return str.replace(new RegExp(find, 'g'), replace);
}

	//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course: ICourse) => {
	return replaceAll(course.title, ' ', '-');
};

var _clone = function(item: any): any {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

export default class CourseApi {
    static getAllCourses() {
		return new Promise((resolve, _reject) => {
			setTimeout(() => {
				resolve(Object.assign([], courses));
			}, delay);
		});
	}

	static getCourseById(id: string) {
		var course = _.find(courses, {id: id});
		return _clone(course) as ICourse;
	}
	
	static saveCourse(course: ICourse): Promise<ICourse> {
		return new Promise<ICourse>((resolve, reject) => { 
			setTimeout(() => {
				const minTitleLength = 1;
				if(course.title.length < minTitleLength) {
					reject("Course title must be at least 1 characters!");
				}
				//pretend an ajax call to web api is made here
				console.log('Pretend this just saved the course to the DB via AJAX call...');
				
				if (course.id) {
					var existingCourseIndex = _.indexOf(courses, _.find(courses, {id: course.id})); 
					courses.splice(existingCourseIndex, 1, course);
				} else {
					//Just simulating creation here.
					//The server would generate ids for new courses in a real app.
					//Cloning so copy returned is passed by value rather than by reference.
					course.id = generateId(course);
					course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
					courses.push(course);
				}

				resolve(_clone(course));
			}, delay);
		});
	}

	static deleteCourse(id: string) {
		return new Promise((resolve, _reject) => {
			setTimeout(() => {
				console.log('Pretend this just deleted the course from the DB via an AJAX call...');
				resolve(_.remove(courses, { id: id}));
			}, delay);
		});
	}
};