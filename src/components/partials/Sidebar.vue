
<template>
	
	<div class="sidebar">


<div v-if="auth == false"> <!-- Form wrapper tag open -->


		<div class="field">
			<p class="control has-icons-left has-icons-right">
				<input class="input" type="email" placeholder="Email" v-model="login.email">
				<span class="icon is-small is-left">
					<i class="fas fa-envelope"></i>
				</span>
				<span class="icon is-small is-right">
					<i class="fas fa-exclamation-triangle" v-if="$v.login.email.$invalid"> </i>
					<i class="fas fa-check" v-else></i>
				</span>
			</p>
		</div>
		<div class="field">
			<p class="control has-icons-left has-icons-right">
				<input class="input" type="password" placeholder="Password" v-model="login.password">
				<span class="icon is-small is-left">
					<i class="fas fa-lock"></i>
				</span>
				<span class="icon is-small is-right">
					<i class="fas fa-exclamation-triangle" v-if="$v.login.password.$invalid"> </i>
					<i class="fas fa-check" v-else></i>
				</span>
			</p>
		</div>
		<div class="field">
			<p class="control">
				<button class="button is-success" :disabled="$v.login.$invalid == true" @click="loginCheck">
					Login
				</button>
			</p>
		</div>

</div> <!-- Form wrapper tag close -->



 <!-- Authenticated section -->
    <div class="card" v-else>
    <div class="card-content">
      <div class="content is-bold has-text-centered subtitle">
        <p class="fa"> Welcome to your number one bitcoin plug  </p>


        <button class="button" @click="logout">
          <span class="icon is-small">
            <i class="fas fa-sign-out has-text-primary"></i>
          </span>
          <span> Logout </span>
        </button>

      </div>
    </div>
  </div>



	</div>

</template>



<script>
  import { required, email } from 'vuelidate/lib/validators'

export default {

    props: ['auth'],

	data() {
		return{
			login: {
				email: null,
				password:null,
                error: true,
			},

		}
	},

    validations: {
      login: {
        email: {
          required,
          email,
        },
        password: {
          required,
        },
      }
    },

    methods: {
        loginCheck() {
            let dummyUser = JSON.parse(window.localStorage.getItem("user")); //get them back
            if(this.login.email == dummyUser.email && this.login.password == dummyUser.password) {
                window.localStorage.setItem('authStatus', true ) //store auth status
                //this.$router.push({name:'home'})
                window.location.reload()
            } else {
                this.login.error = true
            }

        },

        logout() {
            window.localStorage.setItem('authStatus', false ) //store auth status
            window.location.reload()
        }
    }


}

</script>