
const forgotPasswordLink = document.getElementById('buttone');

forgotPasswordLink.addEventListener('click', async (event) => {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  await forgetPassword(email);
  emailInput.value = "";
});

const forgetPassword = async (email) => {
  try {
    const response = await axios.post('http://localhost:3000/api/nodemail/forget', { email });
    const loginPageLink = "http://127.0.0.1:5500/frontend/login/login.html";
    console.log("grwgv",response.status);
    if (response.status === 200) {
      alert("Check your email for password reset instructions.");
      window.location.href = loginPageLink;
    }
  } catch (error) {
    console.log(error);
    alert("Email does not exist.");
  }
};
