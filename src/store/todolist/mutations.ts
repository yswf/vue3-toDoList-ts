import { Istate, ITodo, TODO_STATUS } from "@/types/TodoList";
import {
  REMOVE_TODO,
  SET_TODO,
  SET_TODO_DOING,
  SET_TODO_LIST,
  SET_TODO_STATUS,
} from "./actionsType";

export default {
  [SET_TODO](state: Istate, todo: ITodo): void {
    state.list = [todo, ...state.list];
  },
  [SET_TODO_LIST](state: Istate, todoLIst: ITodo[]): void {
    state.list = todoLIst;
  },
  [REMOVE_TODO](state: Istate, id: number): void {
    state.list = state.list.filter((item: ITodo) => item.id !== id);
  },
  [SET_TODO_STATUS](state: Istate, id: number): void {
    state.list = state.list.map((item: ITodo) => {
      if (item.id === id) {
        switch (item.status) {
          case TODO_STATUS.FINISHED:
            item.status = TODO_STATUS.WILLDO;
            break;

          case TODO_STATUS.WILLDO:
          case TODO_STATUS.DOING:
            item.status = TODO_STATUS.FINISHED;
            break;

          default:
            break;
        }
      }
      return item;
    });
  },
  [SET_TODO_DOING](state: Istate, id: number): void {
    state.list = state.list.map((item: ITodo) => {
      if (item.id !== id) {
        item.status = TODO_STATUS.WILLDO;
      } else {
        item.status === TODO_STATUS.WILLDO
          ? (item.status = TODO_STATUS.DOING)
          : (item.status = TODO_STATUS.WILLDO);
      }
      return item;
    });
  },
};
