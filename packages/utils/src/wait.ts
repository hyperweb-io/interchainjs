export async function waitUntil(date: Date, timeout: number = 90000): Promise<void> {
  const delay = date.getTime() - Date.now();
  if (delay > timeout) {
    throw new Error('Timeout to wait until date');
  }
  await new Promise(resolve => setTimeout(resolve, delay + 3000));
}

