import { BrowserRouter } from 'react-router-dom' //cotnrolador de rotas
import GlobalStyle from './styles/global'
import Routes from './routes';

function App() {
  return (
   <BrowserRouter>
   <Routes></Routes>
   <GlobalStyle></GlobalStyle>
   </BrowserRouter>
    
    
    
    
  );
}

export default App;
