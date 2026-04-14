import React from "react";

const RefundPolicy = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-10 text-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-800 to-blue-700 text-white py-10 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
          <p className="text-lg text-gray-300">
            Learn about our refund and cancellation policies.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto mt-10 p-6 bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Refund Policy</h2>
        <p className="text-gray-300 mb-6">
          We strive to ensure that our customers have a seamless experience.
          Here is everything you need to know about refunds and cancellations.
        </p>

        {/* Refund Criteria */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            Refund Eligibility
          </h3>
          <ul className="list-disc list-inside text-gray-400">
            <li>
              Refunds apply only to payments made directly through our app.
            </li>
            <li>Requests must be submitted within 14 days of purchase.</li>
            <li>Products/services must remain unused and unaltered.</li>
          </ul>
        </div>

        {/* Non-Refundable Items */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            Non-Refundable Items
          </h3>
          <p className="text-gray-300">
            Some items are non-refundable, including but not limited to:
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Subscription services already utilized.</li>
            <li>Customized products or services.</li>
            <li>Digital downloads or consumables.</li>
          </ul>
        </div>

        {/* Refund Process */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            Refund Process
          </h3>
          <p className="text-gray-300">
            Approved refund requests are processed within 5-7 business days.
            Funds will be credited to the original payment method.
          </p>
        </div>

        {/* Contact Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            Contact Us
          </h3>
          <p className="text-gray-300">
            For further assistance with refunds or cancellations, please contact
            us at:
          </p>
          <ul className="text-gray-400 mt-2">
            <li>
              Email:{" "}
              <a
                href="mailto:support@yourbrand.com"
                className="text-blue-400 underline hover:text-blue-500"
              >
                support@yourbrand.com
              </a>
            </li>
            <li>Phone: +123-456-7890</li>
          </ul>
        </div>

        {/* Footer Message */}
        <p className="text-gray-500 text-sm mt-4">
          Note: This refund policy is subject to change. Please review it
          periodically for updates.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
