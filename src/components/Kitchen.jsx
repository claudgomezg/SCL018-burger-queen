import React, { Fragment, useState, useEffect } from 'react';
import '../components.css';
import stores from './firebaseConfig'
import { Link } from "react-router-dom";
import Header from './header.jsx'
import swal from 'sweetalert';

const KitchenView = () => {
  const [taskss, setTaskss] = useState([])

  useEffect(() => {
    const getDocsInfo2 = stores.collection('order').onSnapshot(snap => {
      const arrayOrders = snap.docs.map(doc => {
        return {
          id: doc.id, ...doc.data()
        }
      })
      setTaskss(arrayOrders)
    })
    return () => getDocsInfo2();
  }, [])

  const inProcess = async (id) => {
    try {
      await stores.collection('order').doc(id).update({
        status: "In progress",
      })
    } catch (error) {
      console.log(error)
    }
    swal("¡Listo!", "La orden está en progreso.", "info");
    document.querySelector('#process' + id).style.backgroundColor = '#ff5722';
  }

  const done = async (id) => {
    try {
      await stores.collection('order').doc(id).update({
        status: "done",
      })
    } catch (error) {
      console.log(error)
    }
    swal("¡Listo!", "La orden está lista.", "success");
    document.querySelector('#done' + id).style.backgroundColor = '#008000';
  }


  return (
    <Fragment>
      <header className="header">
        <Header></Header>
        <Link to="/waitress" className="btn btn-dark mt-2 btn_group">Mesera</Link>
        <Link to="/deliverorders" className="btn btn-danger mt-2 btn_group">Órdenes</Link>
      </header>

      <section className="kitchen-container">
        {
          taskss.map(item => (
            <div key={item.id} className="card bg-light mb-3 mt-3 orders_group">
              <p className="card-header"><strong>Nombre del cliente:</strong> {item.name}</p>
              
              {item.tables
                ? <p>Mesa: {item.tables}</p>
                : null}
              <span>
                <h5 className="card-title">Resumen del pedido</h5>
                {item.orders.map(elemento => (
                  <li key={elemento.id}> {elemento.title} ({elemento.quantity}) </li>
                ))
                }
                <button className="btn btn-secondary mt-2 btn_group" id={'process' + item.id} value={item.id} onClick={() => inProcess(item.id)}>In progress</button>
                <button className="btn btn-secondary mt-2 btn_group" id={'done' + item.id} value={item.id} onClick={() => done(item.id)}>Done</button>

                <h6>status: {item.status}</h6>
              </span>
            </div>
          ))
        }
      </section>
    </Fragment>
  )
}

export default KitchenView;