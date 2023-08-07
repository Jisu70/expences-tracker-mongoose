const resetPasswordForm = (email,token) => {
  return `<!DOCTYPE html>
<html>
<head>
    <title>Reset your Password</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>

<div class="container">
    <h2>Reset your Password</h2>
    <form>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="${email}" readonly >
        </div>
        <div class="form-group">
            <label for="password">New Password:</label>
            <input type="password" class="form-control" id="password" placeholder="Enter new password">
        </div>
        <button id="button" class="btn btn-primary">Submit</button>
    </form>
</div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script>
const button = document.getElementById('button');
button.addEventListener('click', async (event) => {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const email = "${email}";
    const object = {
        email,
        password
    };
    console.log(object);
    const response = await fetch('http://localhost:3000/api/nodemail/update-password?token=${token}', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });
    if (response.status === 200) {
        alert("Password reset Successfully ");
        window.location.href = "http://127.0.0.1:5500/frontend/login/login.html";
      }
});
</script>
</body>
</html>
`;
};

module.exports = resetPasswordForm;
