# System's Studies

## Lambda Calculus

A programming language, Alonzo Church, 1930s, goal mechanizing mathematics.

```rust
var : x
abs : x => M
app : M N

1 + 1
(x => x + 1)
(x => x + 1) 1 === 1 + 1
(x => x + 1) 2 === 2 + 1
```

Functions are abstractions, calling functions is applying an abstraction, aka abstraction elimination.

```rust
(x => x + 1) 2 === ?

// BETA REDUCTION
(x => M) N === M{x := N}

(x => x + 1) 2 === (x + 1){x := 2} === 2 + 1
(x => x + 1) y === (x + 1){x := y} === y + 1

(x => x x) (x => x x)
(x x){x := (x => x x)}
(x => x x) (x => x x)
(x x){x := (x => x x)}
(x => x x) (x => x x)
```

Beta reduction is enough to describe recursion, by calling a function with itself, the function can then use itself inside, allowing for all kinds of recursion, including infinite ones.

### References

- https://en.wikipedia.org/wiki/Alonzo_Church
- https://en.wikipedia.org/wiki/Lambda_calculus
- https://en.wikipedia.org/wiki/Fixed-point_combinator
- https://www.youtube.com/watch?v=3VQ382QG-y4
- https://www.youtube.com/watch?v=ZubUegcbOYc
- https://www.youtube.com/watch?v=Ao-OajJdz2s
