import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className={`${styles.contact_section}`}>
      <h1>CONTACT US</h1>
      <p>
        The Usman Memorial Hospital relies upon the trust and support of its
        Patrons and donors to meet the ever-increasing needs of our
        underprivileged patients. UMH solicits support for Patient Welfare Fund
        and for building additional healthcare facilities.
      </p>
    </div>
  );
};

export default ContactHeader;
