# Ponto Certo - Calculadora de Horário

## Descrição

**Ponto Certo** é uma extensão do Chrome desenvolvida para ajudar a calcular o horário de trabalho, incluindo o tempo de almoço e pausas adicionais. A extensão permite que os usuários insiram a hora de entrada, tempo de almoço, horas de trabalho diárias e pausas adicionais para calcular a hora de saída do trabalho.

## Funcionalidades

- **Alternar Tema**: Modo claro e escuro.
- **Copiar Resultado**: Copie o resultado calculado para a área de transferência.
- **Calcular Horário de Saída**: Insira a hora de entrada, tempo de almoço, horas de trabalho e pausas para calcular a hora de saída.
- **Resetar Formulário**: Limpa todos os campos do formulário.
- **Contador de Tempo**: Inicie e pare um contador baseado no horário de saída calculado.

## Estrutura do Projeto

```
my-extension/
├── background.js
├── content.js
├── icon.png
├── manifest.json
├── popup.html
├── popup.js
├── styles.css
```

## Instalação

### Pré-requisitos

- Navegador Google Chrome

### Passos

1. Clone este repositório:

   ```bash
   git clone https://github.com/<seu-usuario>/ponto-certo-extension.git
   cd ponto-certo-extension/my-extension
   ```

2. Abra o Google Chrome e navegue até `chrome://extensions/`.

3. Ative o "Modo de desenvolvedor" no canto superior direito.

4. Clique em "Carregar sem compactação" e selecione a pasta `my-extension`.

5. A extensão aparecerá na lista e você poderá clicá-la para abrir o popup.

## Uso

1. Clique no ícone da extensão para abrir a interface do Ponto Certo.
2. Insira a hora de entrada no campo "Hora de Entrada".
3. Insira o tempo de almoço no campo "Tempo de Almoço".
4. Insira as horas de trabalho diárias no campo "Horas de Trabalho Diárias".
5. Insira o tempo de pausa adicional no campo "Pausa Adicional (minutos)" (opcional).
6. Clique em "Calcular" para ver o horário de saída calculado.
7. Use os botões de "Iniciar" e "Parar" para controlar o contador de tempo baseado no horário de saída.

## Desenvolvimento

### manifest.json

Define as configurações da extensão, incluindo permissões, ícones e scripts de fundo.

### popup.html

Contém a interface de usuário da extensão.

### popup.js

Inclui a lógica para interagir com a interface do usuário, manipular dados e armazenar informações no localStorage.

### styles.css

Contém o estilo da extensão para garantir uma interface de usuário agradável.

### background.js

Script de fundo que roda continuamente e lida com eventos de instalação da extensão.

### content.js

Script de conteúdo que pode interagir com as páginas da web que o usuário visita.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

- **Nome do Desenvolvedor**: [Seu Nome]
- **Email**: [Seu Email]

---

Espero que isso ajude a documentar seu projeto de extensão do Chrome!
