"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSend = async () => {
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus("Message sent successfully.");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <section>
      <h1 className="page-title">Contact</h1>

      <p>Use the boxes below to send me a message directly:</p>

      <div className="contact-form">
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

        <button onClick={handleSend}>Send</button>
      </div>

      <div className="contact-links">
        <p>Also feel free to check out my profiles:</p>
        <ul>
          <li>
            <a href="https://github.com/AMaharaj16" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aayush-maharaj/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/aayush.maharaj16/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}