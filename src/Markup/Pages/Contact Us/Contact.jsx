import React from "react";
import Layout from "../../Pages/Layout/Layout";
import classes from "./contact.module.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

function Contact() {
  return (
    <Layout>
      <div className={classes.contact}>
        <div className={classes.contactus}>
          <h1>Contact Us</h1>
          <Link className={classes.home} to="/">
            Home
          </Link>
          {"  "}
          <span>&gt;</span>
          {"  "}
          <Link style={{ color: "white"}} to="/about">
            About Us
          </Link>
        </div>
        <div className={classes.location}>
          {/* Google Map */}
          <div className={classes.map}>
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBJ5LEV-K2PmE12OsC34ZMHWh6r6uvjfbs&q=54B,+Tailstoi+Town,+5238+MT,+La+city,+IA+5224"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Address Details */}
          <div>
            <div>
              <h4>Our Address</h4>
              <p>
                Completely synergize resource taxing relationships via niche
                markets. Professionally cultivate one-to-one customer service.
              </p>
              <div />
              <div className={classes.icon}>
                <LocationOnIcon style={{ color: "red" }} />
                <div className={classes.address}>
                  <h5>Address:</h5>
                  <p>54B, Tailstoi Town 5238 MT, La city, IA 5224</p>
                </div>
              </div>
              <div className={classes.icon}>
                <EmailIcon style={{ color: "red" }} />
                <div className={classes.address}>
                  <h5>Email:</h5>
                  <p>contact@buildtruck.com</p>
                </div>
              </div>
              <div className={classes.icon}>
                <PhoneIcon style={{ color: "red" }} />
                <div className={classes.address}>
                  <h5>Phone:</h5>
                  <p>1800 456 7890 1254 897 3654</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.appointmentcontainer}>
          <div className={classes.appointmentBox}>
            <div className={classes.appointment}>
              <h5 style={{ color: "white" }}>
                Schedule Your Appointment Today
              </h5>
              <p>Your Automotive Repair & Maintenance Service Specialist</p>
            </div>
            <div className={classes.number}>
              <h4 style={{ color: "white" }}>1800.456.7890</h4>
            </div>
            <div className={classes.contactInfo}>
              <button>
                <Link
                  to="/contact"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  CONTACT US
                </Link>
                <i className="fa fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
