


import '../../styles/contact.css';
import swal from 'sweetalert2';

function Notificacion() {
  swal.fire({
    title: "Oops...",
    icon:'info',
    iconColor:'yellow',
    text: "We dont have email  yet!",
    confirmButtonText: "Done",
    confirmButtonColor: "black",
    background: "black",
    color: "white",
  })
}

export default function Contact() {
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "20px",
        gap: "20px",
      }}
    >
      <img src="home3.png" alt="about" style={{ width: "270px" }} />
      <h1 style={{ color: 'yellow', marginLeft: '-300px', zindex: '1000', marginTop: '-10px' }}>Contact Us</h1>
      <div style={{ marginTop: '-60px', display: 'flex', flexDirection: 'column' }}>
        <h4 style={{ marginLeft: '-300px', marginBottom: '5px', fontSize: '18px', letterSpacing: '3px' }}> <code>Name</code></h4>
        <input type="text" placeholder="  Write your name" style={{
          width: '350px', height: '35px', borderRadius: '15px', outline: 'none',
          borderColor: 'white', backgroundColor: 'black', color: 'white',paddingLeft: '15px'
        }} />
        <h4 style={{ marginLeft: '-300px', marginBottom: '5px', fontSize: '18px', letterSpacing: '3px' }}> <code>Email</code></h4>
        <input type="email" placeholder="  Write your email" style={{
          width: '350px', height: '35px', borderRadius: '15px', outline: 'none',
          borderColor: 'white', backgroundColor: 'black', color: 'white',paddingLeft: '15px'
        }} />
        <h4 style={{ marginLeft: '-270px', marginBottom: '5px', fontSize: '18px', letterSpacing: '3px' }}> <code>Message</code></h4>
        <input type="email" placeholder="  Write your email" style={{
          width: '350px', height: '100px', borderRadius: '15px', outline: 'none',
          borderColor: 'white', backgroundColor: 'black', color: 'white',paddingLeft: '15px'
        }} />
        <button className="contact-btn-anim"  onClick={Notificacion} style={{ width: '373px', height: '40px', borderRadius: '15px', backgroundColor: 'yellow', color: 'black', cursor: 'pointer', marginTop: '20px', fontWeight: 'bold' }}>Send Message</button>
      </div>
    </div>
  );
}