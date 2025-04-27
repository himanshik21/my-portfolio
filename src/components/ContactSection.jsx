import React, { useState } from "react";

const ContactSection = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Add your form submission logic here (e.g., sending to backend or email service)
    // Simulating a delay here (remove this in real implementation)
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      } else {
        setError("All fields are required!");
        setIsSubmitting(false);
      }
    }, 1000);
  };

  return (
    <section
      id="contact"
      className={`py-16 px-4 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-4xl font-bold ${
            darkMode ? "text-indigo-400" : "text-indigo-600"
          } mb-8`}
        >
          Contact Me
        </h2>
        <p className="text-lg mb-8">
          Feel free to reach out to me for any inquiries or collaborations.
        </p>

        {isSubmitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-8">
            Thank you for reaching out! I'll get back to you as soon as
            possible.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <div className="text-red-600">{error}</div>}

            <div>
              <label
                htmlFor="name"
                className={`block text-left font-semibold text-lg ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  darkMode
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-white text-gray-800 border-gray-300"
                }`}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block text-left font-semibold text-lg ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  darkMode
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-white text-gray-800 border-gray-300"
                }`}
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block text-left font-semibold text-lg ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className={`w-full px-4 py-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  darkMode
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-white text-gray-800 border-gray-300"
                }`}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none ${
                darkMode ? "bg-indigo-500 hover:bg-indigo-600" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
