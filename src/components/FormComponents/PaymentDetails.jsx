import React from "react";
import { motion } from "framer-motion";

const PaymentDetails = ({ formData, handleChange, errors }) => {
  return (
    <motion.div 
    initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.1,
      }}
      exit={{ x: 100, opacity: 0 }}>
      <h2 className="text-xl mb-4 text-center font-bold">Payment Details</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium pb-2">Card Number</label>
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
        <label className="block text-sm font-medium pb-2">Expiry Date</label>
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
    </motion.div>
  );
};

export default PaymentDetails;
