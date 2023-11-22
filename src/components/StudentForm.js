import React, { useState } from "react";

function StudentForm(props) {
  const [name, setName] = useState(props.nameValue);
  const [email, setEmail] = useState(props.emailValue);
  const [rollNo, setRollNo] = useState(props.rollNoValue);
  const [summary, setSummary] = useState(props.summaryValue);
  const [category, setCategory] = useState('');

  const arr = [category, name, email, rollNo, summary];

  const handleClick = () => {
    props.getState(arr);
  };

  return (
    <div
      style={{
        backgroundImage: `url('cartimg.jpg')`,
        backgroundSize: 'cover',
        minHeight: '100vh', // Ensure the background covers the entire viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "20px",
          borderRadius: "5px",
          width: '80%', // Adjust the width as needed
          maxWidth: '600px', // Set a maximum width if needed
        }}
      >
        <div style={{ width: "100%" }}>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-select"
            >
              <option value="">Select a category</option>
              <option value="Engineering">Engineering</option>
              <option value="Intermediate">Intermediate</option>
              <option value="IIT-JEE">IIT-JEE</option>
              <option value="NEET">NEET</option>
              <option value="UPSC">UPSC</option>
              <option value="Philosophy">Philosophy</option>
              <option value="music">Music</option>
              <option value="Mystery">Mystery</option>
              <option value="Art and Photography">Art and Photography</option>
              <option value="Travel">Travel</option>
              <option value="History">History</option>
              <option value="Economy">Economy</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Book Name
            </label>
            <input
              defaultValue={props.nameValue}
              onChange={(event) => setName(event.target.value)}
              className="form-control"
              placeholder="Enter book name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Author Name
            </label>
            <input
              defaultValue={props.emailValue}
              onChange={(event) => setEmail(event.target.value)}
              className="form-control"
              placeholder="Enter author name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="rollNo" className="form-label">
              Publishing Year
            </label>
            <input
              defaultValue={props.rollNoValue}
              onChange={(event) => setRollNo(event.target.value)}
              className="form-control"
              placeholder="Enter publishing year"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="summary" className="form-label">
              Summary
            </label>
            <input
              defaultValue={props.summaryValue}
              onChange={(event) => setSummary(event.target.value)}
              className="form-control"
              placeholder="Enter your summary"
            />
          </div>

          <button
            onClick={handleClick}
            className="btn btn-dark d-block mx-auto"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentForm;