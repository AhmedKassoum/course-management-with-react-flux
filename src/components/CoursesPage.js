import React, { useEffect, useState } from "react";
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
        <CourseList courses={courses}/>
    </div>
  );
}

export default CoursesPage;
