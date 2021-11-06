import { Istate, ITodo } from "@/types/TodoList";
import { Commit } from "vuex";
import {
  REMOVE_TODO,
  SET_TODO,
  SET_TODO_DOING,
  SET_TODO_LIST,
  SET_TODO_STATUS,
} from "./actionsType";
interface ICtx {
  commit: Commit;
  state: Istate;
}
export default {
  [SET_TODO]({ commit }: ICtx, todo: ITodo): void {
    commit(SET_TODO, todo);
  },
  [SET_TODO_LIST]({ commit }: ICtx, todoLIst: ITodo[]): void {
    commit(SET_TODO_LIST, todoLIst);
  },
  [REMOVE_TODO]({ commit }: ICtx, id: number): void {
    commit(REMOVE_TODO, id);
  },
  [SET_TODO_STATUS]({ commit }: ICtx, id: number): void {
    commit(SET_TODO_STATUS, id);
  },
  [SET_TODO_DOING]({ commit }: ICtx, id: number): void {
    commit(SET_TODO_DOING, id);
  },
};
