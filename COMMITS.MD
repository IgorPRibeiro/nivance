# Padrão de Commits (Conventional Commits)

Este documento descreve os tipos de commit utilizados no projeto, seguindo o padrão [Conventional Commits](https://www.conventionalcommits.org/).

**Formato:** `tipo(escopo opcional): descrição`

---

## Tipos

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| `feat` | Nova funcionalidade ou implementação | `feat(auth): adiciona login com Google` |
| `fix` | Correção de bug | `fix(cart): corrige cálculo do subtotal` |
| `refactor` | Mudança no código sem alterar funcionalidade | `refactor(api): simplifica validação de dados` |
| `perf` | Melhoria de desempenho | `perf(list): implementa virtualização` |
| `style` | Formatação (espaços, ponto e vírgula, etc.) | `style: aplica Prettier` |
| `test` | Adição ou correção de testes | `test(utils): adiciona testes para formatCurrency` |
| `docs` | Apenas documentação | `docs: atualiza README de instalação` |
| `build` | Sistema de build ou dependências (npm, yarn, etc.) | `build: atualiza React para v19` |
| `ci` | Configuração de CI/CD (GitHub Actions, etc.) | `ci: adiciona workflow de deploy` |
| `chore` | Tarefas de manutenção, configs, ferramentas | `chore: configura ESLint 9` |
| `env` | Variáveis e configs de ambiente (containers, CI) | `env: adiciona variável DATABASE_URL` |

---

## Detalhamento

### `feat`
Adições de novas funcionalidades ou implementações ao código.

### `fix`
Correção de bugs ou comportamentos incorretos.

### `refactor`
Reestruturação do código sem mudar o resultado ou a funcionalidade. Útil para legibilidade, organização ou remoção de código duplicado.

### `perf`
Otimizações que melhoram o desempenho (tempo de execução, consumo de memória, etc.).

### `style`
Alterações visuais no código que não mudam o comportamento (espaçamento, aspas, ponto e vírgula, indentação).

### `test`
Testes automatizados: adicionar, ajustar ou corrigir testes.

### `docs`
Alterações apenas em arquivos de documentação (README, CHANGELOG, comentários de API, etc.).

### `build`
Impacto no sistema de build ou em dependências externas (gulp, webpack, npm, yarn).

### `ci`
Mudanças em pipelines e scripts de CI/CD (GitHub Actions, Travis, CircleCI, etc.).

### `chore`
Tarefas que não alteram código de produção: atualização de ferramentas, configurações, bibliotecas de desenvolvimento.

### `env`
Modificações em arquivos e parâmetros de configuração de ambiente (Docker, variáveis de CI, configs de deploy).
