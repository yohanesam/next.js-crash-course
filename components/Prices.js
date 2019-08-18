import React, { useState } from 'react'

const Prices = ({ bpi }) => {

    const [state, setState] = useState({
        currency: 'EUR'
    })

    let list = '';

    if(state.currency === 'USD') {
        list = <li className="list-group-item">Bitcoin rate for { bpi.USD.description } : <span className="badge badge-primary">{ bpi.USD.code }</span> <strong>{ bpi.USD.rate }</strong></li>
    } else if(state.currency === 'GBP') {
        list = <li className="list-group-item">Bitcoin rate for { bpi.GBP.description } : <span className="badge badge-primary">{ bpi.GBP.code }</span> <strong>{ bpi.GBP.rate }</strong></li>
    } else if(state.currency === 'EUR') {
        list = <li className="list-group-item">Bitcoin rate for { bpi.EUR.description } : <span className="badge badge-primary">{ bpi.EUR.code }</span> <strong>{ bpi.EUR.rate }</strong></li>
    }

    return (
        <div>
            <select onChange={e => setState({currency: e.target.value})} className="form-control">
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
            </select>
            
            <br />
            
            <ul className="list-group">
                {list}
            </ul>
        </div>
    )
}

export default Prices;