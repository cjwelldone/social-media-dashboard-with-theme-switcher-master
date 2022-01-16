//Src: https://www.pullrequest.com/blog/how-to-implement-dark-mode-with-css-js/

// Wait for document to load
document.addEventListener("DOMContentLoaded", function(event) {
    document.documentElement.setAttribute("data-theme", "light");
    
    // Get the switch button
    const themeSwitcher = document.getElementById("theme-switcher");

    // When button gets clicked
    themeSwitcher.addEventListener('click', switchMode);

    function switchMode () {
      // Get the current selected theme, on the first run
      // it should be `dark`
      const currentTheme = document.documentElement.getAttribute("data-theme");

      // Switch between `dark` and `light`
      let switchToTheme = currentTheme === "dark" ? "light" : "dark"

      // Set current theme to the new one
      document.documentElement.setAttribute("data-theme", switchToTheme);
    }
  });