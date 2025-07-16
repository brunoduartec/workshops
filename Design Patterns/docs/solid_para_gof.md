# Mapeamento entre SOLID e padrões GoF (Foco em apoio forte)

## 🧱 Padrões Criacionais

| Princípio SOLID                 | Padrões Criacionais Relevantes                |
| ------------------------------- | -------------------------------------------- |
| **SRP (Single Responsibility)** | Abstract Factory, Builder, Factory Method     |
| **OCP (Open/Closed)**           | Abstract Factory, Builder, Factory Method     |
| **DIP (Dependency Inversion)**  | Abstract Factory, Factory Method, Prototype   |

## 🧩 Padrões Estruturais

| Princípio SOLID                 | Padrões Estruturais Relevantes                 |
| ------------------------------- | --------------------------------------------- |
| **SRP (Single Responsibility)** | Adapter, Bridge, Composite, Decorator, Facade |
| **OCP (Open/Closed)**           | Adapter, Bridge, Decorator, Proxy             |
| **DIP (Dependency Inversion)**  | Adapter, Bridge, Composite, Decorator         |

## ⚙️ Padrões Comportamentais

| Princípio SOLID                 | Padrões Comportamentais Relevantes                                                                 |
| ------------------------------- | -------------------------------------------------------------------------------------------------- |
| **SRP (Single Responsibility)** | Chain of Responsibility, Command, Mediator, Observer, State, Strategy, Template Method, Visitor    |
| **OCP (Open/Closed)**           | Chain of Responsibility, Command, Mediator, Observer, State, Strategy, Template Method, Visitor    |
| **DIP (Dependency Inversion)**  | Chain of Responsibility, Mediator, Observer, Strategy                                              |
| **LSP (Liskov Substitution)**   | Strategy, Template Method, State, Visitor                                                          |

---

## ✅ Checklist de Diagnóstico SOLID → Design Patterns (Foco em apoio forte)

| 🚨 Sintoma no Código                                                                 | ⚠️ Princípio SOLID Violado     | 🛠️ Padrões GoF Relevantes (dos 23)                                             | 💡 Dica Prática |
|--------------------------------------------------------------------------------------|--------------------------------|--------------------------------------------------------------------------------|----------------|
| Classe faz muitas coisas (responsabilidade misturada)                               | SRP                            | **Command**, **Strategy**, **Template Method**, **Facade**, **Composite**     | Separe lógicas em classes diferentes com foco único |
| Precisa alterar código existente para novos comportamentos                          | OCP                            | **Decorator**, **Strategy**, **State**, **Template Method**, **Visitor**      | Use composição e polimorfismo para estender |
| Subclasses sobrescrevem métodos e quebram o funcionamento esperado                  | LSP                            | **Strategy**, **Template Method**, **State**, **Visitor**                      | Garanta contratos consistentes e evite surpresas ao substituir |
| Classe depende de implementações concretas                                          | DIP                            | **Abstract Factory**, **Factory Method**, **Bridge**, **Strategy**, **Observer** | Programe para abstrações e injete dependências |
| Muitos `if/else` ou `switch` para executar ações                                    | OCP, SRP                       | **Command**, **Strategy**, **State**, **Template Method**                     | Use polimorfismo para encapsular variações |
| Algoritmo extenso com etapas claras que podem ser delegadas em sequência.           | SRP, OCP                       | **Chain of Responsibility**                                                  | Evite acoplamento criando uma cadeia flexível de handlers |
| Precisa criar objetos com lógica complexa ou dependente de contexto                 | SRP, DIP                       | **Builder**, **Abstract Factory**, **Factory Method**, **Prototype**          | Delegue criação para uma estrutura dedicada |
| Várias classes diferentes fazem chamadas semelhantes a objetos externos             | SRP                            | **Facade**, **Adapter**, **Proxy**                                            | Crie uma fachada ou adaptador para simplificar o uso |
| Muitos objetos similares ocupando memória                                            | SRP, OCP                       | **Flyweight**                                                                 | Compartilhe objetos imutáveis para reduzir uso de memória |
| Precisa navegar por uma coleção sem expor estrutura                                 | SRP, OCP                       | **Iterator**                                                                  | Encapsule a navegação em um iterador dedicado |
| Precisa interpretar ou traduzir linguagens ou expressões                            | SRP, OCP                       | **Interpreter**                                                               | Crie classes para representar e interpretar expressões |
| Deseja desfazer/refazer operações                                                   | SRP, OCP                       | **Command**, **Memento**                                                     | Armazene estado e encapsule ações reversíveis |
| Deseja aplicar ações em todos os elementos de uma estrutura                         | OCP, LSP                       | **Visitor**, **Composite**                                                   | Use Visitor para operações e Composite para estrutura |
| Deseja notificar objetos automaticamente quando outro muda                          | OCP, DIP                       | **Observer**, **Mediator**                                                   | Use Observer para notificação e Mediator para coordenação |
| Muitos objetos precisam interagir mas estão fortemente acoplados                    | DIP, SRP                       | **Mediator**, **Observer**, **Command**                                      | Centralize a comunicação em um objeto intermediário |
| Deseja encapsular construção de objetos complexos                                   | SRP, DIP                       | **Builder**, **Prototype**                                                   | Separe a construção da representação |
| Precisa acessar objetos remotos ou proteger acesso                                  | SRP, DIP                       | **Proxy**                                                                     | Crie um objeto que controla o acesso a outro |
| Precisa oferecer várias implementações intercambiáveis                              | DIP, LSP                       | **Bridge**, **Strategy**, **Adapter**                                        | Separe abstração da implementação concreta |