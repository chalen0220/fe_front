import React from 'react'
import "./Newsletter.css"
import benchbear from "../Assets/all_products/benchbear.jpg"

const Newsletter = () => {
  function buttonID() {
    alert('Thank you for subscribing to Fluff Emporium!');
  }
  return (
    <div className="newsletter">
        <div className="lside">
        <h6>Newsletter</h6>
            <p>Join our mailing list to stay in touch and for special offers!</p>
                <div>
                    <input type="text" placeholder="Enter E-mail"></input>
                    <button onClick={buttonID}>Submit</button>
                </div>    
        </div>
        <div className="rside">
             <img className="nImg" src={benchbear} alt="" />
        </div>
    </div>
  )
}

export default Newsletter
