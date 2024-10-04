<template>
    <div class="container my-5">
      <router-link :to="{name: 'medicoC'}" class='btn btn-success'>Registrar medico</router-link>

      <div class="row g-4">
        <!-- Iteramos sobre el array de médicos -->
        <div class="col-md-4" v-for="medico in medicosArray" :key="medico.id_medico">
          <div class="card shadow-sm" style="width: 100%;">
            <!-- Imagen de la tarjeta con un estilo mejorado -->
            <img
              class="card-img-top"
              src="https://www.swisshospital.mx/wp-content/uploads/2024/04/swisshospital-centromedicomiravalle-1024x683.jpg"
              alt="Imagen del médico"
            />
            <div class="card-body">
              <!-- Nombre del médico -->
              <h5 class="card-title">{{ medico.nombre }}</h5>
              <!-- Especialidad del médico -->
              <p class="card-text">
                <strong>Especialidad:</strong> {{ medico.especialidad }}
              </p>
              <!-- Botón con el horario del médico -->
              <a href="#" class="btn btn-primary">
                Ver horario: {{ medico.horario }}
              </a>
              <br>
              <br>
              <router-link :to="{name: 'medicoE', params: {id: medico.id_medico}}" class="btn btn-success">
                Editar 
              </router-link>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import axios from 'axios'
  import { ref } from 'vue'
  import type { Medicos } from '@/interfaces/medicos.interface'
  
  // Arreglo de médicos
  const medicosArray = ref<Medicos[]>([])
  
  // Función para obtener los datos de los médicos desde la API
  const getMedicos = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/medicos/')
      medicosArray.value = response.data
    } catch (error) {
      console.error('Error fetching medicos:', error)
    }
  }
  
  // Llamada a la API al cargar el componente
  getMedicos()
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  
  .card {
    transition: transform 0.3s ease-in-out;
  }
  
  .card:hover {
    transform: translateY(-10px);
  }
  
  .card-img-top {
    object-fit: cover;
    height: 200px;
  }
  </style>
  