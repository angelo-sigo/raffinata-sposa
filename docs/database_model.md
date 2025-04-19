# Modelagem Inicial do Banco de Dados (MongoDB)

Este documento descreve a estrutura inicial das coleções e documentos no banco de dados MongoDB para o projeto Raffinata Sposa.

## Coleções Principais:

### `product`

Representa os produtos (vestidos de noiva, etc.) disponíveis no catálogo.

```mermaid
erDiagram

  PRODUCT {
      ObjectId _id PK "Identificador unico do documento"
      string name "Nome/título do produto"
      string description "Descrição detalhada"
      number price "Preço do produto"
      string[] colors "Lista de cores disponíveis"
      string collection "Nome da coleção à qual pertence"
      string[] photos "Lista de URLs das imagens do produto"
      boolean available "Indica se o item está ativo no catálogo"
      Date createdAt "Data de criação do registro"
      Date updatedAt "Data da última atualização"
    }
```

### `clients`

Armazena informações básicas dos clientes que realizam agendamentos.

```mermaid
erDiagram

  CLIENT {
    ObjectId _id PK "Identificador único do documento"
    string name "Nome completo do cliente"
    string email "E-mail do cliente, para contato"
    string phone "Número de telefone do cliente, para contato"
    Date createdAt "Data de criação do registro"
  }
```

### `appointments`

Registra cada agendamento realizado pelos clientes.

```mermaid
erDiagram

  APPOINTMENT {
    ObjectId _id PK "Identificador único do documento"
    ObjectId client_id FK "Referência ao '_id' do documento na coleção CLIENT"
    Date dateTime "Data e hora exatas do agendamento"
    string serviceType "Tipo de agendamento (primeira visita, prova, ...)"
    string notes "Notas adicionais sobre o agendamento"
    string status "Status atual do agendamento"
    Date createdAt "Data de criação do registro"
    Date updatedAt "Data da última atualização"
  }
```

## Relacionamentos

Aqui detalhamos os relacionamentos entre as principais coleções.

```mermaid
erDiagram

  CLIENT ||--o{ APPOINTMENT : "has"
  
  APPOINTMENT {
    string[] colors
    string[] photos
  }
```

## Próximos Passos:

- Refinar este modelo conforme novas necessidades surgirem.

- Implementar os modelos no código backend usando Mongoose.

- Instalar e configurar o MongoDB.

- Criar scripts iniciais para conectar ao MongoDB e criar coleções/índices se necessário.