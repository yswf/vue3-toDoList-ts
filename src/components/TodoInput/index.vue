<template>
  <div>
    <input type="text" v-model="todoValue" @keyup.enter="setTodoValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import { useTodo, IuseTodo } from "@/hooks/todoList/index";
export default defineComponent({
  name: "TodoInput",
  setup() {
    const { setTodo }: IuseTodo = useTodo();
    const todoValue = ref<string>("");
    const setTodoValue = (): void => {
      if (todoValue.value.trim().length) {
        setTodo(todoValue.value);
        todoValue.value = "";
      }
    };
    return {
      todoValue,
      setTodoValue,
    };
  },
});
</script>

<style></style>
