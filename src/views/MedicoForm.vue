<template>
    <div class="container mt-5">
      <form class="p-4 bg-white shadow-lg rounded" style="width: 100%; max-width: 26rem;" @submit.prevent="updatedMedico">
        <!-- Name input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="form4Example1">Nombre</label>
            <input type="text" id="form4Example1" class="form-control" v-model="nombre" />
        </div>
  
        <!-- Email input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="form4Example2">Especialidad</label>
            <input type="email" id="form4Example2" class="form-control " v-model="especialidad" />
        </div>
  
        <!-- Message input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="form4Example3">Horario</label>
          <textarea class="form-control" id="form4Example3" rows="4" v-model="horario"></textarea>
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
        <button type="button" class="btn btn-primary btn-block mb-4 w-100 " @click="updatedMedico">
          Enviar 
        </button>
        <button type="button" class="btn btn-danger btn-block mb-4 w-100 " @click="deleteMedico">
            Delete 
          </button>
      </form>
    </div>
  </template>
  

  
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
const router = useRoute()

const endpoint =` http://localhost:8000/api/medicos/${router.params.id}/`    
const nombre = ref("")
const especialidad = ref("")
const horario = ref("")

const updatedMedico = async () => {
  try {
    const response = await axios.put(endpoint, {
      nombre: nombre.value,
      especialidad: especialidad.value,
      horario: horario.value
    })
    console.log(response.data)
    alert('Medico actualizado')
  } catch (error) {
    console.error('Error updating medico:', error)
  }
}   

const deleteMedico = async () => {
  try {
    const response = await axios.delete(endpoint)
    console.log(response.data)
    alert('Medico eliminado')
  } catch (error) {
    console.error('Error deleting medico:', error)
    alert('Error al eliminar el medico')
  }
}




</script>

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
  