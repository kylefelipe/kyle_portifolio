// Execício 1 N!

const nFatorial = (n) => n === 0|| n === 1 ? 1: n * nFatorial(--n);

console.log(nFatorial(4));
