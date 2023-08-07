const paymenntSuccess = () => {
  return `<!DOCTYPE html>
  <html>
  <head>
    <title>Payment Success</title>
    <style>
      body {
        text-align: center;
        margin-top: 100px;
        font-family: Arial, sans-serif;
      }
      h1 {
        color: #1abc9c;
      }
      button {
        padding: 10px 20px;
        font-size: 16px;
        background-color: #1abc9c;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      button:hover {
        background-color: #16a085;
      }
    </style>
  </head>
  <body>
    <h1>Payment Successful!</h1>
    <p>Thank you for your payment. Your transaction was successful.</p>
    <button onclick="goToHome()">Back to Home</button>
  
    <script>
      function goToHome() {
        window.location.href = "http://127.0.0.1:5500/frontend/main/index.html"; 
      }
    </script>
  </body>
  </html>
  `
}

module.exports = paymenntSuccess;