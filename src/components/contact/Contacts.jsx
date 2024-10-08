import "./Contacts.css";
import { useState } from "react";
const Contacts = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessPanel, setShowSuccessPanel] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!firstName) {
      errors.firstName = "First name is required";
    }
    if (!lastName) {
      errors.lastName = "Last name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{3}-\d{3}-\d{4}$/.test(phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }
    if (!subject) {
      errors.subject = "Subject is required";
    }
    if (!message) {
      errors.message = "Message is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setSubject("");
      setMessage("");
      setIsSubmitted(true);
      setShowSuccessPanel(true);
      setTimeout(() => {
        setShowSuccessPanel(false);
      }, 3000);
    }
  };
  return (
    <>
      <section className="contacts-container" id="howTo">
        <form onSubmit={handleSubmit}>
          <h1>JOIN HYDRA</h1>
          <div className="_line"></div>
          <p>Let's Build Your VR Experience</p>
          <div className="form-container">
            <div className="input">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
              {errors.firstName && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.firstName}
                </div>
              )}
            </div>
            <div className="input">
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
              {errors.lastName && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.lastName}
                </div>
              )}
            </div>
            <div className="input">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {errors.email && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.email}
                </div>
              )}
            </div>
            <div className="input">
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
              {errors.phoneNumber && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.phoneNumber}
                </div>
              )}
            </div>
            <div className="input subject">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />
              {errors.subject && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.subject}
                </div>
              )}
            </div>
            <div className="input textarea">
              <textarea
                name="message"
                id="message"
                placeholder="Tell Us Something..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
              {errors.message && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.message}
                </div>
              )}
            </div>
          </div>
          <button>SEND TO HYDRA</button>
        </form>
        {showSuccessPanel && (
          <div className="success-panel">
            <h2>Success!</h2>
            <p>Your message has been sent to Hydra.</p>
          </div>
        )}
      </section>
    </>
  );
};

export default Contacts;
