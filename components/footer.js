export function renderFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
      <p>&copy; ${new Date().getFullYear()} TechArte. Todos os direitos reservados.</p>
    `;
    return footer;
  }
  