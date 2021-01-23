
<template>


<div class="body">

  <div id="app" class="container"> <!-- Container tag open -->

<div class="columns"> <!-- Columns wrapper tag open -->

  <div class="column">
    <Sidebar/>
  </div>

  <div class="column">
    <router-view/>
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
    Sidebar
  }
}
</script>
