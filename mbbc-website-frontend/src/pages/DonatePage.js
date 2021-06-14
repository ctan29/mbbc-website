import React from "react";
import { Link } from "react-router-dom";

const DonatePage = () => (
  <>
    <h1 className="decorative-title">Online Donation</h1>
    <div className="about-text center-wrapper">
      <p>
        If you wish to donate to the ministry with any amount, please click the
        donate button below.
      </p>
      <p>Thank you for your generosity.</p>
    </div>
    <div className="center-wrapper">
      <Link
        to={{
          pathname: "https://www.paypal.com/paypalme/donate564?locale.x=en_AU",
        }}
        className="link-button"
        target="_blank"
      >
        DONATE
      </Link>
    </div>
    <p className="about-quote center-wrapper big-quotes">
      Bring ye all the tithes into the storehouse, that there may be meat in
      mine house, and prove me now herewith, saith the LORD of hosts, if I will
      not open you the windows of heaven, and pour you out a blessing, that
      there shall not be room enough to receive it. And I will rebuke the
      devourer for your sakes, and he shall not destroy the fruits of your
      ground; neither shall your vine cast her fruit before the time in the
      field, saith the LORD of hosts.
    </p>
    <p className="about-quote center-wrapper">(Malachi 3:10-11)</p>
  </>
);

/*  <span className="big-quote">&ldquo;</span> <span className="big-quote">&rdquo;</span>  */

export default DonatePage;
