# L — Liskov Substitution Principle (LSP)

Objetos de uma superclasse devem poder ser substituídos por objetos de suas subclasses sem quebrar o comportamento do sistema.

## Conceito
Se uma classe `S` é uma subclasse de `T`, então objetos do tipo `T` podem ser substituídos por objetos do tipo `S` sem alterar a correção do programa.

## Exemplo
```ts
// Violando o LSP
class Bird {
  fly() { /*...*/ }
}

class Ostrich extends Bird {
  fly() {
    throw new Error("Ostriches can't fly");
  }
}

// Aplicando o LSP
interface Bird {
  layEgg(): void;
}

interface FlyingBird extends Bird {
  fly(): void;
}

class Sparrow implements FlyingBird {
  layEgg() { /*...*/ }
  fly() { /*...*/ }
}

class Ostrich implements Bird {
  layEgg() { /*...*/ }
}