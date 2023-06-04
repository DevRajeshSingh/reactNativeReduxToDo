import {
  ADDTASK,
  DELETECOMPLETEDTASK,
  DELETEALLTASK,
  TOGGLECOMPLETED,
  EDITTITLE,
  EDITDESCRIPTION,
} from "./actionTypes";

export const addTask = ( title = "New Task" ) => ({
  type: ADDTASK,
  payload: {
    id: new Date().getTime().toString(),
    title: title,
    completed: false,
  },
});

export const deleteCompletedTask = () => ({
  type: DELETECOMPLETEDTASK,
});

export const deleteAllTask = () => ({
  type: DELETEALLTASK,
});

export const toggleCompleted = (id) => ({
  type: TOGGLECOMPLETED,
  payload: id,
});

export const editTitle = (title ) => ({
  type: EDITTITLE,
  payload: { title },
});

export const editDescription = (description) => ({
  type: EDITDESCRIPTION,
  payload: { description },
});
