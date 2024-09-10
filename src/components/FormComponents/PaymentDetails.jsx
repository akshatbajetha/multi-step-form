import React from "react";

const PaymentDetails = ({ formData, handleChange, errors }) => {
  return (
    <div>
      <h2 className="text-xl mb-4">Payment Details</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Card Number</label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.cardNumber && (
          <p className="text-red-500 text-sm">{errors.cardNumber}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Expiry Date</label>
        <input
          type="text"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.expiryDate && (
          <p className="text-red-500 text-sm">{errors.expiryDate}</p>
        )}
      </div>
    </div>
  );
};

export default PaymentDetails;
