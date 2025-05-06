
# Correlação entre Design Patterns (GoF) e Princípios SOLID

## 🧱 Padrões de Criação

| **Padrão GoF**       | Categoria     | Princípios SOLID Relacionados     | Justificativa |
|----------------------|---------------|-----------------------------------|---------------|
| Singleton            | Criação    | SRP, DIP (negativamente)          | Centraliza uma única responsabilidade, mas fere o DIP por criar forte acoplamento e dificultar testes |
| Factory Method       | Criação    | OCP, DIP                          | Permite criar objetos sem depender de suas classes concretas |
| Abstract Factory     | Criação    | OCP, DIP                          | Criação de famílias de objetos sem acoplamento direto, favorecendo abstrações |
| Builder              | Criação    | SRP, OCP                          | Separa a construção de um objeto complexo da sua representação |
| Prototype            | Criação    | OCP                               | Cria novos objetos a partir de clones, sem depender de implementações específicas |

## 🧱 Padrões Estruturais

| **Padrão GoF**       | Categoria     | Princípios SOLID Relacionados     | Justificativa |
|----------------------|---------------|-----------------------------------|---------------|
| Adapter              | Estrutural    | SRP, OCP                          | Permite que interfaces incompatíveis trabalhem juntas sem alterar o código existente |
| Bridge               | Estrutural    | OCP, DIP                          | Separa abstração da implementação, permitindo estender ambos independentemente |
| Composite            | Estrutural    | LSP, OCP                          | Permite tratar objetos individuais e composições de forma uniforme |
| Decorator            | Estrutural    | OCP                               | Adiciona responsabilidades dinamicamente sem alterar a classe original |
| Facade               | Estrutural    | SRP                               | Fornece uma interface unificada para um subsistema, separando responsabilidades |
| Flyweight            | Estrutural    | SRP, OCP                          | Reduz duplicação de dados e separa responsabilidades por compartilhamento |
| Proxy                | Estrutural    | OCP, DIP                          | Controla acesso ao objeto real, promovendo extensibilidade via interfaces |

## 🧱 Padrões Comportamentais

| **Padrão GoF**       | Categoria     | Princípios SOLID Relacionados     | Justificativa |
|----------------------|---------------|-----------------------------------|---------------|
| Chain of Responsibility | Comportamental | SRP, OCP                       | Desacopla o remetente do receptor, promovendo flexibilidade |
| Command              | Comportamental | SRP, OCP, DIP                     | Encapsula uma solicitação como objeto, separando ações do executor |
| Interpreter          | Comportamental | SRP, OCP                          | Define gramática e interpretação separadamente |
| Iterator             | Comportamental | SRP                               | Fornece forma padronizada de percorrer elementos sem expor estrutura interna |
| Mediator             | Comportamental | SRP, DIP                          | Reduz acoplamento entre objetos ao centralizar a comunicação |
| Memento              | Comportamental | SRP                               | Permite restaurar estado anterior sem violar encapsulamento |
| Observer             | Comportamental | OCP, ISP                          | Permite reação a eventos sem acoplamento direto entre observadores e observáveis |
| State                | Comportamental | OCP, LSP                          | Permite mudar o comportamento de um objeto sem alterar sua classe |
| Strategy             | Comportamental | OCP, DIP, LSP                     | Define famílias de algoritmos e os torna intercambiáveis |
| Template Method      | Comportamental | OCP, LSP                          | Define o esqueleto de um algoritmo e permite que subclasses redefinam partes dele |
| Visitor              | Comportamental | OCP, ISP                          | Permite adicionar operações a objetos sem modificar suas classes |
