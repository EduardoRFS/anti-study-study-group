# System's Studies

## Turing Machine

Alan Turing, 1936, head, infinite tape, universal(turing complete, can run any program), undecidable(can loop forever), halting problem.

### Turing Complete

Any turing complete system, can compute anything that the turing machine can.

Common trick is to show that you can have an interpreter for your machine on a system X, implying that X is also universal.

### Not & Or / Not & And / NAND

### References

- https://en.wikipedia.org/wiki/Turing_machine
- https://en.wikipedia.org/wiki/Halting_problem
- https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis
- https://en.wikipedia.org/wiki/Logic_gate

## Simply Typed Lambda Calculus

Alonzo Church, 1940, simply typed, not turing complete, strong normalizing, sound, logically consistent.

Fortran, Algol 60, C is an example of the STLC

```rust
(x : Int) => x + 2

(incr : Int -> Int) => incr 1

((x : @rec F. F -> Int) => x x)

((x : Int) => x + 1)
```

### References

- https://en.wikipedia.org/wiki/Simply_typed_lambda_calculus
- https://en.wikipedia.org/wiki/Normal_form_(abstract_rewriting)
- https://en.wikipedia.org/wiki/Rule_of_least_power
