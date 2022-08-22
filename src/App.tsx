import { ToastContainer } from 'react-toastify';
import { GlobalStyle, theme } from 'global'
import { Routes } from 'routes'
import { ThemeProvider } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
