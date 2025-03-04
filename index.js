// Write your code in this file!
let currentUser = "P-Diddy Kasongo";
let welcomeMessage = `Welcome to Flatbook, ${currentUser} !`;
let excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()} !`;
let shortGreeting = `Welcome, ${currentUser[0]} !`;
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    currentUser,
    welcomeMessage,
    excitedWelcomeMessage,
    shortGreeting,
  };
}
