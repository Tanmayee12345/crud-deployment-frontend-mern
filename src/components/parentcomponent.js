// ParentComponent.js

import React, { useState } from "react";
import StudentListRow1 from "./studentList1";
import SelectedBooksList from "./SelectedBooksList";

function ParentComponent() {
  const [selectedBooks, setSelectedBooks] = useState([]);

  const handleAddToCart = (book) => {
    if (!selectedBooks.some((selectedBook) => selectedBook.id === book.id)) {
      setSelectedBooks([...selectedBooks, book]);
    }
  };

  const handleRemoveFromCart = (bookId) => {
    const updatedBooks = selectedBooks.filter((book) => book.id !== bookId);
    setSelectedBooks(updatedBooks);
  };

  return (
    <div>
      {/* Your existing components */}
      <table>
        {/* Render your list of students */}
        {/* Assuming studentData is an array of student objects */}
        {studentData.map((student) => (
          <StudentListRow1
            key={student._id}
            obj={student}
            onAddToCart={handleAddToCart}
          />
        ))}
      </table>

      {/* Display the selected books list */}
      <SelectedBooksList
        selectedBooks={selectedBooks}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
}

export default ParentComponent;
