"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ReservationForm() {
  const [formData, setFormData] = React.useState({
    nombre: '',
    telefono: '',
    correo: '',
    cantidadPersonas: '',
    nivelExperiencia: '',
    informacionAdicional: '',
    desayuno: false, // Assuming 'desayuno' is a boolean value
    fecha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div >
      <Box
        className=' grid lg:grid-cols-4 flex '
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch', color: 'white' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className='text-white '>
          <h2 className=" text-2xl font-semibold">Datos Personales</h2>
          <TextField
            id="nombre"
            name="nombre"
            label="Nombre Completo"
            variant="outlined"
            value={formData.nombre}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            id="telefono"
            name="telefono"
            label="Teléfono"
            variant="outlined"
            value={formData.telefono}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            id="correo"
            name="correo"
            label="Correo Electrónico"
            variant="outlined"
            value={formData.correo}
            onChange={handleChange}
            fullWidth
            required
          />
        </div>

        <div className=' '>
          <h2 className="mb-3 text-2xl font-semibold">Datos de Participantes</h2>
          <TextField
            id="cantidadPersonas"
            name="cantidadPersonas"
            label="Cantidad De Personas"
            variant="outlined"
            type="number"
            value={formData.cantidadPersonas}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            id="nivelExperiencia"
            name="nivelExperiencia"
            label="Nivel de Experiencia del Grupo"
            variant="outlined"
            value={formData.nivelExperiencia}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            id="informacionAdicional"
            name="informacionAdicional"
            label="Información Adicional"
            variant="outlined"
            multiline
            rows={4}
            value={formData.informacionAdicional}
            onChange={handleChange}
            fullWidth
          />
        </div>

        <div className=' '>
          <h2 className="mb-3 text-2xl font-semibold">Tipo de Tour / Servicios</h2>
          <label>
            <input
              type="checkbox"
              id="desayuno"
              name="desayuno"
              checked={formData.desayuno}
              onChange={handleCheckboxChange}
            />
            Desayuno
          </label>
          {/* Add more options here */}
        </div>

        <div className=' '>
          <h2 className="mb-3 text-2xl font-semibold">Confirmación</h2>
          <TextField
            id="fecha"
            name="fecha"
            label="Fecha"
            variant="outlined"
            type="date"
            value={formData.fecha}
            onChange={handleChange}
            fullWidth
            required
          />
        </div>

        <div className="col-span-4 text-center">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: '16px' }}
          >
            Confirmar Reserva
          </Button>
        </div>
      </Box>
    </div>
  );
}
