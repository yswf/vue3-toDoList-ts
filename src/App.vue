<template>
  <h3>vue3 todo list</h3>
  <todo-input />
  <todo-list :todoList="todoList" />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "@vue/runtime-core";
import { Store, useStore } from "vuex";
import TodoInput from "./components/TodoInput/index.vue";
import TodoList from "./components/TodoList/index.vue";
import { IuseTodo, useTodo } from "./hooks/todoList";
export default defineComponent({
  name: "App",
  components: { TodoInput, TodoList },
  setup() {
    const { setTodoList }: IuseTodo = useTodo();
    const store: Store<any> = useStore();
    onMounted(() => {
      setTodoList();
    });
    return {
      todoList: computed(() => {
        return store.state.list;
      }),
    };
  },
});
</script>

<style></style>
