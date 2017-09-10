import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';



class PostsNew extends Component {

    //field has event handler when it's called from field
    renderField(field) {
        const { touched, error } = field.meta;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    type={field.typez}
                    className="form-control "
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ""}
                </div>
            </div>
        );
    }

    mySubmit(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <h3>Create A New Blog Post</h3>
                <form onSubmit={handleSubmit(this.mySubmit.bind(this))}>
                    <Field
                        label="Title:"
                        name="title"
                        component={this.renderField}
                    />
                    <Field
                        label="Categories:"
                        name="categories"
                        component={this.renderField}
                    />
                    <Field
                        name="content"
                        component={this.renderField}
                        label="Post Content:"
                    />
                    <button type="submit" className="btn btn-primary btn-group">Submit</button>
                    <button type="cancel" className="btn btn-cancel btn-group">Cancel</button>
                </form>
            </div>
        );
    }
}

function validate(values) {


    //necessary
    const errors = {};
    if (!values.title)
        errors.title = "Must enter a title"
    if (!values.content)
        errors.content = "Must enter some content"
    if (!values.categories)
        errors.categories = "Must enter a category"
    return errors;
}

export default reduxForm({
    form: 'PostsNewForm',
    validate

})(PostsNew);