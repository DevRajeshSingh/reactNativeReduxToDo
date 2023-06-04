import {
  ADDTASK,
  DELETEALLTASK,
  DELETECOMPLETEDTASK,
  EDITDESCRIPTION,
  EDITTITLE,
  TOGGLECOMPLETED,
} from "./actionTypes";

const initialState = {
  title: "",
  description: "",
  tasks: [],
};
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETEALLTASK:
      return {
        ...state,
        tasks: [],
      };
    case DELETECOMPLETEDTASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => !task.completed),
      };
    case TOGGLECOMPLETED:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case EDITTITLE:
      return {
        ...state,
        title: action.payload.title,
      };
    case EDITDESCRIPTION:
      return {
        ...state,
        description: action.payload.description,
      };
    default:
      return state;
  }
};
