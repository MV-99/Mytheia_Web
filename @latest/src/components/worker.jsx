

export default function Workers({src, alt,nombre, funcion, style, texto2}){
return(
<div style={{display:'flex',flexDirection:'column'}}>
<img src={src} alt={alt}/>
<h4 style={style}>{nombre}</h4>
<h5>{funcion}</h5>
<button style={style}>{texto2}</button>
</div>
);
}