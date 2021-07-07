import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './ItemDetailInfo.css';
import pagos from '../componentes/img/pagos.jpg';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: 700,
    border: 0,
    marginLeft: 10,
    marginRight:10, 
    
    
  },
  
}));



export default function ItemDetailInfo(desc, key) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const descProduct = desc.desc

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div key={key} className="container-detailInfo"  >
      
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          
        >
          <Tab  className="item-info-button" label="Detalle" {...a11yProps(0)} />
          <Tab label="Medios De Pago" {...a11yProps(1)} />
          <Tab label="Envios" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} >
        {descProduct} Ideal para todo tipo de piel. 
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className="container-pagos">
          <h3>Pagos a través de</h3>
          <img src={pagos} alt="pagoslogos"></img>
          <h3>Con tarjetas de crédito</h3>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <h3>TIPO DE ENVIO	CAPITAL FEDERAL Y GBA	RESTO DEL PAÍS	COMPRAS MAYORES A $4000
SUCURSAL ANDREANI	$350	$650	GRATIS A TODO EL PAÍS
A DOMICILIO	$350	$650	GRATIS A TODO EL PAÍS

Los envíos a domicilio se realizan a través de Andreani. El horario de entrega es de 9 a 18hs. Andreani te va enviar un link de seguimiento de tu pedido a través de un mail.

También podes elegir como opción retiro por sucursal de Perfumerías Pigmento y ahorrá el costo de envío. Hay locales de punto de entrega en CABA, GBA, La Plata, San Fernando y Luján. Ver listado completo de sucursales habilitadas
acá
.

Vas a recibir notificaciones del estado de tu pedido vía mail o podes dar seguimiento a tu pedido desde tu perfil.</h3>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}