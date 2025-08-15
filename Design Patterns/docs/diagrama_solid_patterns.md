# Diagrama de decisão: SOLID → Padrões GoF

Guia visual para diagnosticar problemas de código e escolher padrões de projeto a partir de **sintomas**, **tipo de problema** (Criação/Estrutura/Comportamento), **princípios SOLID violados** e **padrões GoF** recomendados.

---

## 🗺️ Fluxo geral (Mermaid)

Diagrama alto nível do processo de decisão:



```mermaid
flowchart TD
  A[Sintomas no código] --> B{Classificar problema}
  B -->Criação
  B -->Estrutura
  B -->Comportamento
```


### Diagrama detalhado para Patterns de Criação
---

```mermaid
flowchart TD
  Criação --> C1{Sintomas de criação}
  C1 -->|Muitos 'new' espalhados| C2[DIP]
  C1 -->|Construção complexa| C3[SRP]
  C1 -->|Famílias de objetos| C4[OCP/DIP]
  C2 --> P1[Factory Method, Abstract Factory, Proxy]
  C3 --> P2[Builder]
  C4 --> P3[Abstract Factory]

```


### Diagrama detalhado para Patterns de Estrutura
---

```mermaid
flowchart TD
  Estrutura --> D1{Sintomas de estrutura}
  D1 -->|Acoplamento excessivo| D2[DIP/SRP]
  D1 -->|Interface incompatível| D3[OCP]
  D1 -->|Objetos + composições| D4[LSP/OCP]
  D1 -->|Adição de responsabilidades| D5[OCP]
  D2 --> P4[Bridge, Facade, Proxy]
  D3 --> P5[Adapter]
  D4 --> P6[Composite]
  D5 --> P7[Decorator]
```

### Diagrama detalhado para Patterns de Comportamento
---

```mermaid
flowchart TD
  Comportamento --> E1{Sintomas de comportamento}
  E1 -->|Muitos if/else| E2[OCP/DIP]
  E1 -->|Passos em sequência| E3[OCP]
  E1 -->|Reagir a eventos| E4[OCP/ISP]
  E1 -->|Mudar comportamento por estado| E5[OCP/LSP]
  E1 -->|Desfazer/Log/Filas| E6[SRP/OCP]
  E2 --> P8[Strategy, Template Method]
  E3 --> P9[Chain of Responsibility, Template Method]
  E4 --> P10[Observer, Mediator]
  E5 --> P11[State]
  E6 --> P12[Command, Memento]
```


> **Como usar**: Comece nos sintomas → classifique o tipo de problema → identifique o(s) princípio(s) violado(s) → veja a lista de padrões sugeridos e escolha conforme contexto/forças.

---

## 🔍 Checklist de sintomas

**Criação**  
- Muitos `new` espalhados / difícil de testar  
- Construção com muitos parâmetros/opções  
- Famílias de objetos que precisam variar em conjunto

**Estrutura**  
- Acoplamento alto entre módulos  
- APIs incompatíveis precisam conversar  
- Objetos/coleções tratadas de forma inconsistente  
- Preciso adicionar comportamento sem herdar/modificar classe base

**Comportamento**  
- Regra com muitos `if/else` para variações  
- Pipeline com etapas claramente encadeáveis  
- Eventos e reações entre muitos objetos  
- Comportamento muda conforme estado  
- Preciso desfazer, logar, enfileirar ações

---

## 🧩 Mapa SOLID → Padrões (resumo rápido)

### SRP (Responsabilidade Única)
- **Sinais**: classe "faz de tudo", testes difíceis, responsabilidades misturadas
- **Padrões**: Builder, Command, Facade, Memento, Iterator, Mediator (para centralizar coordenação)

### OCP (Aberto/Fechado)
- **Sinais**: precisa alterar código sempre que entra um caso novo; muitos `if/else`
- **Padrões**: Strategy, Decorator, Template Method, State, Visitor, Adapter, Proxy, Factory Method, Abstract Factory, Observer, Chain of Responsibility

### LSP (Substituição de Liskov)
- **Sinais**: subclasses quebram expectativas/contrato do tipo base
- **Padrões**: State (evita heranças frágeis), Strategy, Template Method, Composite

### ISP (Segregação de Interface)
- **Sinais**: interfaces gordas, métodos inúteis para alguns clientes
- **Padrões**: Observer (contratos mínimos), Mediator (reduz acoplamento entre muitos colegas)

### DIP (Inversão de Dependência)
- **Sinais**: dependência de concretos; difícil substituir/mockar componentes
- **Padrões**: Factory Method, Abstract Factory, Bridge, Proxy, Strategy, Command

---

## 🧭 Tabelas de referência (por categoria)

### Padrões de **Criação**
| Sintoma | SOLID | Padrões |
|---|---|---|
| Muitos `new` / difícil testar | **DIP** | Factory Method, Abstract Factory, Proxy |
| Construção complexa | **SRP** | Builder |
| Famílias de objetos co-variam | **OCP/DIP** | Abstract Factory |

### Padrões **Estruturais**
| Sintoma | SOLID | Padrões |
|---|---|---|
| Acoplamento excessivo | **DIP/SRP** | Bridge, Facade, Proxy |
| Interfaces incompatíveis | **OCP** | Adapter |
| Tratar objeto/coleção igualmente | **LSP/OCP** | Composite |
| Adicionar responsabilidade sem herdar | **OCP** | Decorator |

### Padrões de **Comportamento**
| Sintoma | SOLID | Padrões |
|---|---|---|
| Muitos `if/else` por variação | **OCP/DIP** | Strategy, Template Method |
| Algoritmo em etapas encadeáveis | **OCP** | Chain of Responsibility, Template Method |
| Eventos/reações entre objetos | **OCP/ISP** | Observer, Mediator |
| Comportamento muda por estado | **OCP/LSP** | State |
| Desfazer/filas/log | **SRP/OCP** | Command, Memento |

---

## ✅ Dicas de aplicação
- Comece pelo **menor refactor seguro** que restaure o princípio violado.
- Prefira **composição a herança** quando a intenção for variar comportamento (Strategy/Decorator/State).
- Combine padrões quando fizer sentido (ex.: **Factory Method** para criar **Strategies**).
- Após aplicar, confirme: o princípio SOLID foi **restaurado**? Os testes ficaram **mais fáceis**?

---

## 📎 Observação
Baseado no catálogo GoF e no seu mapeamento SOLID ↔️ Patterns. Ajuste conforme o domínio e restrições do seu projeto.
