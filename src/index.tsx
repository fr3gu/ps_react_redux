import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Layout from "./components/Layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "toastr/build/toastr.css";

import configureStore from "./store/ConfigureStore";
import { loadCourses } from "./actions/CourseActions";
import { loadAuthors } from "./actions/AuthorActions";

const store = configureStore({});
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>,
    document.getElementById("app")
);
