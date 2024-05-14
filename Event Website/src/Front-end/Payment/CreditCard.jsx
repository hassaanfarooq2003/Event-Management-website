import React from 'react'
import './creditcard.css'

const CreditCard = () => {
  return (
    <>
      <div className="creditcard-container">
        < div className="creditcard-form">
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Payment</div>
          <div className="creditcard-credit-card-info">
            <div className="creditcard-input-container">
              <label className="creditcard-input-label" htmlFor="cardNumber">Card Number</label>
              <input
                className="creditcard-input-field"
                type="text"
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="creditcard-split">
              <div className="creditcard-input-container">
                <label className="creditcard-input-label" htmlFor="expirationDate">Expiration Date</label>
                <input
                  className="creditcard-input-field"
                  type="text"
                  id="expirationDate"
                  placeholder="MM/YY"
                />
              </div>
              <div className="creditcard-input-container">
                <label className="creditcard-input-label" htmlFor="cvv">CVV</label>
                <input className="creditcard-input-field" type="password" id="cvv" placeholder="&#9679;&#9679;&#9679;" />
              </div>
            </div>
            <button className="creditcard-purchase-btn">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreditCard