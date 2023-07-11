import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Exp from './components/Exp';
import Footer from './components/Footer';

function App() {
  return (
    <body className="App">
      <Header className="App-header" class="App-header">
      </Header>
      <main>
        <About className="About" class="about"></About>
        <Projects className="Projects" class="projects"></Projects>
        <Skills className="Skills" class="skills"></Skills>
        <Exp className="Exp" class="exp"></Exp>
      </main>
      <Footer></Footer>
    </body>
  );
}

export default App;
