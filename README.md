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

- [ ] **Conclusão da modelagem do banco de dados.**

- [ ] **Conclusão do desenvolvimento da API backend.**

- [ ] **Integração completa do sistema.**

- [ ] **Configuração dos ambientes de hospedagem.**

- [ ] **Implantação do sistema.**

## ⚙️ Tecnologias Envolvidas

Este projeto envolverá tecnologias de desenvolvimento web. As escolhas específicas de frameworks e bancos de dados serão detalhadas conforme o desenvolvimento avança, mas a estrutura geral incluirá:

- **Frontend:** `JavaScript`, `React`, `Sass`.

- **Backend:** `Express`.

- **Banco de Dados:** `MongoDB`

- **Versionamento:** `Git`.

- **Gerenciamento de Dependências:** `npm`

## ▶️ Como Começar

Para configurar o ambiente de desenvolvimento local, siga os passos do tutorial de configuração inicial:

1. Clone este repositório:

```bash
git clone 'https://github.com/angelo-sigo/raffinata-sposa'
```

2. Navegue até a pasta do projeto:

```bash
cd raffinata_sposa
```

3. Certifique-se de ter o `Node.js` e `npm` instalados.

4. Instale as dependências do frontend:

```bash
cd frontend && npm install && cd ..
```

5. Instale as dependências do backend:

```bash
cd backend && npm install && cd ..
```

6. (Instruções adicionais virão aqui sobre como rodar o frontend e o backend localmente, uma vez que o código inicial estiver pronto)

## 🗃️ Estrutura do Projeto

```bash
raffinata_sposa/
├── backend/          # Código do servidor (API, lógica de negócio)
│   └── package.json  # Gerenciador de dependências do backend
├── docs/             # Documentação, scripts de banco de dados, etc.
├── frontend/         # Código da interface do usuário (HTML, CSS, JS, assets)
│   └── package.json  # Gerenciador de dependências do frontend
├── .gitignore        # Arquivos/pastas a serem ignorados pelo Git
└── README.md         # Descrição do projeto
```