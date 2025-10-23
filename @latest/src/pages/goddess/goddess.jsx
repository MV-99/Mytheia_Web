import "../../styles/encabezados.css";
import Cards from '../../components/cards';

export default function Goddess() {
  return (
    <div>
    <div className="arriba">
      <code>GODS</code>
      <h5 className="texto">
        Goddess in relation with discipline and knowledge
      </h5>
      <img style={{width:'250px', height:'350px'}} src="home2.png" alt="introduccion" />
    </div>
    <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
    <div style={{display:'flex', flexDirection:'row', gap:'20px',marginTop:'60px'}}>
      {/*cards*/}
    <Cards 
     src="cards/apollo.png"
     alt="card1"
     style={{width:'200px', height:'200px',marginLeft:'50px',marginTop:'10px',borderRadius:'15px'}}
     titulo="Apollo"
     style2={{color:'yellow',fontWeight:'bolder',fontSize:'22px'}}
     parrafo=" Apollo was one of the most important gods in Greek mythology.
      He was the god of the sun, music, poetry, and prophecy.
       Son of Zeus and Leto, and twin brother of Artemis.
       Apollo was known for his beauty and wisdom. "
      style3={{color:'white',fontSize:'15px', fontWeight:'lighter',marginTop:'-10px', alignText:'justify'}}
      texto="Ver más"
    />
    <Cards 
     src="cards/atenea.png"
     alt="card1"
     style={{width:'200px', height:'200px',marginLeft:'50px',marginTop:'10px',borderRadius:'15px'}}
     titulo="Athena"
     style2={{color:'yellow',fontWeight:'bolder',fontSize:'22px'}}
     parrafo="  Athena was the Greek goddess of wisdom and war.
       She was born fully grown and armored from Zeus’s forehead.
       Athena was also the protector of the city of Athens.
       Known for her courage, strategy, and fairness. "
      style3={{color:'white',fontSize:'15px', fontWeight:'lighter',marginTop:'-10px', alignText:'justify'}}
      texto="Ver más"
    />
    <Cards 
     src="cards/hefesto.png"
     alt="card1"
     style={{width:'100px', height:'180px',marginLeft:'90px',marginTop:'10px', borderRadius:'15px'}}
     titulo="Hephaestus"
     style2={{color:'yellow',fontWeight:'bolder',fontSize:'22px'}}
     parrafo="Hephaestus was the Greek god of fire and blacksmiths.
       He was known for his skill in metalworking and crafting.
       Despite his physical imperfections, he created powerful weapons for gods.
        He was married to Aphrodite, the goddess of love and beauty. "
      style3={{color:'white',fontSize:'15px', fontWeight:'lighter',marginTop:'-10px', alignText:'justify'}}
      texto="Ver más"
    />
    </div>
     <div style={{display:'flex', flexDirection:'row', gap:'20px',marginTop:'60px'}}>
      {/*cards*/}
    <Cards 
     src="cards/hermes.png"
     alt="card1"
     style={{width:'140px', height:'200px',marginLeft:'80px',marginTop:'10px',borderRadius:'15px'}}
     titulo="Hermes"
     style2={{color:'yellow',fontWeight:'bolder',fontSize:'22px'}}
     parrafo="   Hermes was the Greek god of travel, trade, and communication.
        He was known as the messenger of the gods.
        Fast and clever, he wore winged sandals and a winged helmet.
        Hermes also guided souls to the underworld."
      style3={{color:'white',fontSize:'15px', fontWeight:'lighter',marginTop:'-10px', alignText:'justify'}}
      texto="Ver más"
    />
    <Cards 
     src="cards/hestia.png"
     alt="card1"
     style={{width:'200px', height:'200px',marginLeft:'50px',marginTop:'10px',borderRadius:'15px'}}
     titulo="Hestia"
     style2={{color:'yellow',fontWeight:'bolder',fontSize:'22px'}}
     parrafo=" Hestia was the Greek goddess of the hearth and home.
       She symbolized family, stability, and domestic harmony.
       Hestia was one of the original Olympian gods.
       She was known for her gentle and peaceful nature. "
      style3={{color:'white',fontSize:'15px', fontWeight:'lighter',marginTop:'-10px', alignText:'justify'}}
      texto="Ver más"
    />
    <Cards 
     src="cards/merteo.avif"
     alt="card1"
     style={{width:'210px', height:'200px',marginLeft:'40px',marginTop:'10px',borderRadius:'15px'}}
     titulo="Morpheus"
     style2={{color:'yellow',fontWeight:'bolder',fontSize:'22px'}}
     parrafo="Morpheus was the Greek god of dreams.
       He could shape and appear in dreams as a human figure.
       Morpheus communicated divine messages through sleep.
       He was the son of Hypnos, the god of sleep. "
      style3={{color:'white',fontSize:'15px', fontWeight:'lighter',marginTop:'-10px', alignText:'justify'}}
      texto="Ver más"
    />
    </div>
     <div style={{display:'flex', flexDirection:'row', gap:'20px',marginTop:'60px'}}>
      {/*cards*/}
    <Cards 
     src="cards/mike.png"
     alt="card1"
     style={{width:'140px', height:'200px',marginLeft:'80px',marginTop:'10px',borderRadius:'15px'}}
     titulo="Nike"
     style2={{color:'yellow',fontWeight:'bolder',fontSize:'22px'}}
     parrafo=" Nike was the Greek goddess of victory.
        She personified success in both war and peaceful competition.
        Nike was often depicted with wings and a laurel wreath.
         She was a close companion of Zeus and Athena."
      style3={{color:'white',fontSize:'15px', fontWeight:'lighter',marginTop:'-10px', alignText:'justify'}}
      texto="Ver más"
    />
    <Cards 
     src="cards/zeus.png"
     alt="card1"
     style={{width:'265px', height:'180px',marginLeft:'18px',marginTop:'30px',borderRadius:'15px'}}
     titulo="Zeus"
     style2={{color:'yellow',fontWeight:'bolder',fontSize:'22px'}}
     parrafo=" Zeus was the king of the Greek gods.
       He ruled the sky and controlled thunder and lightning.
       Zeus was known for his power, authority, and many offspring.
       He lived on Mount Olympus with the other Olympian gods."
      style3={{color:'white',fontSize:'15px', fontWeight:'lighter',marginTop:'-10px', alignText:'justify'}}
      texto="Ver más"
    />
    </div>
    </div>
    </div>
    
  );
}
