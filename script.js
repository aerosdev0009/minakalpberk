function checkPassword() {
  const input = document.getElementById('password').value.trim();
  const correct = "01-06-2024";
  const error = document.getElementById('error');

  if (input === correct) {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('content').style.display = 'flex';
    document.getElementById('music').play();
  } else {
    error.textContent = "❌ Yanlış tarih, tekrar dene!";
  }
}