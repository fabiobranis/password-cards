/* eslint-disable no-undef */
import {
  beforeAll, describe, expect, it, vi,
} from 'vitest';
import { get, upsert } from './client';

const spy = vi.spyOn(window, 'fetch');
const endpoint = 'fake';
const body = { fake: 'fake' };
const param = 'fake';

spy.mockResolvedValue('');

describe('utils - client', () => {
  describe('get', () => {
    beforeAll(async () => {
      await get({ endpoint });
    });
    it('should call with arguments', () => {
      const path = [API_ENDPOINT, endpoint].filter(Boolean).join('/');
      const url = new URL(path, `http://${SERVER_ADDRESS}:${SERVER_PORT}`);

      expect(spy).toBeCalledWith(url, {
        body: undefined,
        headers: undefined,
        method: 'GET',
      });
    });
  });

  describe('upsert', () => {
    it('should call POST when without param', async () => {
      await upsert({ endpoint, body });

      const path = [API_ENDPOINT, endpoint].filter(Boolean).join('/');
      const url = new URL(path, `http://${SERVER_ADDRESS}:${SERVER_PORT}`);

      expect(spy).toBeCalledWith(url, {
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      });
    });

    it('should call PUT when with param', async () => {
      await upsert({ endpoint, body, param });

      const path = [API_ENDPOINT, endpoint, param].filter(Boolean).join('/');
      const url = new URL(path, `http://${SERVER_ADDRESS}:${SERVER_PORT}`);

      expect(spy).toBeCalledWith(url, {
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
      });
    });
  });
});
