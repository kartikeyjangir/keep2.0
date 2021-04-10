import React, { useState } from "react";
import CreateNote from "./components/CreateNote";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((olditems) => {
      return [...olditems, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((olditems) =>
      olditems.filter((curdata, index) => {
        return index !== id;
      })
    );
  };

  return (
    <main>
      <Header />
      <CreateNote passNote={addNote} />
      <div className="main_content">
        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteitem={onDelete}
            />
          );
        })}
      </div>
      <Footer />
    </main>
  );
}

export default App;
