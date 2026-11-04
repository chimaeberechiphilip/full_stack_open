//Starting the new application
import { useState } from "react";

const Course = ({ course }) => {
  return (
    <>
      {course.map((courses) => (
        <div key={courses.id}>
          <Header course={courses} />
          <Content courses={courses} />
        </div>
      ))}
    </>
  );
};

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};

const Content = ({ courses }) => {
  return (
    <div>
      {courses.parts.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
      <Total course={courses} />
    </div>
  );
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Total = ({ course }) => {
  const total = course.parts.reduce((s, p) => s + p.exercises, 0);
  return <b>total of {total} exercises</b>;
};

// export default App

const App = () => {
  const course = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        { name: "Fundamentals of React", exercises: 10, id: 1 },
        { name: "Using props to pass data", exercises: 7, id: 2 },
        { name: "State of a component", exercises: 14, id: 3 },
        { name: "Redux", exercises: 11, id: 4 },
      ],
    },

    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
