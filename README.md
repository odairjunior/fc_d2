# Nginx + Node.js + MySQL Docker Project

Este projeto demonstra a configuração de um ambiente com Nginx atuando como proxy reverso para uma aplicação Node.js, que interage com um banco de dados MySQL. Todo o ambiente é orquestrado utilizando Docker Compose.

## Estrutura do Projeto

- **nginx/**: Contém o arquivo de configuração do Nginx.
- **node-app/**: Contém a aplicação Node.js e seus arquivos de configuração.
- **db/**: Contém o script SQL para inicialização do banco de dados.

## Pré-requisitos

- Docker instalado em sua máquina.
- Docker Compose instalado.

## Configuração e Execução

1. Clone o repositório em sua máquina local:
   ```bash
   git clone <seu-repositorio-url>
   cd <nome-do-repositorio>
