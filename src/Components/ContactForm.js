import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [clicked, setClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setClicked(true);
    setTimeout(() => setClicked(false), 300); // Reset after animation   **** https://uxpeshaep5.execute-api.us-west-2.amazonaws.com/Prod/****/ <API_GATEWAY_URL>
    await fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    alert("Message sent!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-800 focus:border-purple-800 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-800 focus:border-purple-800 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-800 focus:border-purple-800 sm:text-sm"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className={`w-1/2 h-12 bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-white hover:border-2 hover:border-purple-800 hover:text-purple-800 font-semibold focus:outline-none transform transition-transform duration-300 ease-in-out ${
                clicked ? "scale-90" : "scale-100"
              }`}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    // <div className='flex flex-col h-full justify-center items-center'>
    //     <h1 className="uppercase lg:text-5xl sm:text-4xl text-2xl tracking-widest font-sans-b  font-thin">
    //         contact Form
    //     </h1>
    //     <form onSubmit={handleSubmit}>
    //       <div className='flex flex-col'>
    //         <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
    //         <input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} required />
    //         <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
    //         <button type="submit">Send</button>
    //       </div>
    //     </form>
    // </div>
  );
};

export default ContactForm;
