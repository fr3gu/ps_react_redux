/// <reference path="./Contracts.d.ts" />

export class CourseErrorData implements ICourseErrorData {
    title: string;
    authorId: string;
    category: string;
    length: string;

    constructor() {
        const self = this;
        self.title = "";
        self.authorId = "";
        self.category = "";
        self.length = "";
    }
}

export class Course implements ICourse {
    id: string;
    title: string;
    authorId: string;
    category: string;
    length: string;
    watchHref: string;

    constructor() {
        const self = this;
        self.id = "";
        self.title = "";
        self.authorId = "";
        self.category = "";
        self.length = "";
        self.watchHref = "";
    }
}
