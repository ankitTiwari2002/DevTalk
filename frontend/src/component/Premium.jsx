import React, { useState } from "react";

const membershipPlans = {
  basic: {
    name: "Basic",
    price: "$10/month",
    features: ["Access to 10 profiles/day", "Basic filters", "Limited likes"],
  },
  premium: {
    name: "Premium",
    price: "$25/month",
    features: [
      "Access to unlimited profiles",
      "Advanced filters",
      "Priority support",
      "See who liked you",
    ],
  },
  gold: {
    name: "Gold",
    price: "$50/month",
    features: [
      "All Premium features",
      "Boost your profile",
      "Super likes",
      "Profile spotlight",
    ],
  },
};

const PremiumComponent = () => {
  const [selectedPlan, setSelectedPlan] = useState("basic");

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8">Choose Your Membership Plan</h1>

      {/* Plan Cards */}
      <div className="flex space-x-6">
        {Object.keys(membershipPlans).map((plan) => (
          <div
            key={plan}
            className={`p-6 rounded-lg shadow-lg cursor-pointer ${
              selectedPlan === plan
                ? "bg-green-600"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
            onClick={() => handlePlanChange(plan)}
          >
            <h2 className="text-2xl font-bold">{membershipPlans[plan].name}</h2>
            <p className="text-lg mt-2">{membershipPlans[plan].price}</p>
          </div>
        ))}
      </div>

      {/* Selected Plan Details */}
      <div className="mt-10 max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          {membershipPlans[selectedPlan].name} Plan
        </h2>
        <ul className="space-y-2">
          {membershipPlans[selectedPlan].features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              {feature}
            </li>
          ))}
        </ul>
        <button
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
          onClick={() =>
            alert(`Subscribed to ${membershipPlans[selectedPlan].name} Plan!`)
          }
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default PremiumComponent;
