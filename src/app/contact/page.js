import styles from "@/styles/contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <h1 className={styles.title}>Contact</h1>
      <p className={styles.subtitle}>Come say hi and let’s have a chat!</p>

      {/* Contact Form */}
      <form className={styles.form}>
        <div className={styles.formGroup}>
          {/* Name Field */}
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="name">Name</label>
            <input className={styles.input} type="text" id="name" placeholder="What's your name?" required />
          </div>

          {/* Email Field */}
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input className={styles.input} type="email" id="email" placeholder="What's your email?" required />
          </div>
        </div>

        {/* Message Field */}
        <div className={styles.textareaWrapper}>
          <label className={styles.label} htmlFor="message">Message</label>
          <textarea className={styles.textarea} id="message" placeholder="What's your message?" required></textarea>
        </div>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
}
