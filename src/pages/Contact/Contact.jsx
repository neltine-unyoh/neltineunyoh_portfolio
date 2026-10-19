import { useState } from "react";
import { profile } from "../../data/site";
import "./Contact.css";

function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button type="button" className="contact-copy" onClick={copy} aria-label={`Copy ${label}`}>
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

const icons = {
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z",
  chat: "M4 5h16v11H8l-4 4z",
  link: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
  pin: "M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  doc: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6",
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-svg">
      <path d={icons[name]} />
    </svg>
  );
}

function Contact() {
  const tel = profile.phone.replace(/\s/g, "");

  const rows = [
    { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}`, copy: true },
    { icon: "phone", label: "Phone", value: profile.phone, href: `tel:${tel}`, copy: true },
    { icon: "chat", label: "WhatsApp", value: "Message me on WhatsApp", href: profile.whatsapp, external: true },
    profile.linkedin && { icon: "link", label: "LinkedIn", value: "Connect on LinkedIn", href: profile.linkedin, external: true },
  ].filter(Boolean);

  return (
    <main className="contact">
      <section className="container page-top contact-grid">
        <div className="contact-photo-wrap">
          <img
            className="contact-photo"
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width="900"
            height="1125"
          />
        </div>

        <div className="contact-main">
          <p className="contact-status">
            <span aria-hidden="true"></span>
            {profile.availability}
          </p>
          <h1 className="contact-title">Let's talk.</h1>
          <p className="lead">
            I'm open to product manager roles, remote or in Cameroon. If you're hiring or building something, I'd like
            to hear about it. I usually reply within a day.
          </p>

          <div className="contact-card">
            <div className="contact-person">
              <strong>{profile.name}</strong>
              <span>{profile.role}</span>
            </div>
            <ul className="contact-rows">
              {rows.map((row) => (
                <li key={row.label}>
                  <span className="contact-icon">
                    <Icon name={row.icon} />
                  </span>
                  <div className="contact-text">
                    <small>{row.label}</small>
                    <a href={row.href} {...(row.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                      {row.value}
                    </a>
                  </div>
                  {row.copy && <CopyButton value={row.value} label={row.label.toLowerCase()} />}
                </li>
              ))}
              <li>
                <span className="contact-icon">
                  <Icon name="pin" />
                </span>
                <div className="contact-text">
                  <small>Based in</small>
                  <span>
                    {profile.location} ({profile.timezone}), working remotely
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="btn-row">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              Email me
            </a>
            <a href={profile.resumeUrl} className="btn btn-secondary" target="_blank" rel="noreferrer">
              <Icon name="doc" />
              Download resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
