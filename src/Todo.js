import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ImageIcon,
} from "@material-ui/core";
import "./Todo.css";
import React from "react";

function Todo(props) {
  return (
    <List className="todo__list" key={props.text}>
      <ListItem>
        {/**<ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>*/}
        <ListItemText primary={props.text} secondary="dummy deadline" />
      </ListItem>
    </List>
  );
}

export default Todo;
