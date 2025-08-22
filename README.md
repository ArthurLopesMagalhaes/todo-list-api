# Todo List API

API simples para gerenciamento de tarefas (todos) usando Node.js, Express, TypeScript, Mongoose e validação com Zod.

## Funcionalidades

- Criar, listar, atualizar e remover tarefas
- Validação de dados com Zod
- Conexão com MongoDB
- CORS habilitado

## Requisitos

- Node.js >= 18
- MongoDB rodando localmente (`mongodb://localhost:27017`)

> Certifique-se de ter o mongo rodando, o porjeto foi criado usando o docker. Você podde rodar o container com:

```bash
docker run --name mongo -p 27017:27017 -d mongo
```

## Instalação

```bash
pnpm install
```

## Rodando o projeto

1. Certifique-se que o MongoDB está rodando localmente.
2. Execute o servidor de desenvolvimento:

```bash
pnpm run dev
```

O servidor estará disponível em: [http://localhost:3333](http://localhost:3333)

## Endpoints

### Criar tarefa

`POST /todos`

```json
{
  "title": "Título da tarefa",
  "description": "Descrição opcional"
}
```

### Listar tarefas

`GET /todos`

### Atualizar tarefa

`PUT /todos/:id`

```json
{
  "title": "Novo título",
  "description": "Nova descrição"
}
```

### Remover tarefa

`DELETE /todos/:id`

## Estrutura do Projeto

```
src/
  index.ts         # Entrada principal do servidor
  router.ts        # Rotas da API
  models/
    Todo.ts        # Modelo Mongoose da tarefa
  useCases/
    todo/
      createTodo.ts
      listTodo.ts
      removeTodo.ts
      updateTodo.ts
      todo.schema.ts
```

## Observações

- As validações dos dados são feitas com Zod.
- CORS está habilitado para facilitar o consumo da API por frontends.
