export const httpValidationErrorsParser = (errors, defaultErrorState) => errors
  .reduce((accumulator, error) => {
    const { message, path } = error;
    return {
      ...accumulator,
      [path[0]]: {
        isErrored: true,
        message,
      },
    };
  }, defaultErrorState);
