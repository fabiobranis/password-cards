import { jest, describe, it } from '@jest/globals';

import { BadRequestError } from '../errors/bad-request.error';
import { NotFoundError } from '../errors/not-found.error';
import { httpErrorHandler } from './http-error.handler';

const mockRes = {
  status: jest.fn(() => ({
    send: jest.fn(),
  })),
};

describe('httpErrorHandler', () => {
  describe('when error is BadRequestError', () => {
    it('should send back response with 422 status code', () => {
      httpErrorHandler(new BadRequestError({
        message: 'fake',
        errors: [],
      }), mockRes);

      expect(mockRes.status).toBeCalledWith(422);
    });
  });
  describe('when error is NotFoundError', () => {
    it('should send back response with 422 status code', () => {
      httpErrorHandler(new NotFoundError(), mockRes);

      expect(mockRes.status).toBeCalledWith(404);
    });
  });
});
