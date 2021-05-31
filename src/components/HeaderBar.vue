<template>
  <div>Nombre de tache : {{ propUser.todoList.length() }}</div>
</template>

<script lang="ts">
import UserServiceProvider from "@/models/UserServiceProvider";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderBar",
  props: {
    propUser: {
      type: UserServiceProvider,
      default: new UserServiceProvider("John", ""),
    },
  },
});
</script>

<style>
</style>
