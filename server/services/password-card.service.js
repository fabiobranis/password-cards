import { v4 as uuid } from 'uuid';
import { passwordCards } from '../db/password-cards.js';
import { BadRequestError } from '../errors/bad-request.error.js';
import { NotFoundError } from '../errors/not-found.error.js';

const findPasswordCardIndex = (passwordCardId) => {
  const passCardIndex = passwordCards.findIndex(
    ({ id }) => id === passwordCardId,
  );
  if (passCardIndex < 0) throw new NotFoundError('Password card not found');

  return passCardIndex;
};

export const allCards = () => passwordCards;

export const createCard = (passwordCard) => {
  if (passwordCards.findIndex(({ name }) => name === passwordCard.name) >= 0
    && !passwordCard.id) {
    throw new BadRequestError({
      message: 'Database validation error',
      errors: [
        {
          message: 'Password card name already exists',
          path: ['name'],
        },
      ],
    });
  }

  passwordCards.push({ id: uuid(), ...passwordCard });
  return passwordCards[passwordCards.length - 1];
};

export const updateCard = (id, passwordCard) => {
  const passCardIndex = findPasswordCardIndex(id);
  passwordCards[passCardIndex] = { id, ...passwordCard };
  return passwordCards[passCardIndex];
};

export const removeCard = (id) => {
  const passCardIndex = findPasswordCardIndex(id);
  passwordCards.splice(passCardIndex, 1);
};
