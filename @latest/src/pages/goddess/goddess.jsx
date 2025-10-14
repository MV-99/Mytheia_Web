import "../../styles/encabezados.css";
import Cards from '../../components/cards';

export default function Goddess() {
  return (
    <div>
    <div className="arriba">
      <code>GODDESS</code>
      <h5 className="texto">
        Goddess in relation with discipline and knowledge
      </h5>
      <img style={{width:'250px', height:'350px'}} src="home2.png" alt="introduccion" />
    </div>
    <Cards/>
    </div>
    
  );
}
