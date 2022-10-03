import React from "react";

const Contact = () => {
  return (
    <div>
      {" "}
      <section className="services ">
        <h1>What can us do for you?</h1>
        <p>
          We are ready to work on a project of any complexity, whether it’s
          commercial or residential.
        </p>

        <div className="form">
          <form action="#" method="post">
            <div className="names">
              <input
                className="inpt"
                type="text"
                name="txtname"
                id=""
                placeholder="Your Name*"
              />
              <input
                className="inpt"
                type="email"
                name="txtemail"
                id=""
                placeholder="Email*"
              />
            </div>
            <div className="reasonNumber">
              <input
                className="inpt"
                type="text"
                name="txtcontact"
                id=""
                placeholder="Reason for Contacting*"
              />
              <input
                className="inpt"
                type="number"
                name="txtnumber"
                id=""
                placeholder="Phone"
              />
            </div>
            <div className="area">
              <textarea
                name=""
                id=""
                cols="72"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>

            <input className="btnsub" type="submit" value="Submit" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
