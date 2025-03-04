import React, { useState } from "react";

function SubscriptionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in both Name and Email.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Successfully subscribed!");
  };

  return (
    <form id="subscription-form" onSubmit={handleSubmit}>
      <label htmlFor="">Subscription Form</label>
      <input type="text" id="name" value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name" />

      <input type="email" id="email" value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email" />
      <button type="submit">Subscribe</button>
    </form>
  );
}

export default SubscriptionForm;
