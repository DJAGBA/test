<template>
    <div>
      <h2 style="color: #ff0000;">Fin de Cours</h2>
      <p>Module: {{ module }}</p>
      <p>Heure de Début: {{ heureDebut }}</p>
      <form @submit.prevent="endCourse">
        <div class="form-group">
          <label for="heureFin" style="color: #000;">Heure de Fin:</label>
          <input type="time" id="heureFin" v-model="heureFin" required style="background-color: #f9f9f9; border: 1px solid #ccc; padding: 10px; border-radius: 5px;" />
        </div>
        <button type="submit" style="background-color: #ff0000; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Valider la fin du cours</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EndCourse',
    data() {
      return {
        module: '', // À récupérer
        heureDebut: '', // À récupérer
        heureFin: '',
      };
    },
    mounted() {
      this.recupererDonneesCours();
    },
    methods: {
      recupererDonneesCours() {
        // Simule une récupération de données
        this.module = 'Module Mathématiques';
        this.heureDebut = '10:00';
      },
      endCourse() {
        // Logique pour terminer le cours ici
        console.log('Fin du cours', this.heureFin);
      },
    },
  };
  </script>
  
  <style scoped>
  body {
    background-color: #f9f9f9;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
  }
  
  button[type="submit"]:hover {
    background-color: #cc0000;
  }
  
  form {
    max-width: 500px;
    margin: auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  