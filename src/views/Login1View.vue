<template>
    <div class="container">
      <form @submit.prevent="sendResetLink">
        <h2>Réinitialiser le mot de passe</h2>
        <p>Entrez votre e-mail pour recevoir un lien de réinitialisation.</p>
        <div class="col"><label for="email">Adresse e-mail :</label>
        <input type="email" id="email" v-model="email" required /> 
    </div>
        <button type="submit">Envoyer</button>
        <router-link to="/login" class="back-link">Retour à la connexion</router-link>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ForgotPassword',
    data() {
      return {
        email: '',
      };
    },
    methods: {
      sendResetLink() {
    
        console.log('Envoi du lien de réinitialisation à', this.email);
        this.$router.push('/Login2');
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 400px;
    margin: 100px auto;
    padding: 50px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .col{
    margin-bottom: 20px;
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
    background-color:red;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 15px;
  }
  
  .back-link {
    text-decoration: none;
    color:red;
  }
  
  .back-link:hover {
    text-decoration: underline;
  }
  </style>
  