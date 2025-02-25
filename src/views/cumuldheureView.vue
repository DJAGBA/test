<template>
    <div>
      <h2 style="color: red;">Cumul des Heures par Module</h2>
      <div class="filters">
        <label for="module">Sélectionner un module:</label>
        <select id="module" v-model="selectedModule" style="width: 200px; height: 40px; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
          <option value="" disabled>Choisir un module</option>
          <option value="Mathématiques">Mathématiques</option>
          <option value="Physique">Physique</option>
          <option value="Informatique">Informatique</option>
        </select>
        <label for="dateDebut" style="margin-left: 20px;">Date de Début:</label>
        <input type="date" id="dateDebut" v-model="dateDebut" style="width: 150px; height: 40px; padding: 10px; border: 1px solid #ccc; border-radius: 5px;" />
        <label for="dateFin" style="margin-left: 20px;">Date de Fin:</label>
        <input type="date" id="dateFin" v-model="dateFin" style="width: 150px; height: 40px; padding: 10px; border: 1px solid #ccc; border-radius: 5px;" />
        <button @click="calculerCumul" style="background-color: red; color: white; padding: 10px 20px; border: none; border-radius: 10px; cursor: pointer; margin-left: 20px;">Calculer</button>
      </div>
      <div class="result" style="margin-top: 20px;">
        <p style="font-size: 18px; font-weight: bold;">Cumul Total d'Heures: {{ cumulTotal }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CumulHours',
    data() {
      return {
        selectedModule: '',
        dateDebut: '',
        dateFin: '',
        cumulTotal: 0,
      };
    },
    methods: {
      calculerCumul() {
        // Logique pour calculer le cumul ici
        console.log('Calcul du cumul avec', this.selectedModule, this.dateDebut, this.dateFin);
        this.cumulTotal = 10; // Remplace ceci par le résultat réel
      },
    },
  };
  </script>
  
  <style scoped>
  .filters {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .result {
    text-align: center;
  }
  
  button[type="button"]:hover {
    background-color:red;
  }
  </style>
  