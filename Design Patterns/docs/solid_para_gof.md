# Mapeamento entre SOLID e padrões GoF

## 🧱 Padrões Criacionais

| Princípio SOLID                 | Padrões Criacionais Relacionados                                |
| ------------------------------- | --------------------------------------------------------------- |
| **SRP (Single Responsibility)** | Abstract Factory, Builder, Factory Method                       |
| **OCP (Open/Closed)**           | Abstract Factory, Builder, Factory Method, Prototype, Singleton |
| **LSP (Liskov Substitution)**   | Abstract Factory, Builder, Factory Method, Prototype            |
| **ISP (Interface Segregation)** | *(nenhum diretamente relacionado)*                              |
| **DIP (Dependency Inversion)**  | Abstract Factory, Builder, Factory Method, Prototype            |

## 🧩 Padrões Estruturais

| Princípio SOLID                 | Padrões Estruturais Relacionados                                |
| ------------------------------- | --------------------------------------------------------------- |
| **SRP (Single Responsibility)** | Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy |
| **OCP (Open/Closed)**           | Adapter, Bridge, Composite, Decorator, Flyweight, Proxy         |
| **LSP (Liskov Substitution)**   | Adapter, Bridge, Composite, Decorator, Flyweight, Proxy         |
| **ISP (Interface Segregation)** | Adapter, Facade                                                 |
| **DIP (Dependency Inversion)**  | Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy |

## ⚙️ Padrões Comportamentais

| Princípio SOLID                 | Padrões Comportamentais Relacionados                                                                                            |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **SRP (Single Responsibility)** | Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor |
| **OCP (Open/Closed)**           | Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Observer, State, Strategy, Template Method, Visitor          |
| **LSP (Liskov Substitution)**   | Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Observer, State, Strategy, Template Method, Visitor          |
| **ISP (Interface Segregation)** | Command, Observer, Strategy                                                                                                     |
| **DIP (Dependency Inversion)**  | Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Observer, State, Strategy, Visitor                           |
