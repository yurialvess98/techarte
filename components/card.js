export function createCard({ title, description, image }) {
    const card = document.createElement('div');
    card.className = 'card';
  
    card.innerHTML = `
      <img src="${image}" alt="${title}">
      <div class="card-content">
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
    `;
  
    return card;
  }
  