/// <reference path="../Contracts.d.ts" />

export function authorsFormattedForDropdown(authors: IAuthor[]): IOptionData[] {
    return authors.map(author => {
        return { value: author.id, text: author.firstName + " " + author.lastName };
    });
}
