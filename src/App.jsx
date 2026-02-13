import "./App.css";
import { Person, Student, Teacher } from "./classes/Person";

function App() {

  const people = [
    new Person("Alex Johnson", 30),
    new Student("Emma Watson", 20, "Computer Science"),
    new Teacher("Dr. James Wilson", 45, "Mathematics"),
  ];

  return (
    <div className="container">
      <h1>Person Class Hierarchy</h1>

      {people.map((p, index) => (
        <div className="card" key={index}>
          <h2>
            {p.name} ({p.constructor.name})
          </h2>

          <p><strong>Age:</strong> {p.age}</p>

          <p className="intro">{p.introduce()}</p>

          {"major" in p && (
            <p><strong>Major:</strong> {p.major}</p>
          )}

          {"subject" in p && (
            <p><strong>Teaching:</strong> {p.subject}</p>
          )}

        </div>
      ))}

    </div>
  );
}

export default App;
