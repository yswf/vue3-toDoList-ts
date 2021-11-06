interface ITodo {
  id: number;
  content: string;
  status: TODO_STATUS;
}
interface Istate {
  list: ITodo[];
}
enum TODO_STATUS {
  WILLDO = "willdo",
  DOING = "doing",
  FINISHED = "finished",
}

export { ITodo, Istate, TODO_STATUS };
