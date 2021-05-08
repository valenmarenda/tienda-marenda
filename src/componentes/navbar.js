import { makeStyles } from '@material-ui/core/styles'
import {AppBar, Toolbar, IconButton, Typography, Button} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


const Navbar = () => {
    const classes = useStyles();
    

    return (
        <AppBar position="static">
          <Toolbar>
          <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content" id="panel1a-header">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
              </IconButton>
             </AccordionSummary>
             <AccordionDetails>
          <Typography>
              links del navbar
          </Typography>
        </AccordionDetails>
           </Accordion>
            <Typography variant="h6" className={classes.title}>
              TIENDA
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>)
}

export default Navbar; 