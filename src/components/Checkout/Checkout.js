import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router'
import { CartContext } from '../CartContext/CartContext'
import { db } from '../firebase/config'
import { validateData } from '../helpers/validateData'
import { collection, Timestamp, writeBatch, query, where, documentId, getDocs, addDoc } from 'firebase/firestore/lite'
import Swal from 'sweetalert2'

export const Checkout = () => {

    const { cart, emptyCart, totalBuy } = useContext(CartContext)

    const [values, setValues] = useState({
        name: '',
        surname: '',
        email: '',
        emailConfirm: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validateData(values)) { return }

        const order = {
            buyer: { ...values },
            items: cart,
            total: totalBuy(),
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)

        const ordersRef = collection(db, "orders")
        const productsRef = collection(db, "products")
        const q = query(productsRef, where(documentId(), 'in', cart.map(el => el.id)))

        const outOfStock = []

        const products = await getDocs(q)

        products.docs.forEach((doc) => {
            const itemToUpdate = cart.find((prod) => prod.id === doc.id)

            if (doc.data().stock >= itemToUpdate.quantity) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.quantity
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
        })

        if (outOfStock.length === 0) {
            addDoc(ordersRef, order)
                .then((res) => {
                    batch.commit()
                    Swal.fire({
                        icon: 'success',
                        title: 'Su orden ha sido registrada',
                        text: `Su número de orden es: ${res.id}`
                    })
                    emptyCart()
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'No hay stock de los siguientes productos:',
                text: outOfStock.map(el => el.name).join(', ')
            })
        }

    }


    return (

        <>
            {cart.length === 0
                ? <Navigate to="/" />
                :
                <div className="container my-5">
                    <h2>Resumen de compra</h2>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleInputChange}
                            name="name"
                            value={values.name}
                            className="form-control my-2"
                            type="text"
                            placeholder="nombre"
                        />
                        {values.name.length < 4 && <small>Nombre inválido</small>}

                        <input
                            onChange={handleInputChange}
                            name="surname"
                            value={values.surname}
                            className="form-control my-2"
                            type="text"
                            placeholder="apellido"
                        />
                        {values.surname.length < 4 && <small>Apellido inválido</small>}

                        <input
                            onChange={handleInputChange}
                            name="email"
                            value={values.email}
                            className="form-control my-2"
                            type="email"
                            placeholder="email"
                        />
                        {values.email.length < 4 && <small>Email inválido</small>}

                        <input
                            onChange={handleInputChange}
                            name="emailConfirm"
                            value={values.emailConfirm}
                            className="form-control my-2"
                            type="email"
                            placeholder="Repita email"
                        />
                        {values.emailConfirm !== values.email && <small>Email no coincide</small>}

                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            }
        </>
    )
}
