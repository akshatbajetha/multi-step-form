import React from "react";
import { motion } from "framer-motion";

const AddressDetails = ({ formData, handleChange, errors }) => {
  return (
    <motion.div 
    initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.1,
      }}
      exit={{ x: 100, opacity: 0 }}>
      <h2 className="text-xl mb-4 text-center font-bold">Address Details</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium pb-2">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium pb-2">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
      </div>
    </motion.div>
  );
};

export default AddressDetails;
