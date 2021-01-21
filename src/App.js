import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import IntroSection from './IntroSection';
import Nav from './Nav';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }
`

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <div>
        <header>
          <Header />
          {/*
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            </a>*/}
        </header>
        <main>
          <section>
            <IntroSection />
          </section>
          <nav>
            <Nav />
          </nav>
        </main>
      </div>
    </>
  );
}




export default App;
