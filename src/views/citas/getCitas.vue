<template>
  <div class="container my-5">
      <h5 class="card-text">Cita</h5>
      <router-link :to="{name:'citaC'}" class="btn btn-primary">Agendar Cita</router-link>
      <div class="row g-4">
        <!-- Iteramos sobre el array de médicos -->
        <div class="col-md-4" v-for="cita in citasArray" :key="cita.id_cita">
          <div class="card shadow-sm" style="width: 100%;"> 
            <!-- Imagen de la tarjeta con un estilo mejorado -->
            <img
              class="card-img-top"
              src="https://www.swisshospital.mx/wp-content/uploads/2024/04/swisshospital-centromedicomiravalle-1024x683.jpg"
              alt="Imagen del médico"
            />
            
            <div class="card-body">
              <!-- Nombre del médico -->
              <!-- Especialidad del médico -->
              <p class="card-text">
                <strong>Fecha:</strong> {{ cita.fecha }}
              </p>
              <p class="card-text">
                <strong>Doctor:</strong> {{ cita.id_medico }}
              </p>
              <p class="card-text">
                <strong>Paciente:</strong> {{ cita.id_paciente }}
              </p>
              <!-- Botón con el horario del médico -->
              <a href="#" class="btn btn-primary">
                Hora: {{ cita.hora }}
              </a>
              <br>  
              <br>

              <router-link :to="{name:'citaE', params:{id:cita.id_cita}}" href="#" class="btn btn-success">Editar</router-link>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import axios from 'axios'
  import { ref } from 'vue'
  import type { Citas } from '@/interfaces/citas.interface'
  


  // Arreglo de médicos
  const citasArray = ref<Citas[]>([])
  
  // Función para obtener los datos de los médicos desde la API
  const getCitas = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/citas')
      citasArray.value = response.data
        console.log(citasArray.value)
    } catch (error) {
      console.error('Error fetching medicos:', error)
      
    }
  }
  
  // Llamada a la API al cargar el componente
  getCitas()
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
  