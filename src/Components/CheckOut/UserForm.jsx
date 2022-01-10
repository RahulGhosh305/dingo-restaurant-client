import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPaymentDetails from './FormPaymentDetails';
import Confirm from './Confirm';
import Success from './Success';

const UserForm = () => {
  const [userFrom, setUserForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    cardName: "",
    cardNumber: "",
    cvc: "",
    expireDate: "",
  })
  const [step, setStep] = useState(1)

  //* Process to next step
  const nextStep = () => {
    setStep(step + 1)
  }

  //* Go back to prev step
  const prevStep = () => {
    setStep(step - 1)
  }

  //* Handle fields changes
  const handleChange = (values) => {
    const { fullName, email, phone, address, city, cardName, cardNumber, cvc, expireDate } = values
    setUserForm({
      ...userFrom,
      fullName,
      email,
      phone,
      address,
      city,
      cardName,
      cardNumber,
      cvc,
      expireDate,
    })
  }

  // console.log(userFrom);

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={userFrom}
        />
      )

    case 2:
      return (
        <FormPaymentDetails
          nextStep={nextStep}
          handleChange={handleChange}
          prevStep={prevStep}
          values={userFrom}
        />
      )

    case 3:
      return (
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}
          values={userFrom}
        />
      )

    case 4:
      return (
        <Success />
      )

    default:
      return ""
  }
};

export default UserForm;