// import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav/Nav"
import Header from "./components/header/Header"
import About from "./components/about/About"
import Footer from "./components/footer/Footer"
import Contact from "./components/contact/Contact"
import Portfolio from "./components/portfolio/Portfolio"

function App () {
    return (
        <div>
            <Header />
            <Nav />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
