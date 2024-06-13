class EmptyError extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export function assertEmpty(data: any, name?: string) {
  const _name = name || 'target';
  if (typeof data === 'undefined') {
    throw new EmptyError(`${_name} is undefined`);
  }
  if (data === null) {
    throw new EmptyError(`${_name} is null`);
  }
}

export function isEmpty(data: any) {
  if (typeof data === 'undefined' || data === null) {
    return true;
  }
  return false;
}
