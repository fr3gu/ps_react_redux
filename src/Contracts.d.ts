interface IAuthor {
    id: string;
    firstName: string;
    lastName: string;
}

interface ICourse {
    id: string;
    title: string;
    authorId: string;
    category: string;
    length: string;
}

interface IAuthorErrorData {
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

interface IInitialData {
    authors: IAuthor[];
    courses: ICourse[];
}

//************************ ActionDatas */

interface IActionData {
    actionType: string;

}

interface IAuthorActionData extends IActionData {
    author: IAuthor;
}

interface ICourseActionData extends IActionData {
    course: ICourse;
}

interface IInitializeActionData extends IActionData {
    initialData: IInitialData;
}