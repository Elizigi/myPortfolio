import { useRef } from "react";
import CustomButton from "../../components/customButton/CustomButton";
import InputFields from "../../components/inputFields/InputFields";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  const windowSize = window.innerWidth > 769;
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <div id="contacts" className={styles.contactsScreen}>
      <div className={styles.titleRow}>
        <h2 className={styles.spacer}>______ </h2>
        <h4>Contacts</h4>
      </div>
      <div className={styles.contactRow}>
        <div className={styles.contactColumn}>
          <div className={styles.contactsContent}>
            <h3>Get in Contact:</h3>
          </div>

          {windowSize && (
            <CustomButton
              onClick={() => formRef.current?.requestSubmit()}
              full
              written="Send"
            />
          )}
        </div>
        <InputFields formRef={formRef}></InputFields>
      </div>
      {!windowSize && (
        <CustomButton
          onClick={() => formRef.current?.requestSubmit()}
          full
          written="Send"
        />
      )}
    </div>
  );
};

export default Contacts;
