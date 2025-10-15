import '../../styles/home.css'

export default function Navbar(){
    return(
         <header className="navbar">
                <div className="navbar-left">
                    <h5><code>MYTHEIA</code></h5>
                </div>
                <nav className="navbar-right">
                    <h5>Home</h5>
                    <h5><Gods></Gods></h5>
                    <h5>Stoicism</h5>
                    <h5>About</h5>
                    <h5>Contact</h5>
                </nav>
            </header>
    );
}