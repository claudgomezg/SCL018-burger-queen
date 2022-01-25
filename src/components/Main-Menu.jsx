import React from 'react'
import menu from '../data/data.json'
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
// import ListGroup from 'react-bootstrap/ListGroup';


export const Food = () => {
    const mainDish = menu.mainFood
    const sideDish = menu.sideDish
    const drinks = menu.drinks

    return (
        <>
            <div className="accordion-container" d-grid gap-2>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Ramen</Accordion.Header>
                        <Accordion.Body>
                            {mainDish.map((e, index) => {
                                return (

                                    <Button variant="outline-primary" size="sm" className='ramen-btn' key={index}>
                                        <img src={e.image} alt="ramenImage" className="ramen-image" />  {e.name} ${e.price}
                                    </Button>
                                )
                            })}
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Bebestibles</Accordion.Header>
                        <Accordion.Body>
                            {drinks.map((e, index) => {
                                return (
                                    <Button variant="outline-primary" size="sm" className='side-dish-btn' key={index}>
                                        {e.name} ${e.price}
                                    </Button>
                                )
                            })}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Agregados</Accordion.Header>
                        <Accordion.Body>
                            {sideDish.map((e, index) => {
                                return (
                                    <Button variant="outline-primary" size="sm" className='drinks-btn' key={index}>
                                        {e.name} ${e.price}
                                    </Button>
                                )
                            })}

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

export default Food;
