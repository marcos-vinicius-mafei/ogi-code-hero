# Code Hero

## Tecnologias Utilizadas

- **React**
- **TypeScript**
- **CSS**
- **Vite**
- **API da Marvel**

## Funcionalidades

- Pesquisar por personagens da Marvel.
- Listar personagens de acordo com a pesquisa.
- Visualizar detalhes de personagens específicos.

## Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. Clone este repositório:

   ```bash
   git clone https://github.com/marcos-vinicius-mafei/ogi-code-hero.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd ogi-code-hero
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente:
   - Copie o arquivo `.env.example` para `.env` e adicione a sua chave pública da API da Marvel:
     ```bash
     cp .env.example .env
     ```
   - Abra o arquivo `.env` e insira sua chave pública:
     ```env
     VITE_MARVEL_API_KEY=sua_chave_publica_aqui
     ```

## Como Rodar o Projeto

Para iniciar o servidor de desenvolvimento, use o comando:

```bash
npm run dev
```

A aplicação estará disponível em [http://localhost:5173](http://localhost:5173).

## Como Fazer a Build para Produção

Para gerar uma build otimizada para produção, execute:

```bash
npm run build
```

Para servir a build localmente, você pode usar:

```bash
npm run serve
```

A aplicação estará acessível em [http://localhost:5000](http://localhost:5000).

---

**Code Hero** é um projeto desenvolvido como parte de um teste técnico para a empresa OGI Systems.
