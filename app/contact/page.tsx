"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validate = () => {
    if (!name || !email || !message) {
      setErrorMsg("All fields are required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return false;
    }

    setErrorMsg("");
    return true;
  };

  const handleSend = async () => {
    if (!validate()) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          company: "", // honeypot anti-spam field
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section>
      <h1 className="page-title">Contact</h1>

      <p>Use the form below to send me a message directly.</p>

      <div className="contact-form">
        {/* Honeypot field (hidden from users) */}
        <input type="text" name="company" style={{ display: "none" }} />

        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />
        </label>

        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
          />
        </label>

        <button onClick={handleSend} disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send"}
        </button>

        {errorMsg && <p className="form-error">{errorMsg}</p>}
        {status === "success" && (
          <p className="form-success">Message sent successfully.</p>
        )}
        {status === "error" && (
          <p className="form-error">Something went wrong. Try again.</p>
        )}
      </div>

      <div className="contact-links">
        <p>Also feel free to check out my profiles:</p>
        <ul>
          <li>
            <a
              href="https://github.com/AMaharaj16"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/aayush-maharaj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/aayush.maharaj16/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}