# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 🍕 NextBite Food - Food Delivery App

<div align="center">
  <img src="./src/assets/logotipo.webp" alt="NextBite Logo" width="200">
  
  <p><strong>O futuro da sua próxima refeição. O 1º app do Brasil que te ajuda a escolher o que comer.</strong></p>

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

  <img src="https://via.placeholder.com/800x400/f3f4f6/374151?text=NextBite+Food+App+Screenshot" alt="NextBite App Screenshot" width="100%">
</div>

## 📋 Sobre o Projeto

NextBite Food é uma aplicação web moderna de delivery de comida, desenvolvida com React, TypeScript e Vite. O projeto oferece uma experiência completa para usuários descobrirem, explorarem e pedirem comida de diferentes restaurantes, com uma interface intuitiva e responsiva.

### ✨ Principais Funcionalidades

-   🏠 **Landing Page atrativa** com hero section e apresentação dos serviços
-   🔐 **Sistema de autenticação** completo (login/cadastro)
-   👤 **Perfil de usuário** personalizado
-   🍽️ **Catálogo de restaurantes** com filtros por culinária
-   ⭐ **Sistema de avaliações** e reviews
-   🛒 **Carrinho de compras** funcional
-   📦 **Histórico de pedidos**
-   ❤️ **Lista de favoritos**
-   🔍 **Busca e filtros** avançados
-   📱 **Design responsivo** para todos os dispositivos

## 🛠️ Tecnologias Utilizadas

### Core

-   **[React 19](https://reactjs.org/)** - Biblioteca para construção de interfaces
-   **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
-   **[Vite](https://vitejs.dev/)** - Build tool e dev server ultra-rápido

### Styling & UI

-   **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
-   **[Radix UI](https://www.radix-ui.com/)** - Componentes primitivos acessíveis
-   **[Lucide React](https://lucide.dev/)** - Ícones modernos e limpos
-   **[Framer Motion](https://www.framer.com/motion/)** - Animações fluidas
-   **[Class Variance Authority](https://cva.style/)** - Variantes de componentes

### Navegação & Estado

-   **[React Router DOM 7](https://reactrouter.com/)** - Roteamento SPA
-   **[Zustand](https://zustand-demo.pmnd.rs/)** - Gerenciamento de estado leve
-   **[React Hook Form](https://react-hook-form.com/)** - Formulários performáticos

### Validação & Notificações

-   **[Zod](https://zod.dev/)** - Validação de schemas TypeScript-first
-   **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications elegantes

### Desenvolvimento

-   **[ESLint](https://eslint.org/)** - Linter para qualidade de código
-   **[Simple Import Sort](https://github.com/lydell/eslint-plugin-simple-import-sort)** - Organização de imports

## 🚀 Como Executar

### Pré-requisitos

-   **Node.js** (versão 18 ou superior)
-   **npm** ou **yarn**

### Instalação

1. **Clone o repositório**

    ```bash
    git clone https://github.com/mrcomputer2018/react-vite-nextbite-food.git
    cd react-vite-nextbite-food
    ```

2. **Instale as dependências**

    ```bash
    npm install
    # ou
    yarn install
    ```

3. **Execute o projeto em modo desenvolvimento**

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

4. **Acesse a aplicação**
    ```
    http://localhost:5173
    ```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento

# Build & Deploy
npm run build        # Gera build de produção
npm run preview      # Prévia do build de produção

# Qualidade de Código
npm run lint         # Executa o ESLint
```

## 📁 Estrutura do Projeto

```
src/
├── 📁 actions/              # Actions e funções de negócio
├── 📁 assets/               # Imagens e recursos estáticos
├── 📁 components/           # Componentes React reutilizáveis
│   ├── 📁 commons/          # Componentes comuns (botões, forms, etc.)
│   ├── 📁 landing_page/     # Componentes da página inicial
│   ├── 📁 notifications/    # Sistema de notificações
│   ├── 📁 test/            # Componentes de teste
│   └── 📁 ui/              # Componentes base do design system
├── 📁 constants/            # Constantes da aplicação
├── 📁 contexts/             # Contexts do React (Auth, etc.)
├── 📁 lib/                  # Utilitários e configurações
├── 📁 pages/                # Páginas da aplicação
├── 📁 routes/               # Configuração de rotas
├── 📁 services/             # Serviços (API, storage, etc.)
├── 📁 types/                # Tipos TypeScript
├── 📁 util/                 # Funções utilitárias
├── 📁 validations/          # Schemas de validação
├── App.tsx                  # Componente principal
└── main.tsx                 # Entry point da aplicação
```

## 🎨 Design System

O projeto utiliza um design system consistente baseado em:

-   **Cores**: Paleta verde como cor primária (#16a34a)
-   **Tipografia**: Sistema de tipografia responsivo
-   **Componentes**: Biblioteca de componentes reutilizáveis
-   **Variantes**: Sistema de variantes para estados (selected/unselected)
-   **Responsividade**: Mobile-first approach

### Componentes Principais

-   **ButtonCustom**: Botão customizável com variantes
-   **ButtonFilter**: Botão para filtros com estados
-   **CardImage**: Componente de imagem com diferentes tamanhos
-   **Sidebar**: Navegação lateral responsiva
-   **Header**: Cabeçalho com navegação e autenticação

## 🔐 Sistema de Autenticação

O projeto implementa um sistema de autenticação completo:

-   **Context API** para gerenciamento global do estado
-   **Local Storage** para persistência de sessão
-   **Rotas protegidas** com PrivateRoute
-   **Rotas públicas** com PublicRoute
-   **Redirecionamento automático** baseado no status de autenticação

### Fluxo de Autenticação

1. Usuário acessa a aplicação
2. Se não autenticado, é redirecionado para login
3. Após login, acesso liberado para rotas protegidas
4. Sessão persistida no localStorage
5. Logout limpa a sessão e redireciona

## 🛣️ Roteamento

### Rotas Públicas

-   `/` - Home (Landing Page)
-   `/signin` - Login
-   `/signup` - Cadastro

### Rotas Protegidas

-   `/profile` - Perfil do usuário
-   `/mycart` - Carrinho de compras
-   `/myorders` - Histórico de pedidos
-   `/restaurants` - Lista de restaurantes
-   `/favorites` - Restaurantes favoritos

## 🤝 Contribuindo

1. **Fork** o projeto
2. **Clone** seu fork
3. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
4. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
5. **Push** para a branch (`git push origin feature/AmazingFeature`)
6. **Abra** um Pull Request

### Padrões de Código

-   Use **TypeScript** para tipagem
-   Siga os padrões do **ESLint**
-   Componentes em **PascalCase**
-   Arquivos em **kebab-case**
-   Imports organizados automaticamente

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Marcelo** - [@mrcomputer2018](https://github.com/mrcomputer2018)

---

<div align="center">
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
  <p>🍕 Feito com ❤️ para revolucionar a experiência de food delivery</p>
</div>

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
    plugins: {
        // Add the react-x and react-dom plugins
        "react-x": reactX,
        "react-dom": reactDom,
    },
    rules: {
        // other rules...
        // Enable its recommended typescript rules
        ...reactX.configs["recommended-typescript"].rules,
        ...reactDom.configs.recommended.rules,
    },
});
```

