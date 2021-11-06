/* eslint-disable @typescript-eslint/no-empty-function */
import {
  REMOVE_TODO,
  SET_TODO,
  SET_TODO_DOING,
  SET_TODO_LIST,
  SET_TODO_STATUS,
} from "@/store/todolist/actionsType";
import state from "@/store/todolist/state";
import { ITodo, TODO_STATUS } from "@/types/TodoList";
import { watch } from "vue";
import { Store, useStore } from "vuex";

export interface IuseTodo {
  setTodo: (value: string) => void;
  setTodoList: () => void;
  removeTodo: (id: number) => void;
  setStatus: (id: number) => void;
  setDoing: (id: number) => void;
}

interface IuseLocalStorage {
  getLocalList: () => ITodo[];
  setLocalList: (value: ITodo[]) => void;
}
function useTodo(): IuseTodo {
  const store: Store<any> = useStore();
  const { getLocalList, setLocalList }: IuseLocalStorage = useLocalStorage();
  const todoLIst = getLocalList();
  watch(
    () => {
      return store.state.list;
    },
    (todoLIst) => {
      setLocalList(todoLIst);
    }
  );
  function setTodo(value: string): void {
    const todo: ITodo = {
      id: new Date().getTime(),
      content: value,
      status: TODO_STATUS.WILLDO,
    };
    store.dispatch(SET_TODO, todo);
  }
  function setTodoList() {
    store.dispatch(SET_TODO_LIST, todoLIst);
  }
  function removeTodo(id: number) {
    store.dispatch(REMOVE_TODO, id);
  }
  function setStatus(id: number) {
    store.dispatch(SET_TODO_STATUS, id);
  }
  function setDoing(id: number) {
    store.dispatch(SET_TODO_DOING, id);
  }
  return {
    setTodo,
    setTodoList,
    removeTodo,
    setStatus,
    setDoing,
  };
}
function useLocalStorage(): IuseLocalStorage {
  function getLocalList(): ITodo[] {
    return JSON.parse(window.localStorage.getItem("todoList") || "[]");
  }
  function setLocalList(todoList: ITodo[]): void {
    window.localStorage.setItem("todoList", JSON.stringify(todoList));
  }
  return {
    getLocalList,
    setLocalList,
  };
}
export { useTodo };
