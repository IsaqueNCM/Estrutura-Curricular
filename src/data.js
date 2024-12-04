export const courseData = [
  {
    period: "1º Período",
    subjects: [
      { id: "COMP0393", name: "PROGRAMAÇÃO FUNCIONAL", hours: 60, nature: "Obrigatória", prerequisites: [] },
      { id: "COMP0480", name: "SEMINÁRIOS EM COMPUTAÇÃO", hours: 30, nature: "Obrigatória", prerequisites: [] },
      { id: "MAT0057", name: "FUNDAMENTOS ELEMENTARES DA MATEMÁTICA", hours: 60, nature: "Obrigatória", prerequisites: [] },
      { id: "MAT0150", name: "VETORES E GEOMETRIA ANALÍTICA", hours: 60, nature: "Obrigatória", prerequisites: [] },
      { id: "MAT0151", name: "CÁLCULO A", hours: 60, nature: "Obrigatória", prerequisites: [] },
    ],
    totalHours: 270,
  },
  {
    period: "2º Período",
    subjects: [
      { id: "COMP0334", name: "PROGRAMAÇÃO IMPERATIVA", hours: 60, nature: "Obrigatória", prerequisites: [] },
      { id: "COMP0410", name: "LÓGICA PARA COMPUTAÇÃO", hours: 60, nature: "Obrigatória", prerequisites: ["MAT0057"] },
      { id: "FISI0260", name: "FISICA 1", hours: 60, nature: "Obrigatória", prerequisites: ["MAT0151","MAT0150"] },
      { id: "FISI0264", name: "LABORATORIO DE FISICA 1", hours: 30, nature: "Obrigatória", prerequisites: ["MAT0151"] },
      { id: "MAT0078", name: "ÁLGEBRA LINEAR I", hours: 60, nature: "Obrigatória", prerequisites: ["MAT0150"] },
      { id: "MAT0152", name: "CÁLCULO B", hours: 60, nature: "Obrigatória", prerequisites: ["MAT0151"] },
    ],
    totalHours: 330,
  },
  {
    period: "3º Período",
    subjects: [
      { id: "COMP0395", name: "PROGRAMAÇÃO ORIENTADA A OBJETOS", hours: 60, nature: "Obrigatória", prerequisites: ["COMP0334"] },
      { id: "COMP0405", name: "ESTRUTURAS DE DADOS", hours: 60, nature: "Obrigatória", prerequisites: ["MAT0152","COMP0334","COMP0393"] },
      { id: "COMP0409", name: "LINGUAGENS FORMAIS E COMPUTABILIDADE", hours: 60, nature: "Obrigatória", prerequisites: ["COMP0410","COMP0393"] },
      { id: "COMP0416", name: "FUNDAMENTOS DE SISTEMAS DIGITAIS", hours: 60, nature: "Obrigatória", prerequisites: ["MAT0057","COMP0334"] },
      { id: "COMP0419", name: "PRÁTICA EM SISTEMAS DIGITAIS", hours: 30, nature: "Obrigatória", prerequisites: ["MAT0057","COMP0334"] },
      { id: "MAT0153", name: "CÁLCULO C", hours: 60, nature: "Obrigatória", prerequisites: ["MAT0152","MAT0150"] },
    ],
    totalHours: 330,
  },
  {
    period: "4º Período",
    subjects: [
      { id: "COMP0408", name: "GRAFOS E ALGORITMOS COMPUTACIONAIS", hours: 60, nature: "Obrigatória", prerequisites: ["COMP0410","COMP0405"] },
      { id: "COMP0412", name: "PROJETO E ANÁLISE DE ALGORITMOS", hours: 60, nature: "Obrigatória", prerequisites: ["MAT0057","COMP0405"] },
      { id: "COMP0415", name: "ARQUITETURA DE COMPUTADORES", hours: 60, nature: "Obrigatória", prerequisites: ["COMP0334"] },
      { id: "COMP0417", name: "FUNDAMENTOS DE SISTEMAS EMBARCADOS", hours: 30, nature: "Obrigatória", prerequisites: ["COMP0334"] },
      { id: "COMP0481", name: "MÉTODOS E TÉCNICAS DE PESQUISA PARA COMPUTAÇÃO", hours: 30, nature: "Obrigatória", prerequisites: ["COMP0480"] },
      { id: "ESTAT0011", name: "ESTATISTICA APLICADA", hours: 60, nature: "Obrigatória", prerequisites: [] },
    ],
    totalHours: 300,
  },
  {
    period: "5º Período",
    subjects: [
      { id: "COMP0397", name: "PROGRAMAÇÃO PARALELA E CONCORRENTE", hours: 60, nature: "Obrigatória", prerequisites: ["COMP0415","COMP0405"] },
      { id: "COMP0438", name: "ENGENHARIA DE SOFTWARE I", hours: 60, nature: "Obrigatória", prerequisites: ["COMP0395"] },
      { id: "COMP0455", name: "BANCO DE DADOS I", hours: 60, nature: "Obrigatória", prerequisites: ["COMP0405"] },
      { id: "COMP0461", name: "REDES DE COMPUTADORES", hours: 60, nature: "Obrigatória", prerequisites: ["COMP0415"] },
      { id: "COMP0472", name: "SISTEMAS OPERACIONAIS", hours: 60, nature: "Obrigatória", prerequisites: ["COMP0415","COMP0405"] },
      { id: "COMP0478", name: "INFORMÁTICA, ÉTICA E SOCIEDADE", hours: 60, nature: "Obrigatória", prerequisites: [] },
    ],
    totalHours: 360,
  },
  {
    period: "6º Período",
    subjects: [
      { id: "COMP0427", name: "INTELIGÊNCIA ARTIFICIAL", hours: 60, nature: "Obrigatória", prerequisites: ["ESTAT0011","COMP0408"] },
      { id: "COMP0432", name: "PROCESSAMENTO DE IMAGENS", hours: 60, nature: "Obrigatória", prerequisites: ["MAT0150","COMP0334"] },
      { id: "COMP0439", name: "ENGENHARIA DE SOFTWARE II", hours: 60, nature: "Obrigatória", prerequisites: ["COMP0438"] },
      { id: "COMP0443", name: "INTERFACE HUMANO-COMPUTADOR", hours: 60, nature: "Obrigatória", prerequisites: ["COMP0395"] },
      { id: "COMP0463", name: "LABORATÓRIO DE REDES DE COMPUTADORES", hours: 30, nature: "Obrigatória", prerequisites: ["COMP0461"] },
      { id: "COMP0470", name: "SISTEMAS DISTRIBUÍDOS", hours: 60, nature: "Obrigatória", prerequisites: ["COMP0461","COMP0472","COMP0395"] },
    ],
    totalHours: 330,
  },
  {
    period: "7º Período",
    subjects: [
      { id: "COMP0391", name: "COMPILADORES", hours: 60, nature: "Obrigatória", prerequisites: ["COMP0395","COMP0409"] },
      { id: "COMP0483", name: "PRÁTICA ORIENTADA EM COMPUTAÇÃO I", hours: 180, nature: "Obrigatória", prerequisites: ["COMP0438","COMP0461","COMP0455"] },
    ],
    totalHours: 240,
  },
  {
    period: "8º Período",
    subjects: [
      { id: "COMP0484", name: "PRÁTICA ORIENTADA EM COMPUTAÇÃO II", hours: 120, nature: "Obrigatória", prerequisites: ["COMP0483"] },
      { id: "COMP0485", name: "TRABALHO DE CONCLUSÃO DE CURSO I", hours: 60, nature: "Obrigatória", prerequisites: ["COMP0481","COMP0438","COMP0461","COMP0455"] },
    ],
    totalHours: 180,
  },
  {
    period: "9º Período",
    subjects: [
      { id: "COMP0308", name: "ATIVIDADES COMPLEMENTARES", hours: 120, nature: "Obrigatória", prerequisites: [] },
      { id: "COMP0482", name: "ESTÁGIO SUPERVISIONADO EM COMPUTAÇÃO", hours: 210, nature: "Obrigatória", prerequisites: ["COMP0438","COMP0461","COMP0455"] },
      { id: "COMP0486", name: "TRABALHO DE CONCLUSÃO DE CURSO II", hours: 120, nature: "Obrigatória", prerequisites: ["COMP0485"] },
    ],
    totalHours: 450,
  },
];