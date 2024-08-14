import "./Contacts.css";
const Contacts = () => {
  return (
    <>
      <section className="contacts-container">
        <form>
          <h1>JOIN HYDRA</h1>
          <div className="_line"></div>
          <p>Let's Build Your VR Experience</p>
          <div className="form-container">
            <input type="text" name="firstName" id="firstName" placeholder="First Name"/>
            <input type="text" name="lastName" id="lastName" placeholder="Last Name"/>
            <input type="text" name="email" id="email" placeholder="Email"/>
            <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone Number"/>
            <input type="text" name="subject" id="subject" placeholder="Subject"/>
            <textarea name="message" id="message" placeholder="Tell Us Something...">

            </textarea>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contacts;
