import React, { useState } from "react";
import InvoiceTemplate from "./InvoiceTemplate";

const Invoice = () => {
  const [invoice, setInvoice] = useState({
    createdAt: "",
    description: "",
    invoiceNumber: "",
    dueDate: "",
    paymentTerms: "",
    clientName: "",
    clientAddress: "",
    clientContact: "",
    clientEmail: "",
    clientGSTIN: "",
    senderName: "",
    senderAddress: "",
    senderContact: "",
    senderEmail: "",
    items: [{ productName: "", description: "", quantity: 0, price: 0 }],
    notes: "",
    terms: ""
  });

  const [generatedInvoice, setGeneratedInvoice] = useState(null);
  const [errors, setErrors] = useState({});
  const [showInvoice, setShowInvoice] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const items = [...invoice.items];
    items[index][name] = value;
    setInvoice({ ...invoice, items });
  };

  const addItem = () => {
    setInvoice({
      ...invoice,
      items: [...invoice.items, { productName: "", description: "", quantity: 0, price: 0 }],
    });
  };

  const calculateTotal = () => {
    const subtotal = invoice.items.reduce(
      (sum, item) => sum + (parseFloat(item.quantity) * parseFloat(item.price)),
      0
    );
    const tax = subtotal * 0.18; // 18% GST
    const total = subtotal + tax;
    setInvoice({ ...invoice, subtotal, tax, total });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    const requiredFields = [
      "createdAt", "invoiceNumber", "description",
      "clientName", "clientAddress", "clientGSTIN",
      "senderName", "senderAddress", "senderContact", "senderEmail"
    ];

    requiredFields.forEach(field => {
      if (!invoice[field]) {
        newErrors[field] = "This field is required";
        valid = false;
      }
    });

    const itemErrors = invoice.items.map(item => {
      const itemError = {};
      if (!item.productName) itemError.productName = "Product name is required";
      if (!item.description) itemError.description = "Description is required";
      if (!item.quantity || isNaN(item.quantity)) itemError.quantity = "Valid quantity is required";
      if (!item.price || isNaN(item.price)) itemError.price = "Valid price is required";
      return itemError;
    });

    setErrors({ ...newErrors, items: itemErrors });
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      calculateTotal();
      setGeneratedInvoice(invoice);
      setShowInvoice(true); 
    }
  };

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg h-screen overflow-y-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-blue-600">Create Invoice</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <InvoiceDetails invoice={invoice} handleChange={handleChange} errors={errors} />
        <ClientInformation invoice={invoice} handleChange={handleChange} errors={errors} />
        <SenderInformation invoice={invoice} handleChange={handleChange} errors={errors} />
        <ItemsSection invoice={invoice} handleItemChange={handleItemChange} addItem={addItem} errors={errors} />
        <AdditionalInformation invoice={invoice} handleChange={handleChange} />

        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-green-700">
          Generate Invoice
        </button>
      </form>

      {showInvoice && <InvoiceTemplate invoice={generatedInvoice} onClose={() => setShowInvoice(false)} />}
    </div>
  );
};

const InvoiceDetails = ({ invoice, handleChange, errors }) => (
  <div className="space-y-6">
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-blue-500">Invoice Details</h3>
      <InputField label="Date" type="date" name="createdAt" value={invoice.createdAt} handleChange={handleChange} error={errors.createdAt} />
      <InputField label="Invoice Number" type="text" name="invoiceNumber" value={invoice.invoiceNumber} handleChange={handleChange} error={errors.invoiceNumber} />
      <InputField label="Description" type="text" name="description" value={invoice.description} handleChange={handleChange} error={errors.description} />
      <InputField label="Due Date" type="date" name="dueDate" value={invoice.dueDate} handleChange={handleChange} error={errors.dueDate} />
      <InputField label="Payment Terms" type="text" name="paymentTerms" value={invoice.paymentTerms} handleChange={handleChange} error={errors.paymentTerms} />
    </div>
  </div>
);

const ClientInformation = ({ invoice, handleChange, errors }) => (
  <div className="space-y-6">
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-blue-500">Client Information</h3>
      <InputField label="Client Name" type="text" name="clientName" value={invoice.clientName} handleChange={handleChange} error={errors.clientName} />
      <TextareaField label="Client Address" name="clientAddress" value={invoice.clientAddress} handleChange={handleChange} error={errors.clientAddress} />
      <InputField label="Client Contact" type="text" name="clientContact" value={invoice.clientContact} handleChange={handleChange} error={errors.clientContact} />
      <InputField label="Client Email" type="email" name="clientEmail" value={invoice.clientEmail} handleChange={handleChange} error={errors.clientEmail} />
      <InputField label="Client GSTIN" type="text" name="clientGSTIN" value={invoice.clientGSTIN} handleChange={handleChange} error={errors.clientGSTIN} />
    </div>
  </div>
);

const SenderInformation = ({ invoice, handleChange, errors }) => (
  <div className="space-y-6">
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-blue-500">Sender Information</h3>
      <InputField label="Sender Name" type="text" name="senderName" value={invoice.senderName} handleChange={handleChange} error={errors.senderName} />
      <TextareaField label="Sender Address" name="senderAddress" value={invoice.senderAddress} handleChange={handleChange} error={errors.senderAddress} />
      <InputField label="Sender Contact" type="text" name="senderContact" value={invoice.senderContact} handleChange={handleChange} error={errors.senderContact} />
      <InputField label="Sender Email" type="email" name="senderEmail" value={invoice.senderEmail} handleChange={handleChange} error={errors.senderEmail} />
    </div>
  </div>
);

const ItemsSection = ({ invoice, handleItemChange, addItem, errors }) => (
  <div className="space-y-4">
    <h3 className="text-2xl font-semibold text-blue-500">Items</h3>
    {invoice.items.map((item, index) => (
      <div key={index} className="flex flex-col space-y-2 border p-4 rounded-md shadow-sm">
        <InputField label="Product Name" type="text" name="productName" value={item.productName} handleChange={(e) => handleItemChange(index, e)} error={errors.items && errors.items[index]?.productName} />
        <InputField label="Description" type="text" name="description" value={item.description} handleChange={(e) => handleItemChange(index, e)} error={errors.items && errors.items[index]?.description} />
        <div className="grid grid-cols-2 gap-4">
          <InputField label="Quantity" type="number" name="quantity" value={item.quantity} handleChange={(e) => handleItemChange(index, e)} error={errors.items && errors.items[index]?.quantity} />
          <InputField label="Price" type="number" name="price" value={item.price} handleChange={(e) => handleItemChange(index, e)} error={errors.items && errors.items[index]?.price} />
        </div>
      </div>
    ))}
    <button type="button" onClick={addItem} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700">
      Add Item
    </button>
  </div>
);

const AdditionalInformation = ({ invoice, handleChange }) => (
  <div className="space-y-6">
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-blue-500">Additional Information</h3>
      <TextareaField label="Notes" name="notes" value={invoice.notes} handleChange={handleChange} />
      <TextareaField label="Terms" name="terms" value={invoice.terms} handleChange={handleChange} />
    </div>
  </div>
);

const InputField = ({ label, type, name, value, handleChange, error }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      className={`mt-1 block w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2`}
    />
    {error && <p className="text-red-500 text-xs">{error}</p>}
  </div>
);

const TextareaField = ({ label, name, value, handleChange, error }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={handleChange}
      className={`mt-1 block w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2`}
    />
    {error && <p className="text-red-500 text-xs">{error}</p>}
  </div>
);

export default Invoice;
