"use client";
import { useState } from 'react';

export default function Reserva() {
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: '',
    telefono: '',
    correo: '',
  });

  const [datosParticipantes, setDatosParticipantes] = useState({
    cantidadPersonas: '',
    nivelExperiencia: '',
    informacionAdicional: '',
    fecha: '',
  });

  const handleDatosPersonalesChange = (e) => {
    const { name, value } = e.target;
    setDatosPersonales({ ...datosPersonales, [name]: value });
  };

  const handleDatosParticipantesChange = (e) => {
    const { name, value } = e.target;
    setDatosParticipantes({ ...datosParticipantes, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agregar aquí la lógica de envío de la reserva
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit} className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

        {/* Sección de Datos Personales */}
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">Datos Personales</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            <input
              type="text"
              name="nombre"
              value={datosPersonales.nombre}
              onChange={handleDatosPersonalesChange}
              placeholder="Nombre Completo"
              required
            />
            <input
              type="tel"
              name="telefono"
              value={datosPersonales.telefono}
              onChange={handleDatosPersonalesChange}
              placeholder="Teléfono"
              required
            />
            <input
              type="email"
              name="correo"
              value={datosPersonales.correo}
              onChange={handleDatosPersonalesChange}
              placeholder="Correo Electrónico"
              required
            />
          </p>
        </div>

        {/* Sección de Datos de Participantes */}
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">Datos de Participantes</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            <input
              type="number"
              name="cantidadPersonas"
              value={datosParticipantes.cantidadPersonas}
              onChange={handleDatosParticipantesChange}
              placeholder="Cantidad De Personas"
              required
            />
            <input
              type="text"
              name="nivelExperiencia"
              value={datosParticipantes.nivelExperiencia}
              onChange={handleDatosParticipantesChange}
              placeholder="Nivel de Experiencia del Grupo en General"
              required
            />
            <textarea
              name="informacionAdicional"
              value={datosParticipantes.informacionAdicional}
              onChange={handleDatosParticipantesChange}
              placeholder="Información Adicional de los Participantes"
              rows="4"
            />
          </p>
        </div>

        {/* Sección de Tipo de Tour / Servicios */}
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">Tipo de Tour / Servicios</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            <label>
              <input
                type="checkbox"
                name="desayuno"
                value="Desayuno"
              />{' '}
              Desayuno
            </label>
            {/* Agrega más opciones de servicios aquí */}
          </p>
        </div>

        {/* Sección de Confirmación */}
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">Confirmación</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            <input
              type="date"
              name="fecha"
              value={datosParticipantes.fecha}
              onChange={handleDatosParticipantesChange}
              required
            />
          </p>
        </div>

        {/* Botón de Envío */}
        <div className="col-span-4 text-center">
          <button
            className="mt-8 px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            type="submit"
          >
            Confirmar Reserva
          </button>
        </div>
      </form>
    </main>
  );
}
