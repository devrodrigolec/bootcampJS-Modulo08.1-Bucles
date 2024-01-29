import { Pacientes, pacientes } from "./modelo";

import {
  obtenPacientesAsignadosAPediatria,
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios,
  activarProtocoloUrgencia,
  reasignaPacientesAMedicoFamilia,
  HayPacientesDePediatria,
} from "./motor";

console.log({pacientes});

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

console.log({ protocoloDeUgencia });

/* Apartado 3 */
/* El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia. */

const pacientesPediatriaReasignadosAMedicoDeFamilia : Pacientes[] = reasignaPacientesAMedicoFamilia(pacientes);

console.log({pacientesPediatriaReasignadosAMedicoDeFamilia});


/* Apartado 4 */
/* Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría */

const existePacientesDePediatria = HayPacientesDePediatria(pacientes);

console.log({existePacientesDePediatria})