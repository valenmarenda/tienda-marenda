import React, {useState} from 'react';
import { getFireStore} from '../firebase/firebase';
import { useCart} from '../context/CartContext';
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form'



const FormUser = (itemProduct) => {
   const [orderId, setOrderId] = useState([]);

    //Datos del carrito//
    const cartInfo = useCart();
    const totalPriceItems= ()=>{
        return cartInfo.totalPrice() 
       }
    const removerItem = ()=>{
      return cartInfo.clear
    }

     //Datos del formulario//
     const {
        register,
        formState: { errors },
        getValues,
        handleSubmit
      } = useForm();
     const onSubmit = (data, e) => {
         e.target.reset()
         e.preventDefault()
         const buyer = data

      //Crea la orden para firebase//
    const db = getFireStore();
    const ordenes = db.collection("ordenes");
    const newOrden = { 
     buyer: buyer,
     items: itemProduct.value.itemQuantity,
     date:new Date().getTime(),
      total: totalPriceItems()
     }
     
    //Enviar la orden a Firebase//
    ordenes.add(newOrden).then(({id})=>{
     setOrderId(id); 

     }).finally(()=>{

    })

        //Actualizar stock
  //  const docRef = db.collection('items').doc("1")
   // docRef.update({
   //     stock: 40
  //  })

    //const actualizarStock = docRef.update({
    //   stock: stock - 
   // })
     }
     
    return (
        <>
        {orderId.length === 0 ?
        <div className="container-formulario">
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
            <div className="col-md-3">
                  <div>
                    <label htmlFor="nombre">Tu nombre</label>
                     <input type="name" {...register("nombre", { required: "Debes ingresar tu nombre", maxLength: 20, minLength: 2 })} />
                     {errors.nombre && (<p style={{ color: "red" }}>{errors.nombre.message}</p>)}
                  </div>
                  <div>
                    <label htmlFor="nombre">Tu apellido</label>
                     <input type="name" {...register("apellido", { required: "Debes ingresar tu apellido", maxLength: 20, minLength: 2 })} />
                     {errors.apellido && (<p style={{ color: "red" }}>{errors.apellido.message}</p>)}
                  </div>
                  <div>
                    <label >Tu teléfono</label>
                     <input type="phone" {...register("tel", { required: "Debes ingresar tu teléfono"})} />
                     {errors.tel && (<p style={{ color: "red" }}>{errors.tel.message}</p>)}
                  </div>
                 <div>
                   <label>Tu Mail: </label>
                    <input type="email" {...register("email", { required: "Debes ingresar tu email" })}/>
                    {errors.email && (<p style={{ color: "red" }}>{errors.email.message}</p>)}
                 </div>
                 <div>
                    <label>Confirma tu email</label>
                    <input {...register("emailConfirmation", {
                      required: "Por favor confirma tu email!",
                      validate: { matchesPreviousPassword: (value) => {
                     const { email } = getValues();
                     return email === value || "Los emails deben coincidir";}}})}/>
                 </div>
                {errors.emailConfirmation && (<p style={{ color: "red" }}>{errors.emailConfirmation.message}</p>)}
                    
                    <button type="submit"  className="btn btn-primary">Enviar</button>
                </div>
            </form>
            </div> 

            
            :
            <>
            <h2>Muchas gracias por tu compra,</h2>
            <p>
              Tu nro de orden es: {orderId}. Recirá un email cuando su pedido esté listo para ser retirado. 
            </p>
            <Link to="/">
            <button className="btn" onClick={removerItem()}>Volver al inicio</button>
            </Link>
            
        </>
      }
                
        </>
    );
}
 
export default FormUser;