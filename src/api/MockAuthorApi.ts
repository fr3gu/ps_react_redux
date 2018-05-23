//This file is mocking a web API by hitting hard coded data.
/// <reference path="../Contracts.d.ts" />

import {delay } from "./delay";
import { MockAuthorData as AuthorData } from "./MockAuthorData";
import _ from "lodash";

var authors = AuthorData.authors;

//This would be performed on the server in a real app. Just stubbing in.
function replaceAll(str: string, find: string, replace: string) {
	return str.replace(new RegExp(find, 'g'), replace);
}

	//This would be performed on the server in a real app. Just stubbing in.
const generateId = (author: IAuthor) => {
	return replaceAll(author.firstName + " " + author.lastName, ' ', '-');
};

var _clone = function(item: any): any {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

export default class AuthorApi {
    static getAllAuthors() {
		return new Promise((resolve, _reject) => {
			setTimeout(() => {
				resolve(Object.assign([], authors));
			}, delay);
		});
	}

	static getAuthorById(id: string) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				var author = _.find(authors, {id: id});
				resolve(_clone(author) as IAuthor);
			}, delay);
		});
	}
	
	static saveAuthor(author: IAuthor) {
		return new Promise((resolve, reject) => { 
			setTimeout(() => {
				const minNamefieldLength = 3;
				if(author.firstName.length < minNamefieldLength) {
					reject("Author first name must be at least 1 characters!");
				}
				if(author.lastName.length < minNamefieldLength) {
					reject("Author last name must be at least 1 characters!");
				}
				//pretend an ajax call to web api is made here
				console.log('Pretend this just saved the author to the DB via AJAX call...');
				
				if (author.id) {
					var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id})); 
					authors.splice(existingAuthorIndex, 1, author);
				} else {
					//Just simulating creation here.
					//The server would generate ids for new authors in a real app.
					//Cloning so copy returned is passed by value rather than by reference.
					author.id = generateId(author);
					authors.push(author);
				}

				resolve(_clone(author));
			}, delay);
		});
	}

	static deleteAuthor(id: string) {
		return new Promise((resolve, _reject) => {
			setTimeout(() => {
				console.log('Pretend this just deleted the author from the DB via an AJAX call...');
				resolve(_.remove(authors, { id: id }));
			}, delay);
		});
	}
};