
<template>

  <div class="home"> <!-- Home tag open -->

    <div class="field has-addons has-addons-right">
      <p class="control" @click="displayToggle = 'card' ">
        <button class="button">
          <span class="icon is-small">
            <i class="fas fa-th-large has-text-primary"></i>
          </span>
          <span class="is-bold"> Card </span>
        </button>
      </p>
      <p class="control" @click="displayToggle = 'list' ">
        <button class="button">
          <span class="icon is-small">
            <i class="fas fa-list has-text-primary"></i>
          </span>
          <span> List </span>
        </button>
      </p>
    </div>


    <div class="box" v-if="displayToggle == 'list'"> <!-- Box tag open -->
      <div class="columns"> <!-- Columns wrapper tag open -->

        <div class="column is-3">
          <figure class="image is-128x128">
            <img class="" src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
        </div>

        <div class="column">
          <div class="content">
            <p class="is-inline">
              <strong class="title is-4">John Smith</strong> <small>31m</small>
              <br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
            </p>
            <p class="buttons is-inline is-pulled-right">
              <button class="button  mt-4">
                <span class="icon is-small">
                  <i class="fas fa-arrow-right has-text-primary"></i>
                </span>
              </button>
            </p>
          </div>
        </div>

      </div> <!-- Columns wrapper tag close -->


    </div> <!-- Box tag close -->




    <div class="card" v-if="displayToggle == 'card'">
      <div class="card-image">
        <figure class="image is-3by1">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">

        <div class="content">
          <p class="title is-4">John Smith</p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris gfyfuyuy uguiguigiu. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>

      <footer class="card-footer">
        <a href="#" class="card-footer-item"> <i class="fas fa-arrow-right has-text-primary"></i> </a>
      </footer>

    </div>










  </div> <!-- Home tag close -->

</template>

<script>
export default {
  name: 'Home',


  data() {
    return{
      displayToggle: 'card',
      news: null,
    }
  },

  beforeMount() {
    this.getNews()
  },

  methods: {

    getNews() {
      this.axios
      .get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=40a327d7b91545b68baaef920b3ae85f").then((response) => {
        this.news = response.data.articles
      })
    },

},//Method calibrace closes





}
</script>
