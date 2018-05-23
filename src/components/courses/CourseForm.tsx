import React, { ChangeEvent, FormEvent } from "react"
import { TextInput } from "../common/TextInput";
import { SelectInput } from "../common/SelectInput";

interface ICourseFormProps {
    course: ICourse;
    allAuthors: IOptionData[];
    onSave: (event: FormEvent<HTMLButtonElement>) => void;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    saving: boolean;
    errors: ICourseErrorData;
}

export const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}: ICourseFormProps) => {
    
    return (
        <form>
        <h1>Manage Course</h1>
        <TextInput name="title" label="Title" value={course.title} onChange={onChange} error={errors.title}/>
        <SelectInput name="authorId" label="Author" value={course.authorId} defaultOption="Select Author" options={allAuthors} onChange={onChange} error={errors.authorId}/>
        <TextInput name="category" label="Title" value={course.category} onChange={onChange} error={errors.category}/>
        <TextInput name="length" label="Title" value={course.length} onChange={onChange} error={errors.length}/>
        <button type="submit" className="btn btn-primary" disabled={saving} onClick={onSave}>{saving ? "Saving..." : "Save"}</button>
        </form>
    );
};