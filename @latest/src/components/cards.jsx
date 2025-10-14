

export default function Cards({ src, alt, style, style2, titulo, style3, parrafo, texto }) {
    return (
        <div style={{ width: '400px',height: '400px', backgroundColor: 'white' }}>
            <img src={src} alt={alt} style={style} />
            <h1 style={style2}>{titulo}</h1>
            <p style={style3}>{parrafo}</p>
            <button style={{ width: '100px', height: '20px' }}>{texto}</button>
        </div>


    );
}