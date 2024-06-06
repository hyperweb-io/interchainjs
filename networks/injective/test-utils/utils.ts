export const waitUntil = (date: Date, timeout = 90000) => {
  const delay = date.getTime() - Date.now();
  if (delay > timeout) {
    throw new Error("Timeout to wait until date");
  }
  return new Promise((resolve) => setTimeout(resolve, delay + 3000));
};