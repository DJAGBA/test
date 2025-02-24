<template>
    <div class="container">
      <form @submit.prevent="updatePassword">
        <h2>Créer un nouveau mot de passe</h2>
        <p>Entrez votre nouveau mot de passe.</p>
  
        <label for="password">Nouveau mot de passe :</label>
        <input type="password" id="password" v-model="password" required>
  
        <label for="confirm-password">Confirmer le mot de passe :</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" required>
  
        <p id="error-message" class="error-message">{{ errorMessage }}</p>
  
        <button type="submit">Réinitialiser</button>
        <router-link to="/login" class="back-link">Retour à la connexion</router-link>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResetPassword',
    data() {
      return {
        password: '',
        confirmPassword: '',
        errorMessage: '',
      };
    },
    methods: {
      updatePassword() {
        if (this.password !== this.confirmPassword) {
          this.errorMessage = 'Les mots de passe ne correspondent pas.';
          return;
        }
  
        
        console.log('Mise à jour du mot de passe avec', this.password);
    
        this.$router.push('/Enseignant'); 
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 400px;
    margin: 50px auto;
    padding: 50px;
    border: 1px solid #ddd;
    border-radius: 5px;
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
    border-radius: 5px;
    cursor: pointer;
  }
  
  .back-link {
    text-decoration: none;
    color:red;
  }
  
  .back-link:hover {
    text-decoration: underline;
  }
  
  .error-message {
    color: red;
  }
  </style>
  