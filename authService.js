// Correct import statements
import { auth } from './firebaseConfig.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Consolidate the login functionality into one function
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Correct function for creating an account
export function createAccount(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
