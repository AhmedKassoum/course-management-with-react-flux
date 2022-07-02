import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((courses) => setCourses(courses));
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <Link className="btn btn-primary mb-3" to={"/course"}>
        Add Course
      </Link>
      <CourseList courses={courses} />
    </div>
  );
}

export default CoursesPage;
