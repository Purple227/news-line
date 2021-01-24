
<template>


<div class="body">

  <div id="app" class="container"> <!-- Container tag open -->

<div class="columns"> <!-- Columns wrapper tag open -->

  <div class="column">
    <Sidebar :auth="authStatus"/>
  </div>

  <div class="column" >
    <router-view :auth="authStatus"/>
  </div>

</div> <!-- Columns wrapper tag close -->

  </div> <!-- Container tag close -->

</div>

</template>

<script>
import Sidebar from './components/partials/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
  },

  data() {
    return{

      dummyUser: {
        email: 'purple@gmail.com',
        password: 111111,
      },

      authStatus: false,

    }
  },

  beforeMount()
  {
    window.localStorage.setItem("user", JSON.stringify(this.dummyUser)); //store dummy user
    this.dummyUser = JSON.parse(window.localStorage.getItem("user")); //get them back
    this.authStatus = window.localStorage.getItem('authStatus');
  }



}
</script>
