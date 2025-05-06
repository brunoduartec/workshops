
# Correlação dos Princípios SOLID com Design Patterns (GoF)

Esta tabela tem como objetivo ajudar desenvolvedores a identificar padrões de projeto a partir dos princípios SOLID. A ideia é: ao perceber que um princípio está sendo violado, o desenvolvedor pode consultar os padrões que ajudam a resolver esse problema.

| **Princípio SOLID** | **Design Patterns Relacionados** |
|---------------------|----------------------------------|
| **SRP** - Single Responsibility Principle | Facade, Mediator, Builder, Chain of Responsibility, Command, Interpreter, Iterator, Memento, Singleton, Flyweight |
| **OCP** - Open/Closed Principle | Strategy, Decorator, Template Method, Factory Method, Abstract Factory, Prototype, Adapter, Composite, Bridge, Proxy, Observer, State, Visitor, Interpreter, Command, Chain of Responsibility, Builder |
| **LSP** - Liskov Substitution Principle | Composite, Template Method, State, Strategy |
| **ISP** - Interface Segregation Principle | Observer, Visitor |
| **DIP** - Dependency Inversion Principle | Strategy, Bridge, Factory Method, Abstract Factory, Command, Mediator, Proxy, Singleton (negativamente), Observer |

> Nota: Alguns padrões aparecem em mais de um princípio porque ajudam a resolver múltiplas violações. O contexto de uso determina qual princípio está mais fortemente relacionado.
