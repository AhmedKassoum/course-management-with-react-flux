import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseList from "./CourseList";
import courseStore from '../stores/courseStore';
import {loadCourses} from '../actions/courseActions';
import { deleteCourse } from "../api/courseApi";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
     if(courseStore.getCourses().length===0) loadCourses();
     return ()=>courseStore.removeChangeListener(onChange);
  }, []);

  function onChange(){
    setCourses(courseStore.getCourses());
  }

  return (
    <div>
      <h2>Courses</h2>
      <Link className="btn btn-primary mb-3" to={"/course"}>
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </div>
  );
}

export default CoursesPage;
