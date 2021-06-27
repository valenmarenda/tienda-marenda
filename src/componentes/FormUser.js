import React, {useState} from 'react';
import { getFireStore} from '../firebase/firebase';
import { useCart} from '../context/CartContext';
import {Link} from 'react-router-dom';

const FormUser = (itemProduct, stock ) => {
   const [orderId, setOrderId] = useState([]);
    const [loading, setLoading]= useState();
    
    
    //Datos del carrito//
    const cartInfo = useCart();
    const totalPriceItems= ()=>{
        return cartInfo.totalPrice() 
       }

     //Datos del formulario//
    const [datos, setDatos] = useState({
        nombre: '',
        phone: '',
        email:''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value,
        })
    }

    const enviarDatos = (e) => {
         e.preventDefault()
         const buyer ={
             nombre: datos.nombre,
             tel: datos.phone,
             email: datos.email
         }
      //Crea la orden para firebase//


    const db = getFireStore();
    const ordenes = db.collection("ordenes");
    const newOrden = { 
     buyer: buyer,
     items: itemProduct.value,
     date:new Date().getTime(),
      total: totalPriceItems()
     }

    //Enviar la orden a Firebase//
    ordenes.add(newOrden).then(({id})=>{
     setOrderId(id); 
     }).finally(()=>{
   setLoading(false)
    })
    }
    

    return (
        <>
            <h1>Formulario</h1>
            <form className="row" >
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control" onChange= {handleInputChange} name="nombre"></input>
                </div>
                <div className="col-md-3">
                    <input type="tel" placeholder="Teléfono" className="form-control"onChange= {handleInputChange}   name="phone"></input>
                </div>
                <div className="col-md-3">
                    <input type="email" placeholder="Email" className="form-control" onChange= {handleInputChange} name="email"></input>
                </div>
                <button type="submit" onClick={enviarDatos} className="btn btn-primary">Enviar</button>
            </form> 
            <div >
            {orderId.length > 0 &&
            <>
            <h2>Muchas gracias por tu compra,</h2>
            <p>
              Tu nro de orden es: {orderId}. Recirá un email cuando su pedido esté listo para ser retirado. 
            </p>
            <Link to="/">
            <button>Volver al inicio</button>
            </Link>
        </>
      }
                
                
            </div>

        </>
    );
}
 
export default FormUser;