import React, { useState, useEffect } from "react";
import PersonalDetails from "./FormComponents/PersonalDetails";
import AddressDetails from "./FormComponents/AddressDetails";
import PaymentDetails from "./FormComponents/PaymentDetails";

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          name: "",
          email: "",
          address: "",
          city: "",
          cardNumber: "",
          expiryDate: "",
        };
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (step === 1) {
      if (!formData.name) errors.name = "Name is required";
      if (!formData.email) errors.email = "Email is required";
      if (!emailPattern.test(formData.email)) errors.email = "Enter a valid email";
    } else if (step === 2) {
      if (!formData.address) errors.address = "Address is required";
      if (!formData.city) errors.city = "City is required";
    } else if (step === 3) {
      if (!formData.cardNumber) errors.cardNumber = "Card Number is required";
      if (!formData.expiryDate) errors.expiryDate = "Expiry Date is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleReturnToForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      address: "",
      city: "",
      cardNumber: "",
      expiryDate: "",
    })
    setStep(1);
  };

  const stepContent = () => {
    if (step === 1) {
      return (
        <PersonalDetails
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
      );
    } else if (step === 2) {
      return (
        <AddressDetails
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
      );
    } else if (step === 3) {
      return (
        <PaymentDetails
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
      );
    }
    return null;
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-xl font-bold">Submission Result</h2>
        <p className="mt-2">Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Address: {formData.address}</p>
        <p>City: {formData.city}</p>
        <p>Card Number: {formData.cardNumber}</p>
        <p>Expiry Date: {formData.expiryDate}</p>
        <button
          onClick={handleReturnToForm}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Return to Form
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Multi-Step Form</h1>
      <form onSubmit={handleSubmit}>
        {stepContent()}

        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 bg-gray-300 text-black rounded"
            >
              Back
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default StepForm;
