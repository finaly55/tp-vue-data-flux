<template>
  <div>
    <p v-for="(task, index) in propUser.todoList.items" :key="index">{{ task.title }}</p>
  </div>
</template>

<script lang="ts">
import UserServiceProvider from "@/models/UserServiceProvider";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoList",

  props: {
    propUser: {
      type: UserServiceProvider,
      default: new UserServiceProvider("John", ""),
    },
  },
});
</script>
