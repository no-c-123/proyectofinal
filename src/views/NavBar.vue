
import router from '@/router';
<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link :to="{name: 'landing'}"  class="navbar-brand">APP MEDICA</router-link> 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      </li>
      <li class="nav-item">
        <router-link :to="{name:'verConsultas'}" class="nav-link" href="#">Consultas</router-link >
      </li>
      <li class="nav-item dropdown">
        <router-link :to="{name:'verCitas'}" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Citas
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name:'verPacientes'}" class="nav-link">Pacientes</router-link>
      </li>
    </ul>

  </div>
</nav>

<body>
    <router-view></router-view>
</body>


</template>