/// <reference path="../contracts.d.ts" />

export class MockCourseData {
    static courses: ICourse[] = [
        {
            id: "clean-code",
            title: "Clean Code",
            authorId: "cory-house",
            category: "Software Practices",
            length: "3:10",
            watchHref: "http://www.pluralsight.com/courses/clean-code"
        },
        {
            id: "architecting-applications",
            title: "Architecting Applications for the Real World",
            authorId: "cory-house",
            category: "Software Architecture",
            length: "2:52",
            watchHref: "http://www.pluralsight.com/courses/architecting-applications"
        },
        {
            id: "becoming-an-outlier",
            title: "Becoming an Outlier: Reprogramming the Developer Mind",
            authorId: "cory-house",
            category: "Carreer",
            length: "2:30",
            watchHref: "http://www.pluralsight.com/courses/becoming-an-outlier"
        }
    ];
}
