import React, { Fragment, useState } from 'react';
import ramen from '../data/ramen'
import drinks from '../data/drinks'
import '../components.css';
import stores from './firebaseConfig'
import swal from 'sweetalert';
import Header from './Header'
import { Link } from "react-router-dom";

const WaitressView = () => {
  const [orders, setOrders] = useState([]);
  const [prices, setPrices] = useState(0);
  const [name, setName] = useState('');
  const [tables, setTables] = useState('');
  const [pending] = useState('pending');
  const [toggler, setToggler] = useState(false);

// console.log(setOrders);
// console.log(orders);
  const setUser = async (e) => {
    e.preventDefault()
    if (!name.trim()) {
      swal("¡Oh no!", "El nombre del cliente está vacío, intenta nuevamente.", "error");
    } else {
      const customer = {
        name: name,
        orders: orders,
        prices: prices,
        tables: tables,
        status: pending,
      }
      try {
        await stores.collection('order').add(customer)
        swal("¡Listo!", "Orden enviada a cocina.", "success");
      } catch (e) {
        console.log(e)
      }
      setName('');
      setOrders([]);
      setPrices(0);
      setTables('');
    }
  }
  const viewRamen = (e) => {
    setToggler(true);
  }

  const viewDrinks= (e) => {
    setToggler(false);
  }

  const addProduct = (e, item) => {
    e.preventDefault();
    if (orders.includes(orders.find((eachOrder) => eachOrder.id === item.id))) {
      item.quantity += 1;
      setOrders([...orders])
    } else {
      item.quantity = 1;
      setOrders([...orders, item])
    }
    setPrices(increaseProduct(prices, item.cost, true))

  }

  const deleteProduct = (e, item) => {
    e.preventDefault();
    if (orders.includes(orders.find((eachOrder) => eachOrder.id === item.id))) {
      item.quantity -= 1;
      let i = orders.indexOf(item);
      if (item.quantity === 0) orders.splice(i, 1);
      setOrders([...orders])
      setPrices(increaseProduct(prices, item.cost, false))
    }
  }

  const increaseProduct = (a, b, c) => c ? Number(a) + Number(b) : Number(a) - Number(b);

  return (
    <Fragment>
      <header className="header">
        <Header></Header>
        <Link to="/kitchen" className="btn btn-dark mt-2 btn_group">Cocina</Link>
        <Link to="/deliverorders" className="btn mt-2 btn_group btn-danger">Órdenes</Link>
      </header>

    <div className="general-container">
    <div className="orders-container">
    <div className="btn_group--menu">
        <button className="btn btn-dark mt-2 btn_group" onClick={(e) => viewRamen(e)}>Ramen</button>
        <button className="btn btn-dark mt-2 btn_group" onClick={(e) => viewDrinks(e)}>Bebestibles</button>
      </div>

      {toggler ? <section className="mt-2 m2 view_menu--options">
        {
          ramen.items.map(item => {
            return (
              <div key={item.id} className="card" style={{ width: "10rem" }}>
                <img src={item.image} className="card-img-top" style={{ width: "10rem", height: "10rem" }} alt="..." rel="preload" />
                <div className="card-body">
                  <p className="card-text"></p>
                  <p className="card-text">{item.title}</p>
                  <p className="card-text">${item.cost}</p>
                  <button className="btn btn-dark mt-2 btn_group" onClick={(e) => addProduct(e, item)}>+</button>
                  <button className="btn btn-dark mt-2 btn_group" onClick={(e) => deleteProduct(e, item)}>-</button>
                </div>
              </div>

            );
          })
        }
      </section>

        :

        <section className="mt-3 view_menu--options">
          {
            drinks.items.map(item => {
              return (
                <div key={item.id} className="card" style={{ width: "10rem" }}>
                  <img src={item.image} className="card-img-top" style={{ width: "10rem", height: "10rem" }} alt="..." />
                  <div className="card-body">
                    <p className="card-text"></p>
                    <p className="card-text">{item.title}</p>
                    <p className="card-text">${item.cost}</p>
                    <button className="btn btn-dark mt-2 btn_group" onClick={(e) => addProduct(e, item)}>+</button>
                    <button className="btn btn-dark mt-2 btn_group" onClick={(e) => deleteProduct(e, item)}>-</button>
                  </div>
                </div>
              );
            })
          }
        </section>}
    </div>

      <section className="view_menu--options--form">
        <form className="register_form bg-dark" onSubmit={setUser}>
          <h5>Pedido</h5>
          <input className="form-control" value={name} onChange={(e) => { setName(e.target.value) }}
            placeholder='Nombre del cliente'/>
          <input className="form-control" value={tables} onChange={(e) => { setTables(e.target.value) }}
              placeholder='Número de mesa'/>
          <div>
            <table className="table table-dark table-bordered table-lg">
              <thead>
                <tr>
                  <th scope="col">Producto</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(eachOrder => {
                  return (
                    <tr key={eachOrder.id}>
                      <td >{eachOrder.title}</td>
                      <td>{eachOrder.quantity}</td>
                      <td>${eachOrder.cost}</td>
                    </tr>
                  );
                })
                }
              </tbody>
            </table>
            <p> TOTAL: ${prices} </p>
            <input className="btn btn-light mt-2 mb-2 btn_group" className="btn btn-success" type='submit' value='Enviar a cocina' />
          </div>
        </form>
      </section>
    </div>

    </Fragment>
    
  );
}
export default WaitressView;
