# Patterns Selecionados

	1.	Strategy
	2.	Observer
	3.	Factory Method
	4.	Singleton (ainda muito usado, mas controverso)
	5.	Decorator
	6.	Builder
	7.	Adapter
	8.	Command
	9.	Proxy
	10.	Template Method
	11. Abstract Factory


Para fins de redução de escopo, os padrões acima foram selecionados


| **Princípio SOLID** | **Design Patterns Relacionados** |
|---------------------|----------------------------------|
| **SRP** - Single Responsibility Principle | Builder, Command, Singleton |
| **OCP** - Open/Closed Principle | Strategy, Decorator, Template Method, Factory Method, Abstract Factory, Adapter, Proxy, Observer, Command, Builder |
| **LSP** - Liskov Substitution Principle | Template Method, Strategy |
| **ISP** - Interface Segregation Principle | Observer |
| **DIP** - Dependency Inversion Principle | Strategy, Factory Method, Abstract Factory, Command, Proxy, Singleton (negativamente), Observer |


## Escopo do TCC

A lista de padrões com sua relação pode ser visto na integra em [solid para patterns](./solid_para_gof.md). Abaixo foi levantado padrões que mais se encaixam no escopo de atuação do time selecionado para a pesquisa.

Os padrões foram agrupados segundo suas características para ter o menor número que tivesse algum de cada princípio SOLID e cada uma das categorias dos padrões, sendo elas 

[C] Criação

[S] Estrutural

[B] Comportamento

| **Princípio SOLID** | **Design Patterns Relacionados** |
|---------------------|----------------------------------|
| **SRP** - Single Responsibility Principle | Builder[C], Command[B] |
| **OCP** - Open/Closed Principle | Strategy[B], Command[B], Observer[B], Builder[C], Adapter[S]|
| **LSP** - Liskov Substitution Principle | Strategy[B] |
| **ISP** - Interface Segregation Principle | Observer[B] |
| **DIP** - Dependency Inversion Principle | Strategy[B], Command[[B]], Observer[B] |


Sendo assim, a lista dos padrões abordados sendo

1. Strategy
2. Observer
3. Builder
4. Adapter
5. Command
