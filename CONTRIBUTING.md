# 🤝 Guia de Contribuição - NextBite Food

Obrigado por considerar contribuir com o NextBite Food! Este documento contém diretrizes para ajudar você a contribuir de forma efetiva.

## 📋 Como Contribuir

### 1. 🍴 Fork e Clone

```bash
# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/SEU_USERNAME/react-vite-nextbite-food.git
cd react-vite-nextbite-food

# Adicione o repositório original como upstream
git remote add upstream https://github.com/mrcomputer2018/react-vite-nextbite-food.git
```

### 2. 🌿 Crie uma Branch

```bash
# Crie uma branch para sua feature/fix
git checkout -b feature/nome-da-sua-feature
# ou
git checkout -b fix/nome-do-bug
```

### 3. 📝 Faça suas Mudanças

-   Mantenha o código limpo e bem documentado
-   Siga os padrões de código existentes
-   Adicione testes se necessário
-   Atualize a documentação quando relevante

### 4. ✅ Teste suas Mudanças

```bash
# Execute o projeto localmente
npm run dev

# Execute o linter
npm run lint

# Faça build para verificar se não há erros
npm run build
```

### 5. 📤 Envie suas Mudanças

```bash
# Commit suas mudanças
git add .
git commit -m "feat: adiciona nova funcionalidade X"

# Push para sua branch
git push origin feature/nome-da-sua-feature
```

### 6. 🔄 Abra um Pull Request

-   Vá para o GitHub e abra um Pull Request
-   Descreva claramente o que foi alterado
-   Adicione screenshots se relevante
-   Referencie issues relacionadas

## 📐 Padrões de Código

### Convenções de Nomenclatura

-   **Componentes**: PascalCase (`ButtonCustom`, `UserProfile`)
-   **Arquivos**: kebab-case (`button-custom.tsx`, `user-profile.tsx`)
-   **Funções**: camelCase (`handleClick`, `getUserData`)
-   **Constantes**: UPPER_SNAKE_CASE (`API_BASE_URL`)

### Estrutura de Componentes

```tsx
import { ComponentProps } from "react";

interface ComponentNameProps {
  // Props interface
}

export default function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  // Component logic

  return (
    // JSX
  );
}
```

### Imports Organization

```tsx
// 1. React imports
import { useState, useEffect } from "react";

// 2. Third-party libraries
import { motion } from "framer-motion";

// 3. Internal imports (using @ alias)
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
```

## 🎯 Tipos de Contribuição

### 🐛 Bug Reports

-   Use o template de issue para bugs
-   Descreva o comportamento esperado vs atual
-   Inclua passos para reproduzir
-   Adicione screenshots/videos se relevante

### ✨ Feature Requests

-   Use o template de issue para features
-   Explique o problema que resolve
-   Descreva a solução proposta
-   Considere alternativas

### 📚 Documentação

-   Correções de typos
-   Melhorias na clareza
-   Adição de exemplos
-   Tradução de conteúdo

### 🎨 UI/UX

-   Melhorias de design
-   Correções de responsividade
-   Acessibilidade
-   Animações

## 🚫 Diretrizes

### ❌ Não Faça

-   Commits direto na branch `main`
-   Pull Requests grandes demais
-   Alterações sem testes
-   Código sem documentação
-   Ignorar padrões de código

### ✅ Faça

-   Mantenha PRs focados e pequenos
-   Escreva mensagens de commit claras
-   Teste suas mudanças
-   Siga os padrões estabelecidos
-   Seja respeitoso em discussões

## 📝 Padrões de Commit

Use conventional commits:

```
feat: adiciona novo componente de rating
fix: corrige bug no login
docs: atualiza README
style: ajusta espaçamento no header
refactor: reorganiza estrutura de pastas
test: adiciona testes para AuthContext
```

## 🔄 Processo de Review

1. **Automated Checks**: CI/CD verifica linting e build
2. **Code Review**: Maintainers revisam o código
3. **Testing**: Testa funcionalidades em diferentes cenários
4. **Approval**: Aprovação e merge

## 🤔 Dúvidas?

-   Abra uma issue com label "question"
-   Entre em contato via email: mrcomputer2018@github.com
-   Participe das discussões no GitHub

## 📜 Código de Conduta

-   Seja respeitoso e inclusivo
-   Aceite feedback construtivo
-   Foque no que é melhor para a comunidade
-   Mantenha discussões produtivas

---

Obrigado por contribuir! 🚀
