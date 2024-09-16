function getNthElementOfProperty(obj, key, n) {
  if (!obj.hasOwnProperty(key)) {
    return undefined;
  }

  const property = obj[key];
  if (!Array.isArray(property)) {
    return undefined;
  }

  if (n < 0 || n >= property.length) {
    return undefined;
  }

  return property[n];
}
