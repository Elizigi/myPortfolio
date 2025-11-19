import emailjs from "emailjs-com";

const InputFieldsMV = () => {
  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const res = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name, email, message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log("Email sent!", res.status);
    } catch (err) {
      console.error("Failed to send email:", err);
    }
  };

  return { sendForm };
};

export default InputFieldsMV;
