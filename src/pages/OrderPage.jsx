import { Input, TextField } from "@mui/material";
import React from "react";
import "./OrderPage.css";
import CARDS from "../assets/card_img.png";

const OrderPage = () => {
  return (
    <div className="container_order-page">
      <form>
        <div className="row">
          <div className="col">
            <h3 className="title">billing address</h3>

            <div className="inputBox">
              <span>full name :</span>
              <input type="text" placeholder="john deo"></input>
              {/* <TextField id="outlined-basic" label="text" variant="standard" /> */}
            </div>
            <div className="inputBox">
              <span>email :</span>
              <input type="email" placeholder="example@example.com"></input>
              {/* <TextField
                id="email"
                label="example@example.com"
                variant="standard"
              /> */}
            </div>
            <div className="inputBox">
              <span>address :</span>
              <input type="text" placeholder="room - street - locality"></input>
              {/* <TextField
                id="address"
                label="room - street - locality"
                variant="standard"
              /> */}
            </div>
            <div className="inputBox">
              <span>city :</span>
              <input type="text" placeholder="Bishkek"></input>
              {/* <TextField id="city" label="Bishkek" variant="standard" /> */}
            </div>

            <div className="flex">
              <div className="inputBox">
                <span>state :</span>
                <input type="text" placeholder="Kyrgyzstan"></input>
                {/* <TextField id="country" label="Kyrgyzstan" variant="standard" /> */}
              </div>
              <div className="inputBox">
                <span>zip code :</span>
                <input type="text" placeholder="123 456"></input>
                {/* <TextField id="zip-code" label="123 456" variant="standard" /> */}
              </div>
            </div>
          </div>

          <div className="col">
            <h3 className="title">payment</h3>

            <div className="inputBox">
              <span>cards accepted :</span>
              <img src={CARDS} alt="" />
            </div>
            <div className="inputBox">
              <span>name on card :</span>
              <input type="text" placeholder="Mr. Unnamed"></input>
              {/* <TextField id="client" label="Mr. Unnamed" /> */}
            </div>
            <div className="inputBox">
              <span>credit card number :</span>
              <input type="number" placeholder="1111-2222-3333-4444"></input>
              {/* <TextField
                id="number"
                label="1111-2222-3333-4444"
                variant="standard"
              /> */}
            </div>
            <div className="inputBox">
              <span>exp month :</span>
              <input type="text" placeholder="january"></input>
              {/* <TextField id="month" label="january" variant="standard" /> */}
            </div>

            <div className="flex">
              <div className="inputBox">
                <span>exp year :</span>
                <input type="number" placeholder="2022"></input>
                {/* <TextField id="year" label="2022" variant="standard" /> */}
              </div>
              <div className="inputBox">
                <span>CVV :</span>
                <input type="text" placeholder="1234"></input>
                {/* <TextField id="CV" label="1234" variant="standard" /> */}
              </div>
            </div>
          </div>
        </div>

        <input
          type="submit"
          value="proceed to checkout"
          class="submit-btn"
        ></input>
        {/* <TextField
          id="submitIt"
          label="proceed to checkout"
          class="submit-btn"
          variant="standard"
        /> */}
      </form>
    </div>
  );
};

export default OrderPage;
