import React from 'react'
import menu from '../data/data.json'


export const Food = () => {
    const mainDish = menu.mainFood
    const sideDish = menu.sideDish
    const drinks = menu.drinks

    return (
    <>
        <h3 className='menu-title'>Ramen</h3>
        {mainDish.map((e, index) => {
        return (
            <button className='ramen-btn' key={index}>
                {e.name} ${e.price}
            </button>
        )
        })}

        <h3 className='menu-title'>Bebestibles</h3>
            {drinks.map((e, index) => {
        return (
            <button className='side-dish-btn' key={index}>
                {e.name} ${e.price}
            </button>
        )
        })}

        <h3 className='menu-title'>Agregados</h3>
        {sideDish.map((e, index) => {
        return (
            <button className='drinks-btn' key={index}>
                {e.name} ${e.price}
            </button>
        )
        })}
    </>
    )
}

export default Food

// <h2 className= "ramen-title">Ramen</h2>
// {mainDish.map((e, index) => {
//     return (

//         <button className="ramen-btn"
//             key={index}>
//                 <p className="nav-tags">{e.name} ${e.price} </p>
//         </button>
//     );

// })}
// <h2 className="side-dish-title">Agregados</h2>
// {sideDish.map((e, index) => {
//     return (
//         <button
//             className="side-dish-btn"
//             key={index}>
//                 <p className="nav-tags">{e.name} ${e.price}</p>
//         </button>
//     );

// })}
// <h2 className="drinks-title">Bebestibles</h2>
// {drinks.map((e, index) => {
//     return (
//         <button
//             className="drinks-btn"
//             // onClick={}
//             key={index}>
//                 <p className="name-tags">{e.name} ${e.price}</p>
//         </button>
//     );
// })}
