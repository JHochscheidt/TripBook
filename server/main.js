import { Meteor } from 'meteor/meteor';

import '../imports/banco.js';


Meteor.startup(() => {
  // code to run on server at startup
});



if (Lugares.find().count() === 0) {
  Lugares.insert({
    identificador: "cachoeira-do-uruca",
        title: "Cachoeira do Urucá - Uiramutã - RR",
        path: "cachoeira-do-uruca-uiramuta-rr-640px.jpg",
        descricao: "Lugar ideal para aqueles que desejam realizar trilhas ecológicas. A cachoeira do Urucá fica no município de Uiramutã, região habitada por povos indígenas. A região fica situada no extremo norte do estado de Roraima, fronteira com a Guiana e Venezuela.",
        createdAt: new Date()
  });

  Lugares.insert({
    identificador: "centro-historico-ouro-preto",
        title: "Centro Histórico de Ouro Preto - MG",
        path: "centro-historico-ouro-preto-mg-640px.jpg",
        descricao: "A Cidade Histórica de Ouro Preto situa-se em Minas Gerais, Brasil, tendo sido o primeiro sítio brasileiro considerado Patrimônio Mundial da UNESCO, título que recebeu em 1980. Foi considerada patrimônio estadual em 1933 e monumento nacional em 1938. É famoso por sua arquitetura colonial. Ouro Preto localiza-se em uma das principais áreas do ciclo do ouro. O município chegou a ser a cidade mais populosa da América Latina, contando com cerca de 40 mil pessoas em 1730 e, décadas após, 80 mil. Àquela época, a população de Nova York era de menos da metade desse número de habitantes e a população de São Paulo não ultrapassava 8 mil. ",
        createdAt: new Date()
  });

  Lugares.insert(
    {
    identificador: "monte-roraima",
        title: "Monte Roraima - RR",
        path: "monte-roraima-rr-640px.jpg",
        descricao: "O monte Roraima é uma montanha localizada na tríplice fronteira entre Brasil, Venezuela e Guiana, na América do Sul. Constitui um tepui, um tipo de monte em formato de mesa bastante característico do planalto das Guianas. Delimitado por falésias de cerca de 1.000 metros de altura. Esse ambiente é protegido no território venezuelano pelo Parque Nacional Canaima e no território brasileiro pelo Parque Nacional do Monte Roraima.",
        createdAt: new Date()
  });

  Lugares.insert(
    {
        identificador: "morro-pai-inacio",
        title: "Morro do Pai Inacio - Chapada Diamantina - BA",
        path: "morro-pai-inacio-chapada-diamantina-ba-640px.jpg",
        descricao: "O Morro do Pai Inácio, um dos atrativos mais requisitados e famosos da Chapada Diamantina, possui 1.120m de altitude. Quem o visita não esquece jamais o visual visto de cima do morro. Dos 250 metros do topo do Morro do Pai Inácio se avista o Morro do Camelo, o Vale do Capão e o Morrão, sem falar de um dos cartões postais mais lindos da Chapada Diamantina: o pôr do sol do Morro do Pai Inácio.",
        createdAt: new Date()
  });
  
}

// ServiceConfiguration.configurations.remove({
//     service: "facebook"
// });

// ServiceConfiguration.configurations.insert({
//     service: "facebook",
//     appId: '1920573208224114',
//     secret: 'dcb4c07b24f1c154756836af0b8eafd7'
// });


// Accounts.onCreateUser(function (options, user) {

//     if (!user.services.facebook) {
//         return user;
//     }
//     user.username = user.services.facebook.name;
//     user.emails = [{address: user.services.facebook.email}];

//     return user;
// });





// FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
// });