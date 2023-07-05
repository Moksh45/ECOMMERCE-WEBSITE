import React, { Fragment, useEffect, useRef } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import "./payment.css";
import { createOrder, clearErrors } from "../../actions/orderAction";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import emailjs from '@emailjs/browser';

const Payment = ({ history }) => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const dispatch = useDispatch();
  const alert = useAlert();
  const payBtn = useRef(null);
  const mailform = useRef();

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { error } = useSelector((state) => state.newOrder);

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    try {
      const result = {
        error: null,
        paymentIntent: {
          id: "sample_payment_intent_id",
          status: "succeeded",
        },
      };

      if (result.error) {
        payBtn.current.disabled = false;
        alert.error(result.error.message);
      } else {
        order.paymentInfo = {
          id: result.paymentIntent.id,
          status: result.paymentIntent.status,
        };
        dispatch(createOrder(order));

        // Call sendEmail function to send the email
        emailjs.sendForm('service_3qsylpu', 'template_mu0fwra',mailform.current ,'iMSk9PkW1EFcGDU1T')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });

          history.push("/success");
      };

    } catch (error) {
      payBtn.current.disabled = false;
      if (error.response && error.response.data.message) {
        alert.error(error.response.data.message);
      } else {
        alert.error("An error occurred");
      }
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)} ref={mailform}>
          <Typography>Payment</Typography>
          <div>
            <LocalShippingIcon />
            <div className="paymentInput">
              <ul>
                <li>Cash on delivery (COD)</li>
              </ul>
            </div>
          </div>
          <input
            type="submit"
            value={`Place Order of - ₹${orderInfo && orderInfo.totalPrice}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;
