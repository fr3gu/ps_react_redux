/// <reference path="../Contracts.d.ts" />

import { ActionTypes } from "../Constants";
import AuthorApi from "../api/MockAuthorApi";
import { ajaxCallBegin } from "./AjaxStatusActions";

// export function createAuthor(author: IAuthor): IAuthorActionData {
//     return { type: ActionTypes.AUTHOR_CREATED, author };
// }

export function loadAuthorsSuccess(authors: IAuthor[]): IAuthorActionData {
    return { authors, type: ActionTypes.AUTHOR_LOAD_SUCCESS };
}

// export function deleteAuthorSuccess(author: IAuthor): IAuthorActionData {
//     return { type: ActionTypes.AUTHOR_DELETE_SUCCESS, author };
// }

export function loadAuthors() {
    return (dispatch: (actionData: IAuthorActionData) => IAuthorActionData) => {
        dispatch(ajaxCallBegin());
        AuthorApi.getAllAuthors().then((authors: IAuthor[]) => {
            dispatch(loadAuthorsSuccess(authors))
            }).catch(error => {
                throw error;
            });
        }
}

// export function deleteAuthor(id: string) {
//     return (dispatch: (actionData: IAuthorActionData) => IAuthorActionData) =>
//         AuthorApi.deleteAuthor(id).then((author: IAuthor) => {
//             dispatch(deleteAuthorSuccess(author))
//         }).catch(error => {
//             throw error;
//         });
// }