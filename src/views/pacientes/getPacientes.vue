<template>
  <div class="container my-5">
      <router-link :to="{name:'pacienteC'}" class="btn btn-success">Registrar paciente</router-link>
        <br>
        <br>
      <div class="row g-4">
        <!-- Iteramos sobre el array de médicos -->
        <div class="col-md-4" v-for="pacientes in pacientesArray" :key="pacientes.id_paciente">
          <div class="card shadow-sm" style="width: 100%;"> 
            <!-- Imagen de la tarjeta con un estilo mejorado -->
            <img
              class="card-img-top"
              src="https://www.swisshospital.mx/wp-content/uploads/2024/04/swisshospital-centromedicomiravalle-1024x683.jpg"
              alt="Imagen del médico"
            />
            <div class="card-body">
              <!-- Nombre del médico -->
              <h5 class="card-title">Paciente</h5>
              <!-- Especialidad del médico -->
              <p class="card-text">
                <strong>Nombre:</strong> {{ pacientes.nombre }}
              </p>
              <p class="card-text">
                <strong>Apellido:</strong> {{ pacientes.apellido }}
              </p>
              <p class="card-text">
                <strong>Fecha de nacimiento:</strong> {{ pacientes.fecha_nacimiento }}
              </p>
              <p class="card-text">
                <strong>Teléfono:</strong> {{ pacientes.teléfono }}
              </p>
              <p class="card-text">
                <strong>Correo Electronico:</strong> {{ pacientes.correo_electrónico }}
              </p>
              <!-- Botón con el horario del médico -->


              <br>  
              <br>
              <router-link :to="{name:'pacienteE', params: {id:pacientes.id_paciente}}" class="btn btn-primary btn-block mb-4 w-100 " >
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
  import { Pacientes } from '@/interfaces/pacientes.interface'
  


  // Arreglo de médicos
  const pacientesArray = ref<Pacientes[]>([])
  
  // Función para obtener los datos de los médicos desde la API
  const getPacientes = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/pacientes/')
      pacientesArray.value = response.data
        console.log(pacientesArray.value)
    } catch (error) {
      console.error('Error fetching medicos:', error)
      
    }
  }
  
  // Llamada a la API al cargar el componente
  getPacientes()
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
  