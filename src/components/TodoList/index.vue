<template>
  <ul>
    <li v-for="item of todoList" :key="item.id" class="list">
      <todo-item
        :item="item"
        @removeTodo="removeTodo"
        @setStatus="setStatus"
        @setDoing="setDoing"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { IuseTodo, useTodo } from "@/hooks/todoList";
import { ITodo } from "@/types/TodoList";
import { defineComponent, PropType } from "@vue/runtime-core";
import todoItem from "./item.vue";
export default defineComponent({
  name: "TodoList",
  props: {
    todoList: Array as PropType<ITodo[]>,
  },
  components: { todoItem },
  setup() {
    const { removeTodo, setStatus, setDoing }: IuseTodo = useTodo();
    return { removeTodo, setStatus, setDoing };
  },
});
</script>

<style>
.list {
  list-style: none; /*去掉小圆点*/
}
</style>
