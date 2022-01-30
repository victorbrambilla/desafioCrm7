import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GlobalStorage } from './contexts/GlobalStorage';
import RoutesList from './routes/RoutesList';



const theme = createTheme({
  palette: {
      mode:'dark',
     primary: {
      main: '#03C03C',
    },
    secondary: {
      main:  '#653496',
    },
  },
});

 function App() {
  return (
    <GlobalStorage>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <RoutesList/>
      </ThemeProvider>
    </GlobalStorage>
    
     
  )
}

export default App;
