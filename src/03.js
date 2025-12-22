console.log('Genuary 03');

// Fibonacci forever. Create a work that uses the Fibonacci sequence in some way.

function * fib(n) {
  let a = 0, b = 1, c = 0, i = 0;
  while (i < n) {
    yield a;
    c = a + b;
    a = b;
    b = c;
    i++;
  }
}

for (const i of fib(23)) {
  console.log(i)
}
