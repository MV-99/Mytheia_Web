

export default function Workers(src, alt,nombre, funcion){
return(
<div style={{display:'flex',flexDirection:'column'}}>
<img src={src} alt={alt}/>
<h4>{nombre}</h4>
<h5>{funcion}</h5>
</div>
);
}