# I — Interface Segregation Principle (ISP)

Nenhum cliente deve ser forçado a depender de métodos que não utiliza.

## Conceito
Divida interfaces grandes em menores e mais específicas para que as classes implementem apenas os métodos que realmente usam.

## Exemplo
```ts
// Violando o ISP
interface Worker {
  work(): void;
  eat(): void;
}

class Robot implements Worker {
  work() { /*...*/ }
  eat() {
    throw new Error("Robots don't eat");
  }
}

// Aplicando o ISP
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

class Human implements Workable, Eatable {
  work() { /*...*/ }
  eat() { /*...*/ }
}

class Robot implements Workable {
  work() { /*...*/ }
}