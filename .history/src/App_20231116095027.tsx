import { CookiesProvider } from 'react-cookie';
import './App.css';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
