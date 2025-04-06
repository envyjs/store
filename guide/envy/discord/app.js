(function() {
    const windowTitle = 'Discord';
    const customHTML = `
    <iframe id="emb" src="https://www.discord.com/app">
    `;
  
    // Create a window dynamically
    createWindow(windowTitle, customHTML, 720, 580);
  })();