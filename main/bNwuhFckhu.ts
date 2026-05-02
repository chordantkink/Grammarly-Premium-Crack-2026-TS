function uniqueArray<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}
function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  return uniqueArray([...arr1, ...arr2]);
}
function intersectArrays<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter(value => arr2.includes(value));
}
function differenceArrays<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter(value => !arr2.includes(value));
}
function zipArrays<T, U>(arr1: T[], arr2: U[]): [T, U][] {
  const length = Math.min(arr1.length, arr2.length);
  return Array.from({ length }, (_, i) => [arr1[i], arr2[i]]);
}
function flattenArray<T>(arr: (T | T[])[]): T[] {
  return arr.reduce((flat, toFlatten) => flat.concat(toFlatten), []);
}
function chunkArray<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
}
function rotateArray<T>(arr: T[], count: number): T[] {
  const len = arr.length;
  const rotation = count % len;
  return [...arr.slice(len - rotation), ...arr.slice(0, len - rotation)];
}
function randomSample<T>(arr: T[], n: number): T[] {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}
function arrayToObject<T>(arr: T[], key: keyof T): Record<string, T> {
  return arr.reduce((obj, item) => {
    obj[item[key] as unknown as string] = item;
    return obj;
  }, {} as Record<string, T>);
}
