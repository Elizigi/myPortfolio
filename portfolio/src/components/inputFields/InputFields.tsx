import type { FC } from "react";
import styles from "./InputFields.module.scss";
import InputFieldsMV from "./InputFieldsMV";

interface InputFieldsProps {
  formRef: React.RefObject<HTMLFormElement | null>;
}
const InputFields: FC<InputFieldsProps> = ({ formRef }) => {
  const { sendForm } = InputFieldsMV();
  return (
    <div className={styles.inputFieldContainer}>
      <form ref={formRef} onSubmit={(e) => sendForm(e)}>
        <input
          required
          minLength={2}
          name="name"
          placeholder="Name"
          type="text"
        />
        <input required name="email" placeholder="Email" type="email" />
        <textarea
          required
          minLength={6}
          placeholder="Message"
          name="message"
          id="message"
        ></textarea>
      </form>
    </div>
  );
};

export default InputFields;
