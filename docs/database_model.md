# Modelagem Inicial do Banco de Dados (MongoDB)

Este documento descreve a estrutura inicial das coleções e documentos no banco de dados MongoDB para o projeto Raffinata Sposa.

## Coleções Principais:

### `products`

Representa os produtos (vestidos de noiva, etc.) disponíveis no catálogo.

| Campo              | Tipo (MongoDB)     | Descrição                                        | Notas                                       |
| :----------------- | :----------------- | :----------------------------------------------- | :------------------------------------------ |
| `_id`              | ObjectId           | Identificador único do documento                 | Gerado automaticamente                      |
| `name`             | String             | Nome/Título do produto                           | Ex: "Vestido Princesa Encantada"            |
| `description`      | String             | Descrição detalhada                              |                                             |
| `price`            | Number             | Preço do produto                                 | Melhor para ordenação/filtragem por valor   |
| `sizes`            | Array of Strings   | Lista de tamanhos disponíveis para prova/venda   | Ex: `["P", "M", "G"]` ou `[36, 38, 40]`     |
| `colors`           | Array of Strings   | Lista de cores disponíveis                       | Ex: `["Branco", "Marfim"]`                  |
| `colections`       | String             | Nome da coleção à qual pertence                  |                                             |
| `photos`           | Array of Strings   | Lista de URLs das imagens do produto             | Embedding: Aninhado no documento de vestido |
| `available`        | Boolean            | Indica se o item está ativo no catálogo          |                                             |
| `createdAt`        | Date               | Data de criação do registro                      | Timestamp                                   |
| `updatedAt`        | Date               | Data da última atualização                       | Timestamp                                   |

### `clients`

Armazena informações básicas das clientes que realizam agendamentos.

| Campo        | Tipo (MongoDB) | Descrição                          | Notas                     |
| :----------- | :------------- | :--------------------------------- | :------------------------ |
| `_id`        | ObjectId       | Identificador único do documento   | Gerado automaticamente    |
| `name`       | String         | Nome completo da cliente           |                           |
| `email`      | String         | Email da cliente, para contato     | Campo obrigatório sugerido |
| `phoneNumber`| String         | Número de telefone de contato      | Opcional                  |
| `createdAt`  | Date           | Data de criação do registro        | Timestamp                 |

### `appointments`

Registra cada agendamento realizado pelas clientes.

| Campo            | Tipo (MongoDB) | Descrição                                              | Notas                                      |
| :--------------- | :------------- | :----------------------------------------------------- | :----------------------------------------- |
| `_id`            | ObjectId       | Identificador único do documento                       | Gerado automaticamente                     |
| `client_id`      | ObjectId       | Referência ao `_id` do documento na coleção `clientes` | Referencing: Relacionamento com `clientes` |
| `schedulingDate` | Date           | Data e hora exatas do agendamento                      | Use tipo Date para facilitar consultas     |
| `service`        | String         | Tipo de agendamento                                    | Ex: "Primeira Visita", "Prova"             |
| `notes`          | String         | Notas adicionais sobre o agendamento                   | Opcional                                   |
| `status`         | String         | Status atual do agendamento                            | Ex: "Pendente", "Confirmado"               |
| `createdAt`      | Date           | Data de criação do registro                            | Timestamp                                  |
| `updatedAt`      | Date           | Data da última atualização                             | Timestamp                                  |

## Relacionamentos

Aqui detalhamos os relacionamentos entre as principais coleções, indicando o tipo de conexão (Referencing/Embedding), os campos envolvidos e a cardinalidade (ex: Um para Muitos - 1:N).

- **appointments** -> **clients**:
    - **Tipo:** Referencing (Referência).
    - **Descrição:** Cada documento na coleção `appointments` contém um campo `client_id` que armazena o `_id` de um único documento na coleção `clients`.
    - **Cardinalidade:** Muitos para Um (N:1) do ponto de vista do agendamento para o cliente. Um agendamento pertence a um cliente.
    - **Cardinalidade Inversa:** Um para Muitos (1:N) do ponto de vista do cliente para os agendamentos. Um cliente pode ter múltiplos agendamentos que referenciam seu `_id`.

- **products** <-> **photos**:
    - **Tipo:** Embedding (Aninhamento).
    - **Descrição:** Cada documento na coleção `products` contém um campo `photos` que é um Array de Strings (URLs das imagens). As informações das fotos são armazenadas diretamente dentro do documento do produto.
    - **Cardinalidade:** Um para Muitos (1:N) - um produto tem muitas fotos. Esta cardinalidade é tratada por embedding, pois as fotos não existem independentemente do produto.

## Próximos Passos:

- Refinar este modelo conforme novas necessidades surgirem.

- Implementar os modelos no código backend usando Mongoose.

- Instalar e configurar o MongoDB.

- Criar scripts iniciais para conectar ao MongoDB e criar coleções/índices se necessário.
