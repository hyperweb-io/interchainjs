export const snakeToPascal = (str: string): string => {
  return str
    .split('/')
    .map((snake) =>
      snake
        .split('_')
        .map((substr) => substr.charAt(0).toUpperCase() + substr.slice(1))
        .join('')
    )
    .join('/');
};
