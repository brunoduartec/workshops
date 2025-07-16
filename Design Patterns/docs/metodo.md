# Método de Diagnóstico para Aplicação de Design Patterns com base nos Princípios SOLID

Este método tem como objetivo ajudar desenvolvedores a identificar problemas recorrentes no código, classificá-los de forma orientada (Criação, Estrutura ou Comportamento), reconhecer princípios SOLID violados e, a partir disso, escolher padrões de projeto (Design Patterns) adequados para refatoração e melhoria do design.

---

## Etapas do Método

### 🔎 Etapa 1: Identifique o Sintoma no Código

Observe seu código e anote os pontos de frustração, dificuldades de manutenção, extensibilidade ou testes. Exemplos:

- Classe muito grande e com responsabilidades diversas
- Muitos `if/else` ou `switch` para tratar comportamentos
- Dificuldade em testar um componente
- Mudança em uma parte do código quebra outras
- Subclasses que “estragam” o comportamento da classe base

---

### 🧠 Etapa 2: Classifique o Tipo de Problema

Use a triagem abaixo para determinar se o problema é de **Criação**, **Estrutura** ou **Comportamento**:

#### 🏗️ Problemas de Criação
Você respondeu “sim” para alguma das perguntas abaixo?

- O problema está relacionado à forma como objetos são instanciados?
- Há uso excessivo de `new` dificultando testes ou substituição?
- A criação depende de contexto ou tem muita lógica?
- Você quer injetar ou trocar objetos dinamicamente?

→ Classifique como **Criação**

#### 🧱 Problemas de Estrutura
Você respondeu “sim” para alguma das perguntas abaixo?

- As classes estão muito acopladas entre si?
- A estrutura entre os objetos está difícil de entender ou manter?
- Você quer esconder detalhes da implementação?
- Deseja reutilizar estrutura de forma mais flexível?

→ Classifique como **Estrutura**

#### ⚙️ Problemas de Comportamento
Você respondeu “sim” para alguma das perguntas abaixo?

- O fluxo do código está muito complexo com `if/else`, `switch`, etc.?
- A lógica de execução está misturada em diversas classes?
- Precisa executar passos em sequência, desfazer ações ou reagir a eventos?
- Deseja adicionar novos comportamentos sem alterar os existentes?

→ Classifique como **Comportamento**

---

### 🧩 Etapa 3: Verifique Qual Princípio SOLID Está Sendo Violado

| Princípio | Sintomas Comuns |
|-----------|-----------------|
| **SRP** (Responsabilidade Única) | Classe com muitas responsabilidades; difícil testar ou manter |
| **OCP** (Aberto/Fechado) | Mudanças exigem alterar código existente; `if/else` constantes |
| **LSP** (Substituição de Liskov) | Subclasses quebram o comportamento da classe base |
| **ISP** (Segregação de Interface) | Interfaces com muitos métodos desnecessários |
| **DIP** (Inversão de Dependência) | Código fortemente acoplado a classes concretas |

---

### 🛠️ Etapa 4: Consulte a Tabela de Padrões GoF Sugeridos

Use a combinação entre o tipo de problema (Criação/Estrutura/Comportamento) e o princípio SOLID violado para encontrar padrões indicados.

Exemplo:

- Problema: Muitos `if/else` para variações → Tipo: Comportamento
- Princípio violado: OCP
- Padrões sugeridos: Strategy, Template Method, State

---

### 📋 Etapa 5: Aplique o Padrão de Projeto

Depois de identificar o padrão adequado:

1. Estude a estrutura do pattern.
2. Modele a solução com base no problema detectado.
3. Refatore o código.
4. Verifique se a violação do SOLID foi resolvida.

---

### ✅ Benefícios do Método

- Cria um processo lógico e sistemático de decisão.
- Ensina a olhar para o código com criticidade técnica.
- Reduz a tentativa e erro na aplicação de padrões.
- Promove aprendizado prático e consciente dos princípios SOLID.

---

### 💡 Sugestão de Fluxo Visual

```
Sintoma → Classificação (Criação/Estrutura/Comportamento) → Violação SOLID → Padrões GoF → Refatoração
```

Este método pode ser utilizado como parte de workshops, treinamentos, revisões de código ou como estrutura de análise em projetos de TCC e ensino.
