/* eslint-disable no-console */
import {
  allCards, createCard, removeCard, updateCard,
} from '../services/password-card.service.js';
import { httpErrorHandler } from '../utils/http-error.handler.js';

export const getAll = (_req, res) => res.type('json').send(allCards());

export const create = (req, res) => {
  try {
    return res.type('json').send(createCard(req.body));
  } catch (err) {
    console.log(err.stack);

    return httpErrorHandler(err, res);
  }
};

export const put = (req, res) => {
  try {
    return res
      .type('json')
      .send(updateCard(req.params.id, req.body));
  } catch (err) {
    console.log(err.stack);

    return httpErrorHandler(err, res);
  }
};

export const remove = (req, res) => {
  try {
    return res.send(removeCard(req.params.id));
  } catch (err) {
    console.log(err.stack);

    return httpErrorHandler(err, res);
  }
};
