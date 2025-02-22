import { useState } from "react";

const VerificationForm = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const mobilePattern = /^[0-9]{10}$/;

  const validateEmail = () => {
    setEmailError(emailPattern.test(email) ? "" : "Invalid email format");
  };

  const validateMobile = () => {
    setMobileError(mobilePattern.test(mobile) ? "" : "Mobile number must be 10 digits");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validateMobile();

    if (!emailError && !mobileError) {
      alert("Form submitted successfully! Redirecting...");
      window.location.href = "/nextpage"; // Change to your desired route
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 p-6">
      <div className="bg-beige p-10 rounded-lg shadow-xl w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Email & Mobile Verification</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-left">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            className="block w-full p-2 mt-1 border border-gray-300 rounded"
            required
          />
          {emailError && <span className="text-red-500 text-sm">{emailError}</span>}
          
          <label className="block mt-4 text-left">Mobile Number:</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            onBlur={validateMobile}
            className="block w-full p-2 mt-1 border border-gray-300 rounded"
            required
          />
          {mobileError && <span className="text-red-500 text-sm">{mobileError}</span>}
          
          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white p-3 rounded hover:bg-pink-400 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerificationForm;
