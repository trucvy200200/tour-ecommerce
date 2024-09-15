import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"
import { useEffect } from "react"
// import { payForTicket } from "../../store/action"
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom"
const style = { layout: "vertical" }
const ButtonWrapper = ({ currency, showSpinner, amount, handleSetActiveStep, adultArray, childrenArray }) => {
  const [{ isPending, options }, dispatch] = usePayPalScriptReducer()
  // const tourDetail = useSelector((state) => state.tour?.tourDetail)
  // const userId = JSON.parse(localStorage.getItem("userDataUser"))._id
  // const dispatchPart = useDispatch()
  // const navigate = useNavigate()
  // const state = JSON.parse(localStorage.getItem("state"))
  // useEffect(() => {
  //   dispatch({
  //     type: "resetOptions",
  //     value: {
  //       ...options,
  //       currency: currency
  //     }
  //   })
  // }, [currency, showSpinner])

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[style, currency, amount]}
        fundingSource={"paypal"}
        // createOrder={(data, actions) =>
        //   actions.order
        //     .create({
        //       purchase_units: [
        //         {
        //           amount: {
        //             currency_code: currency,
        //             value: amount
        //           }
        //         }
        //       ]
        //     })
        //     .then((orderId) => orderId)
        // }
        // onApprove={(data, actions) => {
        //   actions.order.capture().then(async (response) => {
        //     if (response.status === "COMPLETED") {
        //         adultArray = JSON.stringify(adultArray)
        //         childrenArray = JSON.stringify(childrenArray)
        //       dispatchPart(payForTicket(
        //           {
        //               tourId: tourDetail?._id,
        //               userId: userId,
        //               paymentId: response?.id,
        //               totalPrice: amount,
        //               arrayAdult: adultArray,
        //               arrayChild: childrenArray,
        //               flight: newFlight,
        //               hotel: newHotel
        //           },
        //           () => navigate("/unauthorized"),
        //           () => handleSetActiveStep(4)
        //       ))
        //     }
        //   })
        // }}
      />
    </>
  )
}

const initialOptions = {
  clientId: "AXN4esRA3q69_mdtY-DjbX_6vRujXSkf7Nsu-gBtKSBW52_iuPks4ugf1qYXbrrXg_-WAtYTpSFELskm",
  currency: "USD",
  intent: "capture"
}

const Paypal = ({ amount, handleSetActiveStep, adultArray, childrenArray, hotel, flight }) => {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <ButtonWrapper showSpinner={false} currency={"USD"} amount={amount} handleSetActiveStep={handleSetActiveStep} adultArray={adultArray} childrenArray={childrenArray} />
    </PayPalScriptProvider>
  )
}

export default Paypal
