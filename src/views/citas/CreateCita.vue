<template>
    <div class="container mt-5">
      <form class="p-4 bg-white shadow-lg rounded" style="width: 100%; max-width: 26rem;" @submit.prevent="updatedMedico">
        <!-- Name input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="form4Example1">Fecha</label>
            <input type="date" id="form4Example1" class="form-control" v-model="fecha" />
        </div>
  
        <!-- Email input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="form4Example2">Hora</label>
            <input type="time" id="form4Example2" class="form-control " v-model="hora" />
        </div>
  
        <!-- Message input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="form4Example3">Medico</label>
          <input class="form-control" type="number" id="form4Example3" rows="4" v-model="id_medico">
        </div>

        <div class="form-outline mb-4">
            <label class="form-label" for="form4Example3">Paciente</label>
          <input class="form-control" type="number" id="form4Example3" rows="4" v-model="id_paciente">
        </div>
  
        <!-- Checkbox -->
        <div class="form-check d-flex justify-content-center mb-4">
          <input
            class="form-check-input me-2"
            type="checkbox"
            id="form4Example4"
            checked
          />
          <label class="form-check-label" for="form4Example4">
            Enviarme una copia de este mensaje
          </label>
        </div>
  
        <!-- Submit button -->
        <button type="button" class="btn btn-primary btn-block mb-4 w-100 " @click="updateCita">
          Enviar 
        </button>
      </form>
    </div>
  </template>

<style scoped>
.container {
  max-width: 100%; /* Hace que el contenedor sea responsivo */
  display: flex;
  justify-content: center;
}

.form-control {
  border-radius: 0.5rem;
  font-size: 1.1rem; /* Tamaño de fuente más cómodo */
  padding: 0.75rem;
  border: 1px solid #ced4da;
}

.form-label {
  font-size: 1.15rem;
}

button {
  background-color: #3498db;
  border: none;
  font-size: 1.2rem;
  padding: 0.75rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}

form {
  background-color: #f8f9fa; /* Fondo del formulario más suave */
  border-radius: 0.75rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}
</style>

<script setup>

    import axios from 'axios'
    import { ref } from 'vue'
    import { useRoute } from 'vue-router'
    
    const router = useRoute()
    const endpoint = `http://127.0.0.1:8000/api/citas/` 
    const fecha = ref("")
    const hora = ref("")
    const id_medico = ref()
    const id_paciente = ref()

    const updateCita = async () => {
        try {
            const response = await axios.post(endpoint, {
                fecha: fecha.value,
                hora: hora.value,
                id_medico: id_medico.value,
                id_paciente: id_paciente.value
            })
            console.log(response.data)
            alert('Cita registrada')
        } catch (error) {
            console.error('Error updating cita:', error)
        }
    }

</script>