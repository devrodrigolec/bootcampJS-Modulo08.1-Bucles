import { pacientes } from "./modelo";

import {
  obtenPacientesAsignadosAPediatria,
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios,
  activarProtocoloUrgencia
} from "./motor";

/* Apartado 1 */

/* a)  Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría */

const pacientesAsignadosAPediatria =
  obtenPacientesAsignadosAPediatria(pacientes);
console.log({ pacientesAsignadosAPediatria });

/* b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años. */

const pacientesAsignadosAPediatriaMenos10Anios =
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log({ pacientesAsignadosAPediatriaMenos10Anios });

/* Apartado 2 */

/* Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

Es decir, crear una función que devuelve true/false dependiendo si se da la condición, algo así como: */

const protocoloDeUgencia = activarProtocoloUrgencia(pacientes);

console.log({protocoloDeUgencia});
