<template>
    <div>
      <h2 style="color: red;">Historique des Émergences</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Module</th>
            <th>Heure de Début</th>
            <th>Heure de Fin</th>
            <th>Total d'Heures</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cours in coursList" :key="cours.id">
            <td>{{ cours.date }}</td>
            <td>{{ cours.module }}</td>
            <td>{{ cours.heureDebut }}</td>
            <td>{{ cours.heureFin }}</td>
            <td>{{ cours.totalHeures }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'History',
    data() {
      return {
        coursList: [
          { id: 1, date: '2024-07-05', module: 'Mathématiques', heureDebut: '08:00', heureFin: '10:00', totalHeures: 2 },
          { id: 2, date: '2024-07-05', module: 'Physique', heureDebut: '10:00', heureFin: '12:00', totalHeures: 2 },
          // Plus de données ici
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  th,
  td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }
  
  th {
    background-color: #f0f0f0;
    color: #333;
    font-weight: bold;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  tr:hover {
    background-color: #ddd;
  }
  </style>
  