import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import IntroSection from './IntroSection';

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
      <Router>
        <div>
          <header>
            <Header />
          </header>
          <main>
            <section>
              <IntroSection />
            </section>
          </main>
        </div>
      </Router>
    </>
  );
}




export default App;
