//home page
import "../../styles/home.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import home from "../../../public/home.png";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";

function notificaccion() {
  Swal.fire({
    imageUrl: home,
    imageHeight: 180,
    imageWidth: 140,
    imageAlt: "a small image",
    title: "Oops...",
    text: "We dont have social media yet!",
    confirmButtonText: "Done",
    confirmButtonColor: "black",
    background: "black",
    color: "white",
  });
}
function notificaccion2() {
  Swal.fire({
    imageUrl: home,
    imageHeight: 180,
    imageWidth: 140,
    imageAlt: "a small image",
    title: "Oops...",
    text: "We dont have greek goddess here yet!",
    confirmButtonText: "Done",
    confirmButtonColor: "black",
    background: "black",
    color: "white",
  });
}

//funcion de correo
function Enviar() {
  //parte del correo

  const destinatario = "kellyvallecillo999@gmail.com";
  const asunto = encodeURIComponent("Hola kelly Vallecillo☀️🦋");
  const cuerpo = encodeURIComponent(
    "Este correo fue generado desde mi web en React!🎉⚡"
  );

  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${asunto}&body=${cuerpo}`;
  window.open(gmailURL, "_blank");
}

export function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar-left">
        <h5>
          <code>MYTHEIA</code>
        </h5>
      </div>
      <nav className="navbar-right">
        <h5 onClick={() => navigate("/")}>Home</h5>
        <h5 onClick={() => navigate("/goddess")}>Gods</h5>
        <h5 onClick={() => navigate("/stoicism")}>Stoicism</h5>
        <h5 onClick={() => navigate("/about")}>About</h5>
        <h5 onClick={() => navigate("/contact")}>Contact</h5>
      </nav>
    </header>
  );
}

export default function Home() {
  return (
    <div>
      <div className="row-parent">
        <div className="row-info">
          <div style={{ backgroundColor: "black", marginTop: "60px" }}>
            <h1 style={{ color: "yellow" }}>
              <code>MYTHEIA</code>
            </h1>
            <h5
              style={{ color: "white", marginTop: "-20px", fontSize: "15px" }}
            >
              ¡Welcome to Mytheia!
            </h5>
            <p style={{ color: "white" }}>
              A journey through ancient wisdom and timeless mythology⚡
            </p>
            <p style={{ color: "white", marginTop: "-15px" }}>
              Here, we explore the powerful teachings of Stoicism 💪, a
              philosophy that offers strength,
            </p>
            <p style={{ color: "white", marginTop: "-15px" }}>
              clarity, and inner peace, alongside the rich and fascinating world
              of the Greek gods🦋
            </p>
            <p style={{ color: "white", marginTop: "-15px" }}>
              Discover how ancient ideas can still guide us today, combining
              reason, myth,
            </p>
            <p style={{ color: "white", marginTop: "-15px" }}>
              and meaning in one inspiring space🪙
            </p>
            <button
              onClick={() =>
                window.open("https://www.youtube.com/@DailyStoic", "_blank")
              }
              className="boton"
            >
              Go to video demo
            </button>
            <div
              style={{
                marginTop: "50px",
                display: "flex",
                flexDirection: "row",
                color: "white",
                gap: "30px",
                fontSize: "10px",
                justifyContent: "center",
              }}
            >
              <XIcon onClick={notificaccion} />
              <FacebookIcon onClick={notificaccion} />
              <YouTubeIcon
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/@RealStoicJournal",
                    "_blank"
                  )
                }
              />
              <EmailIcon onClick={Enviar} />
              <InstagramIcon onClick={notificaccion} />
            </div>
          </div>
        </div>
        <div className="row-img">
          <img className="img-side" src="home.png" alt="el_logo" />
        </div>
        <div>
          <h2 style={{ color: "yellow", fontSize: "30px" }}>
            <code>More than just a tool</code>
          </h2>
          <p style={{ color: "white", marginTop: "-10px" }}>
            Explore what else we can do for you 💗
          </p>
        </div>
        {/*segunda parte de home 0*/}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            marginTop: "50px",
          }}
        >
          {/*cards componente*/}
          <div
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "black",
              borderStyle: "solid",
              borderColor: "white",
              borderWidth: "1px",
              borderRadius: "10px",
            }}
          >
            <AccessibilityIcon
              style={{ color: "yellow", fontSize: "60px", marginTop: "20px" }}
            />
            <h3 style={{ color: "white", marginTop: "-8px" }}>More Actions</h3>
            <p style={{ color: "white", textAlign: "center" }}>
              We helps you take more action by teaching you to focus on what you
              can control, build mental strength, and stay consistent even when
              motivation fades.
            </p>
          </div>
          {/*cards componente 1*/}
          <div
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "black",
              borderStyle: "solid",
              borderColor: "white",
              borderWidth: "1px",
              borderRadius: "10px",
            }}
          >
            <AccessTimeIcon
              style={{ color: "yellow", fontSize: "55px", marginTop: "20px" }}
            />
            <h3 style={{ color: "white", marginTop: "-8px" }}>More Time</h3>
            <p style={{ color: "white", textAlign: "center" }}>
              We helps you gain more time by teaching you to focus on what truly
              matters and cut out distractions that waste your energy.
            </p>
          </div>
          {/*cards componente 2*/}
          <div
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "black",
              borderStyle: "solid",
              borderColor: "white",
              borderWidth: "1px",
              borderRadius: "10px",
            }}
          >
            <CalendarMonthIcon
              style={{ color: "yellow", fontSize: "50px", marginTop: "20px" }}
            />
            <h3 style={{ color: "white", marginTop: "-8px" }}>More Plans</h3>
            <p style={{ color: "white", textAlign: "center" }}>
              We helps you create better plans by showing how discipline and
              clarity turn goals into consistent, daily actions.
            </p>
          </div>
          {/*cards componente 3*/}
          <div
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "black",
              borderStyle: "solid",
              borderColor: "white",
              borderWidth: "1px",
              borderRadius: "10px",
            }}
          >
            <PaidIcon
              style={{ color: "yellow", fontSize: "50px", marginTop: "20px" }}
            />
            <h3 style={{ color: "white", marginTop: "-8px" }}>More Money</h3>
            <p style={{ color: "white", textAlign: "center" }}>
              We helps you make more money by strengthening your mindset,
              improving your habits, and keeping you focused on long-term
              success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
