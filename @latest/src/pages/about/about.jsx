import '../../styles/encabezados.css'
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';


export default function About() {
  return (
    <div className="arriba"><code>ABOUT US</code>
      <h5 className="texto">¡Watch our Proverbs! </h5>
      <img src="athenea.png" alt="introduccion" style={{ marginLeft: '-160px', width: '550px', marginTop: '-30px' }} />
      {/*parte de los cuadros*/}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', marginTop: '40px' }}>
        {/*cuadrante1*/}
        <div style={{ display: 'flex', flexDirection: 'column', borderColor: 'white', borderRadius: '15px', backgroundColor: 'black', color: 'white', borderWidth: '1px', borderStyle: 'solid', width: '300px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', padding: '10px' }}>
          <HourglassEmptyOutlinedIcon style={{ fontSize: '80px', marginTop: '12px', color: 'yellow' }} />
          <div><code>Self-Control</code></div>
          <div style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'lighter', marginTop: '15px', letterSpacing:'0px' }}>Self-control is the ability to govern your emotions, thoughts, and actions.
            In Stoicism, mastering yourself is the first step toward mastering your life.
            Instead of reacting impulsively, you respond with intention and clarity. </div>
        </div>
        {/*cuadrante2*/}
        <div style={{ display: 'flex', flexDirection: 'column', borderColor: 'white', borderRadius: '15px', backgroundColor: 'black', color: 'white', borderWidth: '1px', borderStyle: 'solid', width: '300px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', padding: '10px' }}>
          <SpaOutlinedIcon style={{ fontSize: '80px', marginTop: '-10px', color: 'yellow' }} />
          <div ><code>Perseverance</code></div>
          <div style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'lighter', marginTop: '15px', letterSpacing:'0px' }}>Perseverance means pushing forward even when things get tough.
            Stoics believe in enduring hardship with courage and without complaint,
            knowing that adversity builds strength and character.</div>
        </div>
        {/*cuadrante3*/}
        <div style={{ display: 'flex', flexDirection: 'column', borderColor: 'white', borderRadius: '15px', backgroundColor: 'black', color: 'white', borderWidth: '1px', borderStyle: 'solid', width: '300px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', padding: '10px' }}>
          <LockOutlinedIcon style={{ fontSize: '80px', marginTop: '-10px', color: 'yellow' }} />
          <div><code>Discipline</code></div>
          <div style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'lighter', marginTop: '15px', letterSpacing:'0px' }}>Discipline is choosing what is right over what is easy.
            It’s the consistent practice of aligning your actions with your principles,
            even when motivation fades. For the Stoic, discipline is freedom.</div>
        </div>
      </div>
      {/*parte de que hacemos*/}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '60px' }}>
        <StarHalfOutlinedIcon style={{ color: 'yellow', fontSize: '80px' }} />
        <div style={{ color: 'white', fontSize: '35px', marginTop: '-10px' }}><code>What we do?</code></div>
        <p style={{ textAlign: 'center', color: 'white', fontSize: '15px', fontWeight: 'lighter', marginTop: '-10px', letterSpacing:'0px' }}>We help people take control of their lives through motivation,
          <br />discipline, and Stoic habits. Our mission is to guide individuals<br />
          toward lasting change—helping them build mental strength,<br />
          develop purpose-driven routines, and feel more fulfilled every day.
        </p>
        <VerifiedUserOutlinedIcon style={{ color: 'yellow', fontSize: '70px' }} />
        <div style={{ color: 'white', fontSize: '35px', marginTop: '-10px' }}><code>Our Team</code></div>
        <h5 style={{textAlign: 'center', color: 'white', fontSize: '15px', fontWeight: 'lighter', marginTop: '-10px' , letterSpacing:'0px'}}>Meet the people that work for your personal development
          and wellness era</h5>
        <div style={{display:'flex', flexDirection:'row', gap:'20px', marginTop:'10px'}}>
         aca van las imagenes
        </div>
      </div>

    </div>
  );
}
