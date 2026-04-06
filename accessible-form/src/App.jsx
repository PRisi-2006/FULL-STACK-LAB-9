import { useState } from "react";
import "./index.css";

function App() {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("All fields are required");
  };

  return (
    <main className="main">
      <div className="card">
        <h1>Contact Form</h1>

        <form onSubmit={handleSubmit} noValidate>

          {error && (
            <p role="alert" aria-live="assertive" className="error">
              {error}
            </p>
          )}

          <div className="field">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" />
          </div>

          <div className="field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp">
              We will never share your email.
            </small>
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4"></textarea>
          </div>

          <button type="submit">Send Message</button>

        </form>
      </div>
    </main>
  );
}

export default App;