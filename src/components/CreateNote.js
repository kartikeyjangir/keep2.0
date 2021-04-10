import React, { useState } from "react";
import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

function CreateNote(props) {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const AddData = (e) => {
    const { name, value } = e.target;
    setNote((oldData) => {
      return { ...oldData, [name]: value };
    });
  };

  const addTodatabase = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  return (
    <div
      onClick={() => {
        setExpand(true);
      }}
      className="createnote"
      onDoubleClick={() => {
        setExpand(false);
      }}
    >
      <form>
        {expand ? (
          <Input
            placeholder="Title"
            name="title"
            value={note.title}
            onChange={AddData}
            required
          />
        ) : null}
        <br />

        <textarea
          placeholder="Write a short note"
          name="content"
          value={note.content}
          onChange={AddData}
          rowsMin={4}
          style={{ border: "none", outline: "none" }}
        ></textarea>
        <br />
        <br />

        {expand ? (
          <div className="addtonote">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={addTodatabase}
            >
              <AddIcon />
              <span>ADD</span>
            </Button>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default CreateNote;
