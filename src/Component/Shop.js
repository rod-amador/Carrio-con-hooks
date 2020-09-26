import React, {useState, useEffect} from "react";

const Shop = ()=>{
    const [list, setList] = useState( [] );
    console.log(list)

    const items = [
        {
            id:1,
            producto:"playera",
            costo: 100,
            IVA: 16,
            total: 116,
        },

        {
            id:2,
            producto:"juego",
            costo: 1000,
            IVA: 160,
            total: 1160,
        },

        {
            id:3,
            producto:"balon de oro",
            costo: 2000,
            IVA: 320,
            total: 2320,
        },
    ]
    
    const addToList = (el) => {
        setList( [...list, el] )
    }

    const listItems = items.map(el => (
        <tr key={el.id}>
            <td>{`${el.producto} `}</td>
            <td>{`$ ${el.costo}`} </td>
            <td>{`$ ${el.IVA}`}</td>
            <td>{`$ ${el.total}`}</td>
        </tr>
    ))

    return (
        <div>
            <h1>Inventario</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Producto</th>
                        <th>Costo</th>
                        <th>IVA</th>
                        <th>Total</th>
                    </tr>
                        {listItems}
                </tbody>
            </table>

            
        </div>
    )
}

export default Shop;