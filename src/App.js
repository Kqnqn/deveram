import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
// novi nacin importa theme i provajdera
import{createTheme, ThemeProvider}from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors'
import Layoout from './components/Layout'


/* definisanje promjena u default temi pogledati: 
https://mui.com/customization/default-theme/#main-content */
const theme = createTheme({
  palette:{
    primary:{
      main : '#616161'
    },
    secondary: purple
  },
  typography:{
    fontFamily:'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,

    
  }
})

function App() {
  return (
    // sve wrapati u ThemeProvider komponentu i pozvati const theme
    <ThemeProvider theme={theme}>
    <Router>
      <Layoout>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
      </Layoout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
