import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  const { title, content } = props;
  const deletenote = () => {
    props.deleteitem(props.id);
  };
  return (
    <div className="note">
      <h1 className="title">{title}</h1>
      <br />
      <p className="content"> {content}</p>
      <br />
      <div className="algintoright">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={deletenote}
        >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
}

export default Note;
