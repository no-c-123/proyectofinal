import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:  "/",
      name: "nav",
      component: () => import("@/views/NavBar.vue"),
      redirect: {name: "landing"},
      children: [
        {
          path: 'landing',
          name: 'landing',
          component: () => import("@/views/LandingView.vue"),
        },

        {
          path: 'editar-medico/:id',
          name: 'medicoE',
          props: (route) => {
            const id = Number(route.params.id)
            return isNaN(id) ? {id: 1} : {id} 
          },
          component: () => import("@/views/MedicoForm.vue"),
        } ,
        {
          path: 'crear-medico',
          name: 'medicoC',
          component: () => import("@/views/CreateMedico.vue"),
        },
        {
          path: 'citas',
          name: 'verCitas',
          component: () => import("@/views/citas/getCitas.vue"),
        },
        {
          path:'consultas',
          name: 'verConsultas',
          component: () => import("@/views/consultas/getConsulta.vue"),
        },
        {
          path: 'editar-cita/:id',
          name: 'citaE',
          props: (route) => {
          const id = Number(route.params.id)
          return isNaN(id) ? {id: 1} : {id}         
        },
        component: () => import("@/views/citas/editCita.vue"),
      },
      {
        path: 'crear-cita',
        name: 'citaC',
        component: () => import("@/views/citas/CreateCita.vue"),
      },
      {
        path: 'editar-consulta/:id',
        name: 'consultaE',
        props: (route) => {
          const id = Number(route.params.id)
          return isNaN(id) ? {id: 1} : {id} 
        },
        component : () => import("@/views/consultas/editConsulta.vue"),
      },
      {
        path: 'crear-consulta',
        name: 'consultaC',
        component: () => import("@/views/consultas/CreateConsulta.vue"),
      },
      {
        path: 'pacientes',
        name: 'verPacientes',
        component: () => import("@/views/pacientes/getPacientes.vue"),
      },
      {
        path: 'editar-paciente/:id',
        name: 'pacienteE',
        props: (route) => {
          const id = Number(route.params.id)
          return isNaN(id) ? {id: 1} : {id} 
        },
        component: () => import("@/views/pacientes/editPacientes.vue"),
      },
      {
        path: 'crear-paciente',
        name: 'pacienteC',
        component: () => import("@/views/pacientes/createPaciente.vue"),
      }
      ]
    },

   
  ]
})

export default router
