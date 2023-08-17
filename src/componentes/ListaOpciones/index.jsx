import "./ListaOpciones.css";

const ListaOpciones = (props) => {
  //Metodo map -> equipos.map((equipo, index) => {
  //
  // })
  const equipos = [
    "Programacion",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Movil",
    "Innovación y gestión",
  ];

  const manejarCambio = (e) =>{
    console.log("Cambio el equipo a:", e.target.value)
    props.actualizarEquipo(e.target.value)
  }

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
        {props.equipos.map((equipo, index) => (
          <option key={index} value={equipo}>{equipo}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
