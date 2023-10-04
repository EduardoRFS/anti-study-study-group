type Id = <A>(x: A) => A;
const id: Id = <A>(x: A) => x;

type Bool = <A>(x: A) => (y: A) => A;
const true_: Bool = (x) => (y) => x;
const false_: Bool = (x) => (y) => y;

type Nat = <A>(z: A) => (s: (acc: A) => A) => A;
const zero: Nat = (z) => (s) => z;
const succ: (n: Nat) => Nat =
  (n) =>
  <A>(z: A) =>
  (s: (acc: A) => A) =>
    s(n<A>(z)(s));

const add: (x: Nat) => (y: Nat) => Nat = (x) => (y) => x(y)(succ);
const mul: (x: Nat) => (y: Nat) => Nat = (x) => (y) =>
  x(zero)((acc) => add(acc)(y));

const one = succ(zero);
const two = succ(one);
const four = mul(two)(two);
const sixteen = mul(four)(four);

console.log(sixteen(0)((acc) => acc + 1));
