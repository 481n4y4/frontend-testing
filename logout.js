async function logout() {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "login.html";
    return;
  }

  await fetch("http://127.0.0.1:8000/api/logout", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  localStorage.removeItem("token");

  window.location.href = "login.html";
}
