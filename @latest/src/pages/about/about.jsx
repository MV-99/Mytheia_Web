// Función para hacer la imagen circular
function circularImageStyle(size = "155px") {
  return {
    width: size,
    height: size,
    objectFit: "cover",
    borderRadius: "50%",
    border: "2px solid yellow",
  };
}
import "../../styles/encabezados.css";
import "../../styles/about.css";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

export default function About() {
  return (
    <div className="arriba">
      <code>ABOUT US</code>
      <h5 className="texto">¡Watch our Proverbs! </h5>
      <img
        src="athenea.png"
        alt="introduccion"
        style={{ marginLeft: "-160px", width: "550px", marginTop: "-30px" }}
      />
      {/*parte de los cuadros*/}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        {/*cuadrante1*/}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderColor: "white",
            borderRadius: "15px",
            backgroundColor: "black",
            color: "white",
            borderWidth: "1px",
            borderStyle: "solid",
            width: "300px",
            height: "350px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: "bold",
            padding: "10px",
          }}
        >
          <HourglassEmptyOutlinedIcon
            style={{ fontSize: "80px", marginTop: "12px", color: "yellow" }}
          />
          <div>
            <code>Self-Control</code>
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: "15px",
              fontWeight: "lighter",
              marginTop: "15px",
              letterSpacing: "0px",
            }}
          >
            Self-control is the ability to govern your emotions, thoughts, and
            actions. In Stoicism, mastering yourself is the first step toward
            mastering your life. Instead of reacting impulsively, you respond
            with intention and clarity.{" "}
          </div>
        </div>
        {/*cuadrante2*/}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderColor: "white",
            borderRadius: "15px",
            backgroundColor: "black",
            color: "white",
            borderWidth: "1px",
            borderStyle: "solid",
            width: "300px",
            height: "350px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: "bold",
            padding: "10px",
          }}
        >
          <SpaOutlinedIcon
            style={{ fontSize: "80px", marginTop: "-10px", color: "yellow" }}
          />
          <div>
            <code>Perseverance</code>
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: "15px",
              fontWeight: "lighter",
              marginTop: "15px",
              letterSpacing: "0px",
            }}
          >
            Perseverance means pushing forward even when things get tough.
            Stoics believe in enduring hardship with courage and without
            complaint, knowing that adversity builds strength and character.
          </div>
        </div>
        {/*cuadrante3*/}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderColor: "white",
            borderRadius: "15px",
            backgroundColor: "black",
            color: "white",
            borderWidth: "1px",
            borderStyle: "solid",
            width: "300px",
            height: "350px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: "bold",
            padding: "10px",
          }}
        >
          <LockOutlinedIcon
            style={{ fontSize: "80px", marginTop: "-10px", color: "yellow" }}
          />
          <div>
            <code>Discipline</code>
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: "15px",
              fontWeight: "lighter",
              marginTop: "15px",
              letterSpacing: "0px",
            }}
          >
            Discipline is choosing what is right over what is easy. It’s the
            consistent practice of aligning your actions with your principles,
            even when motivation fades. For the Stoic, discipline is freedom.
          </div>
        </div>
      </div>
      {/*parte de que hacemos*/}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginTop: "60px",
        }}
      >
        <StarHalfOutlinedIcon style={{ color: "yellow", fontSize: "80px" }} />
        <div style={{ color: "white", fontSize: "35px", marginTop: "-10px" }}>
          <code>What we do?</code>
        </div>
        <p
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "15px",
            fontWeight: "lighter",
            marginTop: "-10px",
            letterSpacing: "0px",
          }}
        >
          We help people take control of their lives through motivation💪,
          <br />
          discipline, and Stoic habits. Our mission is to guide individuals
          <br />
          toward lasting change💗, helping them build mental strength,
          <br />
          develop purpose, driven routines, and feel more fulfilled every day⚡
        </p>
        <VerifiedUserOutlinedIcon
          style={{ color: "yellow", fontSize: "70px" }}
        />
        <div style={{ color: "white", fontSize: "35px", marginTop: "-10px" }}>
          <code>Our Team</code>
        </div>
        <h5
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "15px",
            fontWeight: "lighter",
            marginTop: "-10px",
            letterSpacing: "0px",
          }}
        >
          Meet the people that work for your personal development and wellness
          era🌈
        </h5>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "70px",
            marginTop: "10px",
          }}
        >
          {/*foto1*/}
          <div>
            <img src="lanita.png" alt="lanita" style={circularImageStyle()} />
            <h4
              style={{
                color: "white",
                fontWeight: "normal",
                letterSpacing: "0px",
                fontSize: "18px",
                marginTop: "8px",
              }}
            >
              Elizabeth Woolridge Grant
            </h4>
            <h5
              style={{
                color: "yellow",
                letterSpacing: "0px",
                fontSize: "15px",
                marginTop: "-20px",
              }}
            >
              Founder-Full development
            </h5>
            <button
              onClick={() =>
                window.open("https://www.youtube.com/@LanaDelRey", "_blank")
              }
              className="about-btn-anim"
            >
              Watch her job
            </button>
          </div>
          {/*foto2*/}
          <div>
            <img
              src="theweek.jpg"
              alt="the week"
              style={circularImageStyle()}
            />
            <h4
              style={{
                color: "white",
                fontWeight: "normal",
                letterSpacing: "0px",
                fontSize: "18px",
                marginTop: "8px",
              }}
            >
              Abel Makkonen Tesfaye
            </h4>
            <h5
              style={{
                color: "yellow",
                letterSpacing: "0px",
                fontSize: "15px",
                marginTop: "-20px",
              }}
            >
              Writer/Investigator
            </h5>
            <button
              onClick={() =>
                window.open("https://www.youtube.com/@TheWeeknd", "_blank")
              }
              className="about-btn-anim"
            >
              Watch his job
            </button>
          </div>
          {/*foto3*/}
          <div>
            <img src="ariana.jpg" alt="ari" style={circularImageStyle()} />
            <h4
              style={{
                color: "white",
                fontWeight: "normal",
                letterSpacing: "0px",
                fontSize: "18px",
                marginTop: "8px",
              }}
            >
              Ariana Grande-Butera
            </h4>
            <h5
              style={{
                color: "yellow",
                letterSpacing: "0px",
                fontSize: "15px",
                marginTop: "-20px",
              }}
            >
              IU-Design
            </h5>
            <button
              onClick={() =>
                window.open("https://www.youtube.com/@ArianaGrande", "_blank")
              }
              className="about-btn-anim"
            >
              Watch her job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/***
 * <button onClick={() => window.open('https://www.ejemplo.com', '_blank')}>
    Ir al sitio
   </button>
 */
