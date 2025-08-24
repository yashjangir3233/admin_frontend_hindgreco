import React from "react";
import logo from "../../assets/logo.png";

const InvoiceTemplate = ({ invoice, onClose }) => {
  const subtotal = invoice.items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="w-full max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        {/* Company Header */}
        <div className="flex items-center justify-between mb-6">
          <img src={logo} alt="Company Logo" className="h-16" />
          <div className="text-right">
            <h1 className="text-2xl font-bold text-gray-800">{invoice.senderName}</h1>
            <p className="text-gray-600">{invoice.senderAddress}</p>
            <p className="text-gray-600">Email: {invoice.senderEmail}</p>
            <p className="text-gray-600">Phone: {invoice.senderContact}</p>
          </div>
        </div>

        {/* Invoice Details */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center mb-4">Invoice</h2>
          <div className="flex justify-between text-gray-700">
            <div className="w-1/2">
              <p><strong>Date:</strong> {new Date(invoice.createdAt).toLocaleDateString()}</p>
              <p><strong>Invoice Number:</strong> {invoice.invoiceNumber}</p>
            </div>
            <div className="w-1/2 text-right">
              <p><strong>Due Date:</strong> {new Date(invoice.dueDate).toLocaleDateString()}</p>
              <p><strong>Payment Terms:</strong> {invoice.paymentTerms}</p>
            </div>
          </div>
        </div>

        {/* Billing Information */}
        <div className="flex justify-between mb-6">
          <div className="w-1/2 pr-4">
            <h3 className="text-xl font-semibold mb-2">Billing To</h3>
            <div className="bg-gray-100 p-4 rounded-md text-gray-700">
              <p><strong>Name:</strong> {invoice.clientName}</p>
              <p><strong>Address:</strong> {invoice.clientAddress}</p>
              <p><strong>GSTIN:</strong> {invoice.clientGSTIN}</p>
              <p><strong>Contact:</strong> {invoice.clientContact}</p>
              <p><strong>Email:</strong> {invoice.clientEmail}</p>
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <h3 className="text-xl font-semibold mb-2">Billing From</h3>
            <div className="bg-gray-100 p-4 rounded-md text-gray-700">
              <p><strong>Name:</strong> {invoice.senderName}</p>
              <p><strong>Address:</strong> {invoice.senderAddress}</p>
              <p><strong>Contact:</strong> {invoice.senderContact}</p>
              <p><strong>Email:</strong> {invoice.senderEmail}</p>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Items</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200">S. No.</th>
                  <th className="py-2 px-4 border-b border-gray-200">Product Name</th>
                  <th className="py-2 px-4 border-b border-gray-200">Description</th>
                  <th className="py-2 px-4 border-b border-gray-200">Quantity</th>
                  <th className="py-2 px-4 border-b border-gray-200">Unit Price</th>
                  <th className="py-2 px-4 border-b border-gray-200">Total</th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map((item, index) => (
                  <tr key={index} className="text-gray-700">
                    <td className="py-2 px-4 border-b border-gray-200">{index + 1}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{item.productName}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{item.description}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{item.quantity}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{Number(item.price).toFixed(2)}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{(item.quantity * Number(item.price)).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Total and Notes Section */}
        <div className="text-right mb-6">
          <p><strong>Subtotal:</strong> {subtotal.toFixed(2)}</p>
          <p><strong>Tax (18% GST):</strong> {tax.toFixed(2)}</p>
          <p className="text-2xl font-bold"><strong>Total:</strong> {total.toFixed(2)}</p>
        </div>

        {/* Notes and Close Button */}
        <div className="mb-4">
          <p><strong>Notes:</strong> {invoice.notes}</p>
          <p><strong>Terms:</strong> {invoice.terms}</p>
        </div>
        
        <div className="flex justify-end">
          <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTemplate;
