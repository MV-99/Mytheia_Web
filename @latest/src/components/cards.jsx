export default function Cards({
  src,
  alt,
  style,
  style2,
  titulo,
  style3,
  parrafo,
  texto,
  onClick
}) {
  return (
    <div
      style={{
        width: "300px",
        height: "480px",
        backgroundColor: "black",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "white",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img src={src} alt={alt} style={style} />
      <h1 style={style2}>{titulo}</h1>
      <p style={style3}>{parrafo}</p>
      <button
        style={{
          width: "130px",
          height: "40px",
          borderRadius: "40px",
          background: " linear-gradient(to right, yellow, rgb(249, 156, 5))",
          color: "black",
          marginLeft: "20px",
          fontWeight: "bold",
        }}
        onClick={onClick}
      >
        {texto}
      </button>
    </div>
  );
}
