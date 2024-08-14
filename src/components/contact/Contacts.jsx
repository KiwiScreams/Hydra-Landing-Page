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
    }
  };
  return (
    <>
      <section className="contacts-container">
        <form onSubmit={handleSubmit}>
          <h1>JOIN HYDRA</h1>
          <div className="_line"></div>
          <p>Let's Build Your VR Experience</p>
          <div className="form-container">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            {errors.firstName && (
              <div className="error">{errors.firstName}</div>
            )}
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            {errors.lastName && <div className="error">{errors.lastName}</div>}
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
            {errors.phoneNumber && (
              <div className="error">{errors.phoneNumber}</div>
            )}
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
            {errors.subject && <div className="error">{errors.subject}</div>}
            <textarea
              name="message"
              id="message"
              placeholder="Tell Us Something..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            {errors.message && <div className="error">{errors.message}</div>}
          </div>
          <button>SEND TO HYDRA</button>
        </form>
      </section>
    </>
  );
};

export default Contacts;
