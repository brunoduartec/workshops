

Escrever software de qualidade envolve diversos fatores como performance, legibilidade, testabilidade entre outros que podem facilitar o dia a dia e agilizar o desenvolvimento. Na ânsia de entregar funcionalidades com mais agilidade o desenvolvedor acaba por criar débitos técnicos futuros fazendo com que a manutenção e extensão do mesmo se torne mais difícil.

A forma como as classes e módulos interagem podem também facilitar a evolução do software enquanto permite a manutenção de forma eficiente e não dependendo que muitas mudanças sejam feitas para adicionar alguma nova funcionalidade. 
 
Segundo Martin (2017), a arquitetura de software deve ser organizada em camadas concêntricas, onde os detalhes de implementação (baixo nível) são mantidos nas camadas externas, enquanto as regras de negócio mais abstratas e estáveis (alto nível) residem no núcleo da aplicação.

## Níveis de Design

Um código pode ser dividido em alguns níveis pensando no impacto no software como um todo, podendo ser 

### Nível Baixo (Detalhes de implementação)

Foca em aspectos de desenvolvimento como estruturas de dados, algoritmos específicos, manipulações de arquivos, protocolos de rede entre outros.

### Nível Médio (Design de Componentes e Módulos)

Envolve a organização do código em classes, módulos ou componentes. Os princípios SOLID se aplicam nesse nível, orientando a criação de sistemas modulares, coesos e de fácil manutenção

### Nível Alto (Arquitetura do Sistema)

Refere-se à estrutura geral do sistema, incluindo a separação em camadas, a definição de limites entre subsistemas e a escolha de padrões de arquitetura (Arquitetura Limpa, Hexagonal, Onion, etc)

Decisões nesse nível determinam como os componentes interagem e como o sistema se adapta a mudanças.

## Princípios SOLID e seus Padrões Associados

Abaixo uma análise dos princípios trazendo quais os ganhos de se usar, 

### SRP - Princípio de Responsabilidade Única (Single Responsibility Principle)

A estrutura de um código deve ser guiada pela estrutura social da organização que o utiliza, de modo que o módulo tenha apenas uma razão para mudar. Além da questão de escopo de software o módulo deve ser pensado como tendo apenas um motivo para modificar, o que pode fazer com que ele seja maior ou menor.

Este princípio é muito comumente mal interpretado como cada módulo ou classe ter apenas uma responsabilidade, o que é uma boa prática por que facilita manutenções futuras mas o SRP diz mais sobre os motivos pelos quais algum módulo poderia ser modificado.

Uma interpretação errônea comum desse princípio

### Ganhos
- Menor acoplamento: Redução de dependências entre módulos ou classes.
- Facilidade de manutenção: Mudanças futuras são mais previsíveis e seguras.
- Testabilidade aprimorada: Classes com responsabilidade única são mais fáceis de serem testadas unitariamente.
- Melhor organização do código: Facilita a leitura e entendimento, melhorando a qualidade geral do código.

### Sintomas
- Preocupação de mais de uma pessoa estar mexendo no mesmo código
- Código com métodos excessivamente grandes ou complexos.
- Dificuldade em encontrar o local exato onde mudanças devem ser feitas.
- Necessidade frequente de alterar a mesma classe por razões completamente diferentes.
- Alta frequência de conflitos durante a integração de código.

### Padrões Associado
- Strategy: Facilita a separação clara de diferentes estratégias ou algoritmos, garantindo que cada um tenha uma única razão para mudança.
- Command: Cada comando encapsula uma única ação ou responsabilidade específica, reduzindo o risco de classes com múltiplas razões para mudar.
- Decorator: Permite adicionar responsabilidades adicionais às classes dinamicamente, mantendo cada classe ou decorador com responsabilidades bem definidas e separadas.
- Adapter: Garante que a classe adaptadora tenha responsabilidade única, focada exclusivamente na conversão entre interfaces incompatíveis.


### OCP - Princípio de Aberto Fechado ([Open-Closed Principle](./2.ocp/ocp.md))

Um código deve ser projetado para que seja possível mudar o comportamento adicionando código mas não modificando um código já existente.

Uma interpretação errônea comum desse princípio é acreditar que o código nunca poderá ser modificado após sua criação. Na realidade, o OCP propõe que mudanças comuns, previsíveis e frequentes devem ocorrer através da extensão e não da modificação direta do código-fonte existente.


### Ganhos
- Redução do risco: alterações futuras não interferem diretamente em código já testado e consolidado.
- Facilidade de extensão: novas funcionalidades podem ser adicionadas com mais segurança e menor esforço.
- Menor custo de manutenção: reduzir modificações no código existente minimiza a introdução de bugs.
- Maior robustez: o código torna-se mais estável à medida que mudanças são isoladas em novos módulos ou subclasses.

### Sintomas
- Modificações constantes em classes existentes sempre que um novo requisito surge.
- Uso excessivo de condicionais (if-else ou switch-case) no código para tratar diferentes cenários.
- Frequentes regressões após alterações pontuais em módulos críticos.
- Dificuldade crescente em introduzir novas funcionalidades sem impactar funcionalidades existentes.

### Padrões Associados
- Strategy: permite modificar comportamentos específicos através da criação de novas estratégias, sem alterar código original.
- Template Method: possibilita a extensão do comportamento através de subclasses, evitando modificações diretas na classe base.
- Decorator: adiciona novos comportamentos dinamicamente em tempo de execução, mantendo o código base fechado para modificação.
- Observer: permite introduzir novos observadores sem necessidade de alterar o objeto observado.
- Factory Method: facilita a criação de novas variações de objetos sem modificar código cliente existente.

### LSP - Princípio de Substituição de Liskov ([Liskov Substitution Principle](3.lsp/lsp.md))

Esse princípio diz sobre heranças dizendo que as classes filhas devem aderir a contratos das classes mães fazendo com que elas sejam completamente intercambiáveis. Em resumo não pode haver um método de uma classe filha que não seja aplicável.

Uma interpretação errônea comum desse princípio é pensar que se trata apenas da compatibilidade de assinaturas de métodos entre classes mãe e filha. Na realidade, o LSP exige que as subclasses preservem a semântica e o comportamento esperado das classes base, não apenas suas interfaces técnicas.

### Ganhos
- Maior previsibilidade: comportamentos inesperados são reduzidos quando subclasses são usadas no lugar das classes base.
- Menor complexidade: o sistema fica mais simples de entender, já que subclasses respeitam integralmente as expectativas definidas pelas superclasses.
- Facilidade na manutenção: modificações em subclasses podem ser realizadas com segurança, pois não quebram contratos estabelecidos.
- Código mais robusto: garante o respeito aos contratos das classes mãe, aumentando a confiabilidade do sistema.

### Sintomas
- Uso de verificações constantes de tipo (instanceof) ou condicionais para tratar comportamentos específicos de subclasses.
- Subclasses que lançam exceções inesperadas ou ignoram completamente o comportamento definido nas classes base.
- Métodos implementados nas classes filhas que não realizam nada (métodos vazios ou com implementação fictícia apenas para respeitar a assinatura).
- Comportamentos contraditórios ou inesperados ao substituir uma instância de classe base por uma classe filha.

### Padrões Associados

- Template Method: garante que subclasses sigam exatamente a estrutura de comportamento definida pela classe mãe.
- Strategy: permite garantir intercambialidade entre objetos, desde que cada estratégia siga rigorosamente o contrato estabelecido.
- Factory Method: pode ajudar na criação de objetos que preservam integralmente contratos definidos pelas classes base, evitando violações do LSP.
- Decorator: reforça a aderência ao comportamento definido pela interface ou classe base original ao estender funcionalidades sem modificar contratos existentes.

### ISP - Princípio de Segregação de Interfaces ([Interface Segregation Principle](4.isp/isp.md))

Uma classe não deve ser obrigada a implementar um método da interface, que não usa.

Uma interpretação errônea comum desse princípio é acreditar que se deve evitar interfaces grandes a qualquer custo. Na verdade, o ISP enfatiza a importância da especialização das interfaces conforme necessidades específicas, não necessariamente a criação de interfaces pequenas indiscriminadamente.

### Ganhos

- Redução do acoplamento: Classes dependem apenas dos métodos realmente necessários.
- Maior clareza no código: Facilita a compreensão das responsabilidades específicas das classes e interfaces.
- Facilidade na implementação e testes: Interfaces pequenas e específicas são mais fáceis de implementar e testar isoladamente.
- Maior flexibilidade e reuso: Interfaces segregadas permitem maior flexibilidade na reutilização e composição de funcionalidades.

### Sintomas

- Interfaces com métodos vazios implementados apenas por obrigação contratual.
- Classes implementando muitos métodos irrelevantes à sua responsabilidade primária.
- Dificuldade em entender o papel específico de uma interface devido à variedade excessiva de métodos.
- Alta ocorrência de alterações em classes devido a mudanças em métodos que não utilizam.

### Padrões Associados

- Adapter: Ajuda a criar adaptadores específicos que implementam apenas os métodos necessários de interfaces grandes.
- Decorator: Permite adicionar funcionalidades específicas e granulares sem exigir implementações adicionais desnecessárias.
- Strategy: Interfaces específicas para diferentes estratégias ajudam a evitar métodos irrelevantes para certas implementações.
- Proxy: Oferece implementações específicas e direcionadas para controlar acesso e reduzir a implementação de métodos desnecessários.

### DIP - Princípio de Inversão de Dependência ([Dependency Inversion Principle](5.dip/dip.md))

Para ficar mais fácil a extensão, o sistema deve depender de interfaces e não de implementações o que corrobora com o princípio OCP pois haverá menos necessidade de modificar um código caso seja necessário trocar como realiza uma classe. Em resumo, nenhum cliente deve ser forçado a depender de métodos que não utiliza.

Uma interpretação errônea comum desse princípio é acreditar que se trata apenas do uso generalizado de interfaces. Na verdade, o DIP envolve estruturar o sistema de forma que dependências concretas sejam evitadas, focando a dependência em abstrações claras que facilitam mudanças futuras.

### Ganhos
- Aumento da modularidade: Sistemas tornam-se mais fáceis de evoluir e compor.
- Redução do acoplamento: Dependências claras facilitam a troca e evolução de componentes.
- Melhor testabilidade: Facilita testes unitários e uso de mock objects, já que dependências são abstrações.
- Facilidade de manutenção: Mudanças de implementação são menos invasivas no restante do sistema.

### Sintomas
- Mudanças em módulos ou classes de baixo nível frequentemente causam impactos em módulos de alto nível.
- Alta dependência direta entre classes concretas, dificultando alterações futuras.
- Dificuldade para criar testes unitários devido ao alto grau de acoplamento.
- Necessidade constante de recompilar grandes partes do sistema após mudanças pontuais em implementações concretas.

### Padrões Associados
- Factory Method: Permite que clientes dependam apenas de interfaces ao invés de implementações concretas, delegando a criação de objetos para métodos fábrica.
- Abstract Factory: Fornece uma forma de encapsular a criação de famílias de objetos relacionados, promovendo dependência em abstrações.
- Strategy: Facilita a substituição de implementações específicas por meio de interfaces definidas.
- Template Method: Estrutura classes com dependências abstratas, definindo uma base para especializações posteriores.