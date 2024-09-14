const sendMail = () => {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  //   const serviceID = ;
  //   const templateID = ;
  emailjs
    .send("service_jgz9piv", "template_7kvz44l", params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
};

// Glitch effect
const glitchElement = document.querySelector(".glitch");
setInterval(() => {
  glitchElement.classList.add("active");
  setTimeout(() => {
    glitchElement.classList.remove("active");
  }, 200);
}, 3000);
