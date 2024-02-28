import React from "react";
import HeaderContact from "./headerContactUs/HeaderContact";
import LandinngFooterSection from "../landingPage/LandinngFooterSection";
import ContactInfo from "./contactInfo/ContactInfo";
import FormContact from "./formContact/FormContact";
import MapContact from "./mapContact/MapContact";

function ContactUs() {
  return (
    <>
      <HeaderContact></HeaderContact>
      <section className="info">
        {/* info contact */}
        <ContactInfo></ContactInfo>
        {/* form contact */}
        <FormContact></FormContact>
      </section>
      {/* section map */}
      <MapContact></MapContact>
      <LandinngFooterSection></LandinngFooterSection>
    </>
  );
}

export default ContactUs;
