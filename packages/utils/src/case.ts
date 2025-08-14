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

export function snakeToCamel(str: string) {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

export function snakeCaseRecursive(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(snakeCaseRecursive);
  } else if (typeof obj === 'object' && obj !== null) {
    const transformed: any = {};
    for (const [key, value] of Object.entries(obj)) {
      const camelKey = snakeToCamel(key);
      transformed[camelKey] = snakeCaseRecursive(value);
    }
    return transformed;
  }
  return obj;
}
