<template>
  <div class="hello">
    <header-bar :propUser="propUser" />
    <todo-list-component :propUser="propUser" />
    <todo-form-creation :propUser="propUser" @create-task="createTask" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import TodoFormCreation from "@/components/TodoFormCreation.vue";
import HeaderBar from "@/components/HeaderBar.vue";
import TodoListComponent from "@/components/TodoList.vue";
import UserServiceProvider, { Todo } from "@/models/UserServiceProvider";

export default defineComponent({
  name: "Home",
  components: {
    HeaderBar,
    TodoListComponent,
    TodoFormCreation,
  },
  props: {
    msg: String,
  },
  data: () => {
    return {
      propUser: {} as UserServiceProvider,
    };
  },
  provide: function () {
    return { user: computed(() => this.propUser) }
  },
  created() {
    this.propUser = new UserServiceProvider(
      "jlebatard",
      "https://toppng.com/uploads/preview/avatar-png-11554021661asazhxmdnu.png"
    );
    const todo = new Todo("tache 1");
    this.propUser.todoList?.add(todo);
    this.propUser.todoList?.add(todo);
    this.propUser.todoList?.add(todo);
  },

  methods: {
    createTask: function (payload: Todo): void {
      this.propUser.todoList!.add(payload);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
