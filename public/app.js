const sendOtp = document.getElementById("sendOtp");
const verifyOtp = document.getElementById("verifyOtp");
const message = document.getElementById("message");

sendOtp.addEventListener("click", () => {
  message.innerText = "OTP sent (Demo)";
});

verifyOtp.addEventListener("click", () => {
  message.innerText = "OTP verified (Demo)";
});
