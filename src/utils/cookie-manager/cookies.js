import Cookies from "js-cookie";
// Cookies.set("token",value)

export function setCookie(token) {
  try {
    Cookies.set("token", token);
  } catch (error) {
    console.log(error);
  }
}

export function getCookie() {
  const token = Cookies.get("token") || null;
  return token;
}

export function resetCookie() {
  Cookies.remove("token");
}
