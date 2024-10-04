<template>
    <div class="container my-5">
        <router-link :to="{name:'consultaC'}" class="btn btn-success py-10">Crear consulta</router-link>
        <br>
        <br>
      <div class="row g-4">
        <!-- Iteramos sobre el array de médicos -->
        <div class="col-md-4" v-for="consulta in consultaArray" :key="consulta.id_consulta">
          <div class="card shadow-sm" style="width: 100%;"> 
            <!-- Imagen de la tarjeta con un estilo mejorado -->
            <img
              class="card-img-top"
              src="https://www.swisshospital.mx/wp-content/uploads/2024/04/swisshospital-centromedicomiravalle-1024x683.jpg"
              alt="Imagen del médico"
            />
            <div class="card-body">
              <!-- Nombre del médico -->
              <h5 class="card-title">Consulta</h5>
              <!-- Especialidad del médico -->
              <p class="card-text">
                <strong>Nota:</strong> {{ consulta.notas }}
              </p>
              <p class="card-text">
                <strong>Diagnóstico:</strong> {{consulta.diagnóstico}}
              </p>
              <p class="card-text">
                <strong>Tratamiento:</strong> {{ consulta.tratamiento }}
              </p>
              <!-- Botón con el horario del médico -->


              <br>  
              <br>
              <router-link type="button" class="btn btn-primary btn-block mb-4 w-100 " >Editar </router-link>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import axios from 'axios'
  import { ref } from 'vue'
  import  { Consulta } from '@/interfaces/consultas.interface'
  


  // Arreglo de médicos
  const consultaArray = ref<Consulta[]>([])
  
  // Función para obtener los datos de los médicos desde la API
  const getConsultas = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/consultas')
      consultaArray.value = response.data
        console.log(consultaArray.value)
    } catch (error) {
      console.error('Error fetching medicos:', error)
      
    }
  }
  
  // Llamada a la API al cargar el componente
  getConsultas()
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
  