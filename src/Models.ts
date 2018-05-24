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
    authorId?: string;
    category?: string;
    length?: string;
    watchHref?: string;

    constructor({ id = "", title = "", authorId = "", category = "", length = "", watchHref = "" } = {}) {
        const self = this;
        self.id = id || (title || "").toLowerCase().replace(/ /g, "-");
        self.title = title;
        self.authorId = authorId;
        self.category = category;
        self.length = length;
        self.watchHref = watchHref;
    }
}
