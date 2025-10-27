import "../../styles/encabezados.css";
import "../../styles/stoic.css";

export default function Stoicism() {
  return (
    <div className="arriba">
      <code>STOICISM</code>
      <h5 className="texto">
        Discover the philosophy that teaches resilience, virtue, and inner
        peace.
      </h5>
      <img src="opc1.avif" alt="introduccion" />

      <div className="cuadro" style={{ marginTop: "50px" }}>
        <h4 className="titulo-seccion">
          <code>What is Stoicism?</code>
        </h4>
        <p className="parrafo">
          Stoicism is an ancient Greek philosophy founded in Athens by Zeno of
          Citium in the early 3rd century BC. It teaches that virtue (wisdom,
          courage, justice, and temperance) is the highest good and that we
          should focus on what we can control while accepting what we cannot.
        </p>
        <p className="parrafo2">
          The Stoics believed that living in harmony with nature and reason
          leads to a tranquil mind and a meaningful life. This philosophy has
          influenced countless leaders, thinkers, and individuals throughout
          history.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <img
          src="img1.png"
          alt="logo1"
          style={{ width: "270px", height: "200px" }}
        />
        <img
          src="im2.png"
          alt="logo1"
          style={{ width: "270px", height: "200px" }}
        />
        <img
          src="img3.png"
          alt="logo1"
          style={{ width: "290px", height: "200px" }}
        />
        <img
          src="img4.png"
          alt="logo1"
          style={{ width: "230px", height: "200px" }}
        />
      </div>

      <section className="seccion borde-amarillo">
        <h2 className="titulo-grande">The Great Stoics</h2>
        <div className="tarjetas">
          <div className="tarjeta borde-amarillo">
            <h3>Marcus Aurelius</h3>
            <p className="sub">
              The Philosopher Emperor
              <br />
              121–180 AD
            </p>
            <p className="parrafo">
              Roman Emperor who wrote <em>Meditations</em>, a personal journal
              of Stoic philosophy that remains one of the most influential works
              on the subject.
            </p>
            <blockquote className="cita">
              "You have power over your mind - not outside events. Realize this,
              and you will find strength."
            </blockquote>
          </div>

          <div className="tarjeta borde-amarillo">
            <h3>Epictetus</h3>
            <p className="sub">
              The Slave Turned Teacher
              <br />
              50–135 AD
            </p>
            <p className="parrafo">
              Born a slave, became one of the most influential Stoic teachers.
              His teachings were compiled in <em>The Enchiridion</em> and{" "}
              <em>Discourses</em>.
            </p>
            <blockquote className="cita">
              "It's not what happens to you, but how you react to it that
              matters."
            </blockquote>
          </div>

          <div className="tarjeta borde-amarillo">
            <h3>Seneca</h3>
            <p className="sub">
              The Statesman
              <br />4 BC–65 AD
            </p>
            <p className="parrafo">
              Roman statesman, dramatist, and philosopher. His letters and
              essays on Stoicism remain practical guides for daily living.
            </p>
            <blockquote className="cita">
              "We suffer more often in imagination than in reality."
            </blockquote>
          </div>
        </div>
      </section>

      <section className="seccion borde-amarillo">
        <h2 className="titulo-grande">Stoicism in Daily Life</h2>
        <div className="lista-daily">
          <div className="item borde-amarillo">
            <span>01</span>
            <div>
              <h5>Morning Meditation</h5>
              <p className="parrafo">
                Start your day by contemplating potential challenges and how
                you'll respond with virtue and reason.
              </p>
            </div>
          </div>
          <div className="item borde-amarillo">
            <span>02</span>
            <div>
              <h5>Negative Visualization</h5>
              <p className="parrafo">
                Imagine losing what you value to appreciate what you have and
                prepare for adversity.
              </p>
            </div>
          </div>
          <div className="item borde-amarillo">
            <span>03</span>
            <div>
              <h5>Evening Reflection</h5>
              <p className="parrafo">
                Review your day: What did you do well? Where could you improve?
                What lessons did you learn?
              </p>
            </div>
          </div>
          <div className="item borde-amarillo">
            <span>04</span>
            <div>
              <h5>Voluntary Discomfort</h5>
              <p className="parrafo">
                Occasionally practice discomfort (cold showers, fasting) to
                build resilience and appreciate comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion borde-amarillo">
        <h2 className="titulo-grande">Key Stoic Teachings</h2>
        <div className="cuadro-ensenanzas borde-amarillo">
          <p className="parrafo">
            <strong>The Dichotomy of Control</strong>
            <br />
            Some things are within our control (our thoughts, actions, values)
            and some are not. Focus your energy only on what you can control.
          </p>
          <p className="parrafo">
            <strong>Amor Fati (Love of Fate)</strong>
            <br />
            Not just accept what happens, but love it. Every event is an
            opportunity for growth and part of the natural order of the
            universe.
          </p>
          <p className="parrafo">
            <strong>Memento Mori (Remember Death)</strong>
            <br />
            Remembering our mortality helps us appreciate life, prioritize what
            matters, and live with urgency and purpose.
          </p>
          <p className="parrafo">
            <strong>Premeditatio Malorum</strong>
            <br />
            Visualizing potential misfortunes prepares us mentally and reduces
            anxiety about the future.
          </p>
        </div>
      </section>
    </div>
  );
}
