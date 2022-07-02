import React from "react";
import PropTypes from "prop-types";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            id="title"
            type={"text"}
            name="title"
            className="form-control"
            value={props.course.title}
            errors={props.errors.title}
            onChange={props.onChange}
          />
        </div>
        {props.errors.title && (
          <div className="alert alert-danger">{props.errors.title}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={props.course.authorId || ""}
            className="form-control"
            onChange={props.onChange}
          >
            <option value="" />
            <option value={"1"}>Cory House</option>
            <option value={"2"}>Scott Allen</option>
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            type={"text"}
            id="category"
            name="category"
            value={props.course.category}
            onChange={props.onChange}
            errors={props.errors.category}
            className="form-control"
          />
        </div>
        {props.errors.category && (
          <div className="alert alert-danger">{props.errors.category}</div>
        )}
      </div>

      <input type={"submit"} value="save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.prototype = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CourseForm;
