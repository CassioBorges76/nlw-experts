const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para desenvolvimento mobile",
        "Um sistema operacional para servidores",
        "Uma linguagem de programação para desenvolvimento web",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
      respostas: [
        "Imprimir mensagens no console do navegador",
        "Iniciar um loop infinito",
        "Criar uma variável",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Uma função que retorna um valor",
        "Um elemento de uma matriz",
        "Um local de armazenamento para dados",
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "const myVar = 'Hello';",
        "both of the above",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado primitivo",
        "Um bloco de código reutilizável",
        "Um operador lógico",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' ao declarar variáveis?",
      respostas: [
        "'let' é usado para variáveis que não podem ser alteradas, enquanto 'const' é para variáveis mutáveis",
        "'const' é usado para variáveis que não podem ser alteradas, enquanto 'let' é para variáveis mutáveis",
        "Ambos são usados de forma intercambiável",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma biblioteca de terceiros para manipulação de datas",
        "Um modelo de objeto que representa a estrutura do documento HTML",
        "Um método para declaração de variáveis",
      ],
      correta: 1
    },
    {
      pergunta: "Como você adiciona um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->",
      ],
      correta: 0
    },
    {
      pergunta: "O que é 'callback' em JavaScript?",
      respostas: [
        "Um tipo de dado primitivo",
        "Uma função que é passada como argumento para outra função",
        "Um método para manipulação de strings",
      ],
      correta: 1
    },
    {
      pergunta: "Como você converte uma string para um número em JavaScript?",
      respostas: [
        "parseInt('10')",
        "toString(10)",
        "both of the above",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const quizItem = template.content.cloneNode(true)
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição( serve pra entrar no array e fazer algima coisa)
  for(const item of perguntas) { 
    //clonando o template
    const quizItem = template.content.cloneNode(true) 
    //modificando o h3
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value= item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
       corretas.delete(item)
       if(estaCorreta) {
         corretas.add(item)
       }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      quizItem.querySelector('dl').appendChild(dt)
  
    }
    quizItem.querySelector('dl dt').remove()
  
    
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  