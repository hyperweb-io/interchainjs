export type RootNotification = number;

export function createRootNotification(data: unknown): RootNotification {
  const value = Number(data);
  if (Number.isNaN(value)) {
    throw new Error('Root notification must be numeric');
  }
  return value;
}
