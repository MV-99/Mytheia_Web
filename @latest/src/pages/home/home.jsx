//home page 
import '../../styles/home.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import swal from 'sweetalert2';
import god from '../../../public/home.png';

function notificaccion() {
    swal.fire({
        imageUrl: god,
        imageHeight: 180,
        imageWidth: 140,
        imageAlt: 'a small image',
        title: "Oops...",
        text: "We dont have social media yet!",
        confirmButtonText: "Done",
        confirmButtonColor: 'black',
        background: 'black',
        color: 'white',


    });
}

export default function Home() {
    return (
        <div>
            <header className="navbar">
                <div className="navbar-left">
                    <h5><code>MYTHEIA</code></h5>
                </div>
                <nav className="navbar-right">
                    <h5>Home</h5>
                    <h5>Goddess</h5>
                    <h5>Stoicism</h5>
                    <h5>About</h5>
                    <h5>Contact</h5>
                </nav>
            </header>
            <div className="row-parent">
                <div className="row-info">
                    <div style={{ backgroundColor: 'black', marginTop: '60px' }}>
                        <h1 style={{ color: 'yellow' }}><code>MYTHEIA</code></h1>
                        <h5 style={{ color: 'white', marginTop: '-20px', fontSize: '15px' }}>¡Welcome to Mytheia!</h5>
                        <p style={{ color: 'white' }}>A journey through ancient wisdom and timeless mythology.</p>
                        <p style={{ color: 'white', marginTop: '-15px' }}>Here, we explore the powerful teachings of Stoicism, a philosophy that offers strength,</p>
                        <p style={{ color: 'white', marginTop: '-15px' }}>clarity, and inner peace, alongside the rich and fascinating world of the Greek gods.</p>
                        <p style={{ color: 'white', marginTop: '-15px' }}>Discover how ancient ideas can still guide us today, combining reason, myth,</p>
                        <p style={{ color: 'white', marginTop: '-15px' }}>and meaning in one inspiring space.</p>
                        <button className="boton">Go to Goddess</button>
                        <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'row', color: 'white', gap: '30px', fontSize: '10px', justifyContent: 'center' }}>
                            <XIcon onClick={notificaccion} />
                            <FacebookIcon onClick={notificaccion}/>
                            <YouTubeIcon onClick={notificaccion}/>
                            <EmailIcon onClick={notificaccion}/>
                            <InstagramIcon onClick={notificaccion}/>
                        </div>
                    </div>
                </div>
                <div className="row-img">
                    <img className="img-side" src="home.png" alt="el_logo" />
                </div>
            </div>
        </div>
    );
}