import { motion } from "framer-motion";
import React from "react";

const PersonalDetails = ({ formData, handleChange, errors }) => {
  return (
    <motion.div 
    initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.1,
      }}
      exit={{ x: 100, opacity: 0 }}>
      <h2 className="text-xl mb-4 text-center font-bold">Personal Details</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium pb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium pb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
    </motion.div>
  );
};

export default PersonalDetails;
