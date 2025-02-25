<template>
  <div>
    <h2 style="text-align: center;">Début de Cours</h2>
    <form @submit.prevent="startCourse">
      <div class="form-group">
        <label for="module">Module:</label>
        <select id="module" v-model="module" required>
          <option value="" disabled>Sélectionner un module</option>
          <option v-for="mod in modules" :key="mod" :value="mod">{{ mod }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="heureDebut">Heure de Début:</label>
        <input type="time" id="heureDebut" v-model="heureDebut" required />
      </div>
      <div class="form-group">
        <label>Filière Concernée:</label>
        <input type="checkbox" id="filiere1" v-model="filiere1" value="filiere1" /> Filière 1
        <input type="checkbox" id="filiere2" v-model="filiere2" value="filiere2" /> Filière 2
        <input type="checkbox" id="filiere3" v-model="filiere2" value="filiere2" /> Filière 3
        <input type="checkbox" id="filiere4" v-model="filiere2" value="filiere2" /> Filière 4

      </div>
      <button type="submit">Valider le début du cours</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'StartCourse',
  data() {
    return {
      module: '',
      heureDebut: '',
      filiere1: false,
      filiere2: false,
      filiere3: false,
      filiere4: false,

      modules: [
        'Mathématiques',
        'Physique',
        'Informatique',
        'Chimie',
        'Biologie',
      ],
    };
  },
  methods: {
    startCourse() {
      console.log('Début du cours', this.module, this.heureDebut, this.filiere1, this.filiere2 ,this.filiere3,this.filiere4);
    },
  },
};
</script>

<style scoped>
body {
  font-family: 'Open Sans', sans-serif;
}

.form-group {
  margin-bottom: 25px;
}

label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

select, input[type="time"] {
  width: 100%;
  height: 45px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

input[type="checkbox"] {
  margin-right: 10px;
}

button[type="submit"] {
  background-color: red; 
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color:red; 
}

form {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
