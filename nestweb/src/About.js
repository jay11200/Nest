import about4 from './about-4.png'
import about3 from './about-3.png'
import about2 from './about-2.png'
function About(){
    return(
        <div className="container">
        <header>
          <h1>Welcome to Nest</h1>
        </header>
        <main>
          <section className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
            </p>
            <p>
              Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
            </p>
          </section>
          <section className="images">
            <img src={about2} alt="Food 1" />
            <img src={about3} alt="Food 2" />
            <img src={about4} alt="Food 3" />
          </section>
        </main>
      </div>
    )
}
export default About