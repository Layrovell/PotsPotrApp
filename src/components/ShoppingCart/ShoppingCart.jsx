import React from "react";

export const ShoppingCart = (props) => {

  return (
    
    <div className={` shopping-cart shopping-cart${props.isOpen ? "--move" : "--disabled"}`}>
      {/* <!-- Title --> */}
      <div className="title">Shopping Bag</div>

      <button className="close-btn" onClick={() => props.setOpen(false)}>
        <img src="./images/icons/cross.svg" alt="img" />
      </button>

      {/* <!-- item #1 --> */}
      <div className="item">
        <div className="buttons">
          <span className="delete-btn"></span>
          <span className="like-btn"></span>
        </div>

        <div className="image">
          <img src="./images/photos/features/step-1.jpg" alt="img" />
        </div>

        <div className="description">
          <span>Common Projects</span>
          <span>Bball High</span>
          <span>White</span>
        </div>

        <div className="quantity">
          <button className="cart-btn plus-btn" type="button" name="button">
            <img src="./images/cart/d.svg" alt="img" />
          </button>
          <input type="text" name="name" defaultValue="1" />
          <button className="cart-btn minus-btn" type="button" name="button">
            <img src="./images/cart/substract.svg" alt="img" />
          </button>
        </div>

        <div className="total-price">$549</div>
      </div>

      {/* <!-- item #2 --> */}
      <div className="item">
        <div className="buttons">
          <span className="delete-btn"></span>
          <span className="like-btn"></span>
        </div>

        <div className="image">
          <img src="./images/photos/features/step-1.jpg" alt="img" />
        </div>

        <div className="description">
          <span>Common Projects</span>
          <span>Bball High</span>
          <span>White</span>
        </div>

        <div className="quantity">
          <button className="cart-btn plus-btn" type="button" name="button">
            <img src="./images/cart/d.svg" alt="" />
          </button>
          <input type="text" name="name" defaultValue="1" />
          <button className="cart-btn minus-btn" type="button" name="button">
            <img src="./images/cart/substract.svg" alt="img" />
          </button>
        </div>

        <div className="total-price">$549</div>
      </div>

      {/* <!-- item #3 --> */}
      <div className="item">
        <div className="buttons">
          <span className="delete-btn"></span>
          <span className="like-btn"></span>
        </div>

        <div className="image">
          <img
            className=""
            src="./images/photos/features/step-3.jpg"
            alt="img"
          />
        </div>

        <div className="description">
          <span>Common Projects</span>
          <span>Bball High</span>
          <span>White</span>
        </div>

        <div className="quantity">
          <button className="cart-btn plus-btn" type="button" name="button">
            <img src="./images/cart/d.svg" alt="" />
          </button>
          <input type="text" name="name" defaultValue="1" />
          <button className="cart-btn minus-btn" type="button" name="button">
            <img src="./images/cart/substract.svg" alt="" />
          </button>
        </div>

        <div className="total-price">$549</div>
      </div>
    </div>
  );
};
