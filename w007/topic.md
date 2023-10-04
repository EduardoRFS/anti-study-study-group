# System's Studies

## Substructural Systems

### Affine

Linear but variables can be discarded.

## Linear Lambda Calculus

Model resources, variables must be used only once.

```rust
id = x => x;
incr = x => x + 1;
pair = x => y => (x, y);

// doesn't work, a is not used
sequence = a => b => b;
```

### Resources

```rust
send : (s : Socket, msg : String) -> (s : Socket);
close : (s : Socket) -> ();

f = (s : Socket) => (
  () = close(s);
  // invalid
  send(s, "abc");
);
f = (s : Socket) => (
  s = send(s, "abc");
  close(s);
);

// borrow checking
send : (s : &mut Socket, msg : String) -> ();
close : (s : Socket) -> ();
f = (s : Socket) => (
  send(s, "abc");
  close(s);
);

// mutability
get : (r : Ref) -> (value : Int, r : Ref);
set : (r : Ref, value : Int) -> (r : Ref);
incr = (r : Ref) => (
  (x, r) = get r;
  set r (x + 1)
);

get : (arr : Array, i : Int) -> (value : Int, arr : Array);
set : (arr : Array, i : Int, value : Int) -> (arr : Array);
incr = (arr : Array) => (
  (x, arr) = get arr 0;
  set arr 0 (x + 1)
);

// cycle
Graph =
  | Node (x : Graph);

let rec node = Node node;
node.cell := node;
cell := Some node;

// strong normalization
(x => x x) // invalid
add x = x + x; // invalid

// multiplicative still strong normalizing
add (x $ 2) => x + x;
Fix = (x $ 3 : Fix) -> ();
∞ = ∞ + 1
((x $ 3 : Fix) => x x)

// no monads
main : World -> Result World Error
read : (world : World, file : String) -> (World, Result String String);
print : (world : World, msg : String) -> World;

main world =
  read(world, "tuturu.txt")
  | (world, Ok data) -> print(world, data)
  | (world, Error msg) -> print(world, msg)
```

## Church Encoding

```rust
true = x => y => x;
false = x => y => y;

if = b => then => else => b then else;

for (let x = i; x > 0; x--) {}

zero = z => s => z;
one = z => s => s z;
two = z => s => s (s z);
three = z => s => s (s (s z));

```

## System F

```rust
Type =
  | A
  | <A>T;

Term =
  | x
  | (x : A) -> B
  | (x : A) => M
  | M N
  | M<A>;

M : <A>T
--------
M<B> : T[A := B]

id
  : <A>(x : A) -> A
  = <A>(x : A) => x;

(x : A) =>

(id<String>) : ((x : A) -> A)[A := String]
(id<String>) : (x : String) -> String

// strong normalizing
```

## References

- https://en.m.wikipedia.org/wiki/Substructural_type_system
- https://eduardorfs.github.io/2023/06/27/internalizing_computing/
- https://en.wikipedia.org/wiki/System_F
