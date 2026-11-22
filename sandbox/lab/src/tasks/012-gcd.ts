/**
 * Task 012: gcd
 *
 * Greatest common divisor of two non-negative integers.
 */
export function gcd(a: number, b: number): number {
  let x = Math.floor(Math.abs(a));
  let y = Math.floor(Math.abs(b));
  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}
