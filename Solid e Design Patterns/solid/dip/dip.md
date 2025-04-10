# D — Dependency Inversion Principle (DIP)

Dependa de abstrações, não de implementações.

## Conceito
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações (interfaces).

## Exemplo
```ts
// Violando o DIP
class MySQLDatabase {
  save(data: string) { /*...*/ }
}

class UserService {
  private db = new MySQLDatabase();
  saveUser(data: string) {
    this.db.save(data);
  }
}

// Aplicando o DIP
interface Database {
  save(data: string): void;
}

class MySQLDatabase implements Database {
  save(data: string) { /*...*/ }
}

class UserService {
  constructor(private db: Database) {}

  saveUser(data: string) {
    this.db.save(data);
  }
}