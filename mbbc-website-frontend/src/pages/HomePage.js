import React from "react";
import { Link } from "react-router-dom";

/* eslint jsx-a11y/media-has-caption: 0 */

const HomePage = () => (
  <>
    <div className="home-video-block">
      <div className="video-overlay" />
      <div className="text-overlay">
        <h1>Do you know your destiny?</h1>
        <p>
          To find out your destiny, you are invited to join our church services
          on Sundays at 9:30 a.m. and 5:00 p.m., in 11-13 Royal St., Kenwick,
          WA, and Live Streaming on Wednesdays at 7:00 p.m.
        </p>
        <p>
          For our online location, click the &ldquo;Live Preaching&rdquo; button
          below.
        </p>
        <p>
          Please note the times above are local time (UTC+8) in Perth, WA,
          Australia.
        </p>
        <Link
          to={{
            pathname: "https://www.facebook.com/perthmbbc/",
          }}
          className="home-button"
          target="_blank"
        >
          LIVE PREACHING
        </Link>
        <Link to="/contact" className="home-button">
          BOOKSTORE
        </Link>
      </div>
      <video className="home-video" autoPlay loop muted>
        <source src="/test-footage.mp4" type="video/mp4" />
      </video>
    </div>

    <div className="home-flex-wrapper">
      <div className="home-left-box">
        <div className="home-left-box-wrapper">
          <h2 className="home-subtitle">OUR MISSION &amp; VISION</h2>
          <p className="home-text">
            At Metropolitan Bible Baptist Church our vision and mission is to
            teach people repentance toward God and lead them to believe on the
            Lord Jesus Christ.
          </p>
          <p className="home-sub-text">
            Testifying both to the Jews, and also to the Greeks, repentance
            toward God, and faith toward our Lord Jesus Christ.
          </p>
          <p className="home-sub-text">Acts 20:21</p>
          <Link to="/about" className="link-button">
            LEARN MORE
          </Link>
        </div>
      </div>

      <div className="home-right-box">
        <div className="home-right-box-wrapper">
          <h2 className="home-subtitle">LATEST MESSAGE</h2>
          <iframe
            src="https://www.youtube.com/embed/lrtWhm1I70g"
            title="Latest message from MBBC"
            frameBorder="0"
          />
        </div>
      </div>
    </div>

    <h2 className="home-timetable-title">Services</h2>
    <div className="home-timetable-wrapper">
      <div className="home-timetable-left">
        <h3 className="home-timetable-day-title">Sundays</h3>
        <ul className="timetable-list">
          <li>9:30 am - Doctrine Class</li>
          <li>10:40 am - Preaching Service</li>
          <li>5:00 pm - Evening Service</li>
        </ul>
      </div>
      <div className="home-timetable-left">
        <h3 className="home-timetable-day-title">Wednesdays</h3>
        <ul className="timetable-list">
          <li>7:00 pm - Bible Study and Prayer Meeting</li>
        </ul>
        <Link to="/contact" className="link-button">
          LEARN MORE
        </Link>
      </div>
    </div>

    <img src="./palms.jpg" alt="palms" />

    <p>
      React is a popular JavaScript library for building reusable,
      component-driven user interfaces for web pages or applications.
    </p>
    <p>
      React combines HTML with JavaScript functionality into its own markup
      language called JSX. React also makes it easy to manage the flow of data
      throughout the applica tion.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
      minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
      iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
      consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </p>
  </>
);

export default HomePage;
