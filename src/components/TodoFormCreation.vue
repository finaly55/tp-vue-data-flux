<template>
  <div>
    <input type="text" v-model="taskLibelle" />
    <button @click="addTodo">OK</button>
  </div>
</template>

<script lang="ts">
import UserServiceProvider, { Todo } from "@/models/UserServiceProvider";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoFormCreation",
  data: () => {
    return {
      taskLibelle: "",
    };
  },
  inject: ["user"],

  props: {
    propUser: {
      type: UserServiceProvider,
      default: new UserServiceProvider("John", ""),
    },
  },
  methods: {
    addTodo() {
      this.propUser.todoList?.add(new Todo(this.taskLibelle))
    },
  },
});
</script>

<style>
</style>
