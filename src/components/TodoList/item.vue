<template>
  <input
    type="checkbox"
    :checked="item.status === FINISHED"
    @click="setStatus(item.id)"
  />
  <span :class="item.status === FINISHED ? 'line-through' : ''">{{
    item.content
  }}</span>
  <button @click="removeTodo(item.id)">del</button>
  <button
    v-if="item.status !== FINISHED"
    @click="setDoing(item.id)"
    :class="item.status === DOING ? 'doing' : 'willdo'"
  >
    {{ item.status === DOING ? "正在做" : "马上做" }}
  </button>
</template>

<script lang="ts">
import { ITodo, TODO_STATUS } from "@/types/TodoList";
import { defineComponent, PropType } from "@vue/runtime-core";
interface IstatusState {
  DOING: TODO_STATUS;
  FINISHED: TODO_STATUS;
  WILLDO: TODO_STATUS;
}
export default defineComponent({
  name: "todoItem",
  props: {
    item: Object as PropType<ITodo>,
  },
  emits: ["setStatus", "removeTodo", "setDoing"],
  setup(props, { emit }) {
    const statusState: IstatusState = {
      DOING: TODO_STATUS.DOING,
      FINISHED: TODO_STATUS.FINISHED,
      WILLDO: TODO_STATUS.WILLDO,
    };
    const setStatus = (id: number): void => {
      emit("setStatus", id);
    };
    const removeTodo = (id: number): void => {
      emit("removeTodo", id);
    };
    const setDoing = (id: number): void => {
      emit("setDoing", id);
    };

    return {
      ...statusState,
      removeTodo,
      setStatus,
      setDoing,
    };
  },
});
</script>

<style>
.line-through {
  text-decoration: line-through;
}
.doing {
  background-color: #cdcdcd;
  color: #111;
}
.willdo {
  background-color: orange;
  color: #fff;
}
</style>
