# Projeto Web: Loja de Vestidos de Noiva

Este projeto consiste no desenvolvimento de um sistema web completo para uma loja de vestidos de noiva. O objetivo principal é criar uma presença online que apresente a empresa e seu catálogo de produtos de forma elegante e intuitiva, e além disso, ofereça funcionalidades práticas para os clientes — como o agendamento online de horários para atendimento presencial.

O sistema será divido em duas partes principais: a interface do usuário (frontend) e a API do servidor (backend), com integração a um banco de dados para gerenciar informações de produtos e agendamentos.

## 🎯 Propósito e Funcionalidades Principais

O sistema web visa modernizar a interação da loja com seus clientes, oferecendo as seguintes funcionalidades:

- **Apresentação da Empresa:** Uma seção dedicada a contar a história da marca, seus valores, diferenciais e informações de contato.

- **Catálogo de Produtos:** Uma galeria visual dos vestidos e outros produtos disponíveis, permitindo que os clientes explorem os modelos.

- **Agendamento Online:** Uma ferramenta intuitiva para que os clientes possam verificar a disponibilidade e agendar um horário para visita e atendimento na loja.

## 🗻 Marcos do Projeto

- [ ] **Conclusão do desenvolvimento da UI.**

- [x] **Conclusão da modelagem do banco de dados.**

- [ ] **Conclusão do desenvolvimento da API backend.**

- [ ] **Integração completa do sistema.**

- [ ] **Configuração dos ambientes de hospedagem.**

- [ ] **Implantação do sistema.**

## ⚙️ Tecnologias Envolvidas

Este projeto envolverá tecnologias de desenvolvimento web. As escolhas específicas de frameworks e bancos de dados serão detalhadas conforme o desenvolvimento avança, mas a estrutura geral incluirá:
 
### Frontend:

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

### Backend: 

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Mongoose](https://img.shields.io/badge/mongoose-%23880000.svg?style=for-the-badge&logo=mongoose&logoColor=white)

### Banco de Dados:

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

### Testes:

![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

### Versionamento:

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

### Gerenciamento de Dependências:

![NPM](https://img.shields.io/badge/npm-%23BB2026.svg?style=for-the-badge&logo=npm&logoColor=white)

## ▶️ Como Começar

Para configurar o ambiente de desenvolvimento local, siga os passos do tutorial de configuração inicial:

1. Clone este repositório:

```bash
git clone 'https://github.com/angelo-sigo/raffinata-sposa'
```

2. Certifique-se de ter o `Node.js` e `npm` instalados.

3. Instale as dependências do projeto:

```bash
npm run setup
```

4. (Instruções adicionais virão aqui sobre como rodar o frontend e o backend localmente, uma vez que o código inicial estiver pronto)

## 🗃️ Estrutura do Projeto

```bash
.
├── README.md
├── backend
│   └── src
│       ├── config
│       │   ├── mongoose.config.js
│       │   └── mongoose.test.js
│       ├── controllers
│       ├── middleware
│       ├── models
│       ├── routes
│       └── services
├── docs
│   └── database_model.md
├── frontend
└── package.json
```