
<template>

  <div class="home"> <!-- Home tag open -->


<div v-if="auth"> <!-- AuthWrapper -->



    <div class="field has-addons has-addons-right" >
      <p class="control" @click="displayToggle = 'card' ">
        <button class="button">
          <span class="icon is-small">
            <i class="fas fa-th-large has-text-primary"></i>
          </span>
          <span class="is-bold"> Card </span>
        </button>
      </p>
      <p class="control" @click="displayToggle = 'list' " >
        <button class="button">
          <span class="icon is-small">
            <i class="fas fa-list has-text-primary"></i>
          </span>
          <span> List </span>
        </button>
      </p>
    </div>



<div v-if="displayToggle == 'list'">
    <div class="box" v-for="(news, index) in news" :key="index"> <!-- Box tag open -->
      <div class="columns"> <!-- Columns wrapper tag open -->

        <div class="column is-3">
          <figure class="image is-128x128">
            <img class="" :src="news.urlToImage">
          </figure>
        </div>

        <div class="column">
          <div class="content">
            <p class="is-inline">
              <strong class="title is-4"> By {{ news.author == null ? 'Anonymous' : news.author }}</strong> 
              <br>
              {{ news.title }}
            </p>

                      <br>
          <time :datetime="news.publishedAt"> {{ news.publishedAt | format('D MMM YYYY - h:mm A')}} </time>

            <p class="buttons is-inline is-pulled-right">
              <a :href="news.url" class="button  mt-4">
                <span class="icon is-small">
                  <i class="fas fa-arrow-right has-text-primary"></i>
                </span>
              </a>
            </p>
          </div>
        </div>

      </div> <!-- Columns wrapper tag close -->
    </div> <!-- Box tag close -->
  </div>




<div v-if="displayToggle == 'card'" >
    <div class="card m-4" v-for="(news, index) in news" :key="index">
      <div class="card-image">
        <figure class="image is-3by1">
          <img :src="news.urlToImage" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">

        <div class="content">
          <p class="title is-4"> By {{ news.author == null ? 'Anonymous' : news.author }} </p>
          {{ news.title }}
          <br>
          <time datetime="2016-1-1"> {{ news.publishedAt | format('D MMM YYYY - h:mm A')}} </time>
        </div>
      </div>
      <footer class="card-footer">
        <a :href="news.url" class="card-footer-item"> <i class="fas fa-arrow-right has-text-primary"></i> </a>
      </footer>
    </div>
</div>

</div> <!-- AuthWrapper -->




<div class="sidebar" v-else> <!-- Unauthenticated section -->

    <div class="card">
    <div class="card-content">
      <div class="content is-bold has-text-centered subtitle">
        <span class="fa"> Please login to gain access to news line. </span>
      </div>
    </div>
  </div>

</div>

  </div> <!-- Home tag close -->

</template>

<script>
export default {
  name: 'Home',

props: ['auth'],

  data() {
    return{
      displayToggle: 'card',
      news: null,
    }
  },

  beforeMount() {
    this.getNews()
  },

  mounted() {
    this.scroll()
  },


  methods: {

    getNews() {
      this.axios
      .get(`https://newsapi.org/v2/everything?q=bitcoin?&sortBy=publishedAt&pageSize=3&apiKey=40a327d7b91545b68baaef920b3ae85f`).then((response) => {
        this.news = response.data.articles
      })
    },


  scroll () {
    let number = 3
    window.onscroll = () => {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

      if (bottomOfWindow == false) {
      this.axios
      .get(`https://newsapi.org/v2/everything?q=bitcoin?&sortBy=publishedAt&pageSize=${number ++}&apiKey=40a327d7b91545b68baaef920b3ae85f`).then((response) => {
        let allNews = response.data.articles
         this.news = allNews
      })

      }
    };
  },


},//Method calibrace closes


}
</script>





























































