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

export default Course;
