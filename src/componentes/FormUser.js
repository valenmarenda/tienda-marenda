import React, {useState} from 'react';
import { getFireStore} from '../firebase/firebase';
import { useCart} from '../context/CartContext';

const FormUser = (itemProduct, stock) => {
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
   console.log(stock)
 //  const docRef = db.collection('items').doc(itemId);
 //  const actualizarStock = docRef.update({
 //     stock: stock - stockOrder
 // })
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

        </>
    );
}
 
export default FormUser;