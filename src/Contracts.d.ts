interface ICourse {
    id: string;
    title: string;
    authorId: string;
    category: string;
    length: string;
    watchHref: string;
}

interface IAuthor {
    id: string;
    firstName: string;
    lastName: string;
}

interface ICourseErrorData {
    title: string;
    authorId: string;
    category: string;
    length: string;
}

interface IOptionData {
    value: string;
    text: string;
}

interface IInitialState {
    authors: IAuthor[];
    courses: ICourse[];
    ajaxCallsInProgress: number;
}

interface IConnectedState {
    course: ICourse;
    authors: IOptionData[];
    ajaxCallsInProgress: number;
}

// ************************ ActionDatas */

interface IActionData {
    type: string;
}

interface IErrorActionData extends IActionData {
    error: any;
}

interface ICourseActionData extends IActionData {
    course?: ICourse;
    courses?: ICourse[];
}

interface IAuthorActionData extends IActionData {
    author?: IAuthor;
    authors?: IAuthor[];
}
