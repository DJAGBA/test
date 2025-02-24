<template>
  <div class="login">
    <h2>Se connecter</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="nom">Nom:</label>
        <input type="text" id="nom" v-model="nom" required />
      </div>
      <div class="form-group">
        <label for="prenom">Prénom:</label>
        <input type="text" id="prenom" v-model="prenom" required />
      </div>
      <div class="form-group">
        <label for="motdepasse">Mot de passe:</label>
        <input type="password" id="motdepasse" v-model="motdepasse" required />
      </div>
      <button type="submit">Valider</button>
      <router-link to="/Login1">Mot de passe oublié ?</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '', 
      nom: '',
      prenom: '',
      motdepasse: '', 
    };
  },
  methods: {
    login() {
      console.log('Connexion avec', this.email, this.nom, this.prenom);
      this.$router.push('/Enseignant'); 
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 0px auto;
  padding: 80px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
}
</style>
