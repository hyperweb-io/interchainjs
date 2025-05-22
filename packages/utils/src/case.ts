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
  return str.substring(0, 1).toLowerCase()
      + str.substring(1)
          .replace(/_([a-z])/g, function ($0: string, $1: string) { return $1.toUpperCase(); });
};