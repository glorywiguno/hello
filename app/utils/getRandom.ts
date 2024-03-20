/**
 * returns random string between str1 or str2, or just returns nothing
 */
export const getFromRandom2 = (str1: string, str2: string): string | undefined => {
  return Math.random() > 0.5 ? str1 : Math.random() > 0.3 ? str2 : undefined
}
export const getRandomInt = (max: number) => Math.floor(Math.random() * max);
