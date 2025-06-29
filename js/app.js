import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { createCard } from '../components/card.js';
import { innovations } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inserir header
  const headerContainer = document.getElementById('header');
  headerContainer.replaceWith(renderHeader());

  // Inserir cards
  const container = document.getElementById('cards-container');
  innovations.forEach(item => {
    const card = createCard(item);
    container.appendChild(card);
  });

  // Inserir footer
  const footerContainer = document.getElementById('footer');
  footerContainer.replaceWith(renderFooter());
});
