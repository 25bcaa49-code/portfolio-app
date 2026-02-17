document.getElementById("contactForm").addEventListener("submit", async e => {
  e.preventDefault();

  const data = {
    name: names.value,
    email: email.value,
    message: message.value
  };

  await fetch("/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  alert("Message saved!");
});
