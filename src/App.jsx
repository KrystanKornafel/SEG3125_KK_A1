//import { Routes, Route, Link } from "react-router-dom";
import './App.css'
{/*Name: Krystan Kornafel*/}
{/*Assignment: SEG3125 Assignment 1 */}
{/*Description: This is the main React page that will be used to display all the required information. There are 4 cards that can be clicked on. Each one will redirect the user to the specified page. */}


function App() {
  //const [count, setCount] = useState(0)
  return (
        <div className="container mt-5">
            <div className="mb-5">
              {/* Colour codes can be found from here: https://www.w3schools.com/html/html_colors_hex.asp */}
              {/* Customization tutorial I used can be found here: https://stackoverflow.com/questions/62917079/react-bootstrap-rounded-corners-for-navbar */}
              <div className="border rounded p-3 mb-4"style={{ backgroundColor: "#C8B6FF", border: "1px solid #334155" }}>
                <h1>Welcome to my website!</h1>
              </div>
            <div className="border rounded p-3 mb-4"style={{ backgroundColor: "#C8B6FF", border: "1px solid #334155" }}>
              <h3>Krystan Kornafel</h3>
              <img src="/Me.jpeg"alt="me" className="float-start me-3 rounded" style={{ width: "150px" }}/>
              <p>I am a third year Software Engineering student. I like hiking, music, adventures and logic puzzles. I have a bit of programming experience in the area of web development, however, it has been a few years since my last project, so I need to refresh my skills. I am currently taking a design course to learn various design elements, and by the end of the semester, I hope to be proficient in React. My workflow consists of understanding the requirements, creating a list of to-dos, creating a general layout of the project as I am more visual, and then implementing what I designed.</p>   
              <h3><br />Please see a few links below for reference:</h3>
            {/*Put the links here*/}
              <a href="https://www.nngroup.com/" target="_blank">The NN/g website</a>
              <br />
              <a href="https://www.w3schools.com/REACT/react_router.asp" target="_blank">React Router Tutorial for Bootstrap Cards I used</a>
              <br />
              <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank">Bootstrap+React Tutorial I used</a>
            </div>
          </div>
          <div className="row g-4">
            {/*put images here*/}
            {/*For reference, I used this link to learn more about cards: https://getbootstrap.com/docs/4.0/components/card/*/}
            {/*I also used the following link to learn how to use Routers: https://www.w3schools.com/REACT/react_router.asp*/}
            {/*This first image came from: https://www.magnific.com/premium-ai-image/hairdresser-beauty-salon-barber-shop-female-male-men-women-modern-vintage-retro-illustration-photo_341728630.htm*/}
              <div className="card" style={{ width: "18rem" }}>
                <a href="/Hairdresser.html" target="_blank">
                <img src="/Hairdresser.png" className="card-img-top" alt="hairdresser" />
                <div className="card-body">
                  <h5 className="card-title">Hairdresser</h5>
                  <p className="card-text">Here at our salon, we work hard to ensure all our customers get the best service!</p>
                </div>
                </a>
              </div>

            {/*This second image came from: https://www.magnific.com/free-photos-vectors/memory-game-remembering*/}
            <div className="card" style={{ width: "18rem" }}>
              <a href="/MemoryGame.html" target="_blank">
                <img src="/MemoryGame.png" className="card-img-top" alt="memory game" />
                <div className="card-body">
                  <h5 className="card-title">Memory Game</h5>
                  <p className="card-text">Test your memory with a little fun challenge! Click here to try for yourself!</p>
                </div>
              </a>
            </div>

            {/*This third image came from: https://thevarsity.ca/2015/03/16/you-can-probably-find-it-here/*/}
            <div className="card" style={{ width: "18rem" }}>
              <a href="/ECommerceStore.html" target="_blank">
                <img src="/ECommerceStore.png" className="card-img-top" alt="e-commerce store" />
                <div className="card-body">
                  <h5 className="card-title">E-commerce Store</h5>
                  <p className="card-text">We specialize in vintage clothing and accessories! Come check us out!</p>
                </div>
              </a>
            </div>

            {/*This fourth image came from: https://medium.com/data-science/why-data-analytics-is-gaining-hype-in-the-21st-century-b7b1ca289f09*/}
            <div className="card" style={{ width: "18rem" }}>
              <a href="/Analytics.html" target="_blank">
                <img src="/Analytics.png" className="card-img-top" alt="analytics" />
                <div className="card-body">
                  <h5 className="card-title">Analytics</h5>
                  <p className="card-text">Check out our latest analytics!</p>
                </div>
              </a>
            </div>

          </div>
        </div>
        
  )
}

export default App;
