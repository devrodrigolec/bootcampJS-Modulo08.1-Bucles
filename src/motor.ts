import { NumeroPacientesPorEspecialidad, Pacientes } from './modelo';

/* Apartado 1 */

/* a)  Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría */
export const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let nuevaColeccionDePacientes: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      nuevaColeccionDePacientes = [
        ...nuevaColeccionDePacientes,
        { ...pacientes[i] },
      ];
    }
  }

  return nuevaColeccionDePacientes;
};

/* b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años. */

export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let nuevaColeccionDePacientes: Pacientes[] = [];
  const pacientesDePediatria = obtenPacientesAsignadosAPediatria(pacientes);

  for (let i = 0; i < pacientesDePediatria.length; i++) {
    if ( pacientesDePediatria[i].edad < 10) {
      nuevaColeccionDePacientes = [
        ...nuevaColeccionDePacientes,
        { ...pacientesDePediatria[i] },
      ];
    }
  }
  return nuevaColeccionDePacientes;
};

/* Apartado 2 */

/* Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

Es decir, crear una función que devuelve true/false dependiendo si se da la condición, algo así como: */

export const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].temperatura > 39 &&
      pacientes[i].frecuenciaCardiaca > 100
    ) {
      activarProctolo = true;
    }
  }

  return activarProctolo;
};

/* Apartado 3 */
/* El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia. */

export const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesReasignados: Pacientes[] = [];

  const pacientesDePediatria: Pacientes[] =
    obtenPacientesAsignadosAPediatria(pacientes);

  for (let i = 0; i < pacientesDePediatria.length; i++) {
    pacientesReasignados = [
      ...pacientesReasignados,
      { ...pacientesDePediatria[i], especialidad: "Medico de familia" },
    ];
  }

  return pacientesReasignados;
};

/* Apartado 4 */
/* Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría */

export const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  const pacientesPediatria = obtenPacientesAsignadosAPediatria(pacientes);

  return pacientesPediatria.length > 0 ? true : false;
};

/* Apartado 5  */

/* Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología */

export const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let numeroPacientesPorEspecialidad : NumeroPacientesPorEspecialidad = {
    medicoDeFamilia : 0,
    pediatria: 0,
    cardiologia: 0
  }

  for(let i = 0 ; i < pacientes.length; i++) {
    if(pacientes[i].especialidad === 'Cardiólogo'){
      numeroPacientesPorEspecialidad.cardiologia ++
    }
    if(pacientes[i].especialidad === 'Medico de familia'){
      numeroPacientesPorEspecialidad.medicoDeFamilia++
    }
    if(pacientes[i].especialidad === 'Pediatra'){
      numeroPacientesPorEspecialidad.pediatria++
    }
  }
  return numeroPacientesPorEspecialidad
};

