import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Bienvenida } from './bienvenida/bienvenida';
import { CrearAnuncio } from './crear-anuncio/crear-anuncio';
import { CrearClasificacion } from './crear-clasificacion/crear-clasificacion';
import { CrearGenero } from './crear-genero/crear-genero';
import { CrearSala } from './crear-sala/crear-sala';
import { CrearPeliculas } from './crear-peliculas/crear-peliculas';
import { CrearFunciones } from './crear-funciones/crear-funciones';
import { ReservaTickets } from './reserva-tickets/reserva-tickets';

export const routes: Routes = [
{ path: "", component: Login },
{ path: "bienvenida", component: Bienvenida },
{ path: "crear-anuncio", component: CrearAnuncio },
{ path: "crear-clasificacion", component: CrearClasificacion },
{ path: "crear-genero", component: CrearGenero },
{ path: "crear-sala", component: CrearSala },
{ path: "crear-pelicula", component: CrearPeliculas },
{ path: "crear-funcion", component: CrearFunciones },
{ path: "reserva-tickets", component: ReservaTickets }
];