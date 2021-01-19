import logo from './logo.svg';
import { createGlobalStyle } from 'styled-components';

import Header from './Header';

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
          {/*<img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            </a>*/}
        </header>
      </div>
    </>
  );
}




export default App;
