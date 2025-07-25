
  const button = document.getElementById('theme-toggle');
  const body = document.body;  // Get the body element

  // Toggle class
  button.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      button.textContent = 'Dark Mode';
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      button.textContent = 'Light Mode';
    }
  });

  // Optional: save user preference
  // you can use localStorage if you want persistence between reloads
