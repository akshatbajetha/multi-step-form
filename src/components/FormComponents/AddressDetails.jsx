import React from "react";

const AddressDetails = ({ formData, handleChange, errors }) => {
  return (
    <div>
      <h2 className="text-xl mb-4">Address Details</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Address</label>
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
        <label className="block text-sm font-medium">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
      </div>
    </div>
  );
};

export default AddressDetails;
