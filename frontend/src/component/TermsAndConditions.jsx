import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-10 text-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-800 to-blue-700 text-white py-10 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-lg text-gray-300">
            Please read these terms and conditions carefully before using our
            services.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto mt-10 p-6 bg-gray-800 shadow-lg rounded-lg">
        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-300">
            Welcome to [Your App Name]. By accessing or using our services, you
            agree to be bound by these terms and conditions. If you do not
            agree, please refrain from using our services.
          </p>
        </section>

        {/* Use of Service */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            1. Use of Service
          </h3>
          <p className="text-gray-300">
            By using our app, you agree to use it only for lawful purposes and
            in compliance with all applicable laws and regulations. You are
            prohibited from:
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Engaging in fraudulent or harmful activities.</li>
            <li>Accessing the app in an unauthorized manner.</li>
            <li>Sharing harmful or offensive content.</li>
          </ul>
        </section>

        {/* User Accounts */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            2. User Accounts
          </h3>
          <p className="text-gray-300">
            When creating an account, you must provide accurate information. You
            are responsible for maintaining the confidentiality of your account
            and for all activities under your account.
          </p>
        </section>

        {/* Payments and Refunds */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            3. Payments and Refunds
          </h3>
          <p className="text-gray-300">
            Payments made through our app are governed by our{" "}
            <a
              href="/refund-policy"
              className="text-blue-400 underline hover:text-blue-500"
            >
              Refund Policy
            </a>
            . Please review it for details on cancellations and refunds.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            4. Intellectual Property
          </h3>
          <p className="text-gray-300">
            All content provided on our app, including text, images, and logos,
            is owned by us or licensed to us. You are not permitted to copy,
            distribute, or modify any part of the content without prior written
            permission.
          </p>
        </section>

        {/* Termination */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            5. Termination
          </h3>
          <p className="text-gray-300">
            We reserve the right to terminate or suspend your account at any
            time if we believe you have violated these terms and conditions.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            6. Limitation of Liability
          </h3>
          <p className="text-gray-300">
            We are not liable for any indirect, incidental, or consequential
            damages arising out of your use of our services. Your use of the app
            is at your sole risk.
          </p>
        </section>

        {/* Changes to Terms */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            7. Changes to Terms
          </h3>
          <p className="text-gray-300">
            We reserve the right to modify these terms and conditions at any
            time. It is your responsibility to review them periodically.
            Continued use of the app after changes have been made constitutes
            acceptance of the new terms.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            8. Contact Us
          </h3>
          <p className="text-gray-300">
            If you have any questions or concerns about these terms, feel free
            to contact us:
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
        </section>

        {/* Footer Note */}
        <p className="text-gray-500 text-sm mt-8">
          Last updated: [Insert Date]
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
