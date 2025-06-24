export function camelCaseRecursive(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(camelCaseRecursive);
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [camel(key), camelCaseRecursive(value)])
    );
  }
  return obj;
}

export function camel(str: string) {
  return str.replace(/[_-]([a-zA-Z])/g, (_, letter) => letter.toUpperCase());
};