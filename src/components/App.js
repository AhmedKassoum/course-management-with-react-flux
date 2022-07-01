import React from "react";
import Hearder from "../common/Header";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import HomePage from "./HomePage";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/courses") return <CoursesPage />; 
    if (route === "/about") return <AboutPage />;
    return <HomePage />;
  }

  return (
    <div className="container-fluid">
      <Hearder />
      {getPage()}
    </div>
  );
}
export default App;
