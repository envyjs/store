(function() {
  const windowTitle = 'WINE';
  const customHTML = `
  <iframe id="emb" src="http://store.envy.ink/guide/envy/wine/index.html">
  `;

  // Create a window dynamically
  createWindow(windowTitle, customHTML, 800, 600);
})();

notifier.create('Hello from the Example App', 'info', 5000);