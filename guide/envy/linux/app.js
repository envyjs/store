(function() {
  const windowTitle = 'Linux';
  const customHTML = `
  <iframe id="emb" src="http://store.envy.ink/guide/envy/linux/index.html?cpu=x86">
  `;

  // Create a window dynamically
  createWindow(windowTitle, customHTML, 720, 580);
})();
