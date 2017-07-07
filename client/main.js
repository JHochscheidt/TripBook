import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../imports/banco.js';


Meteor.startup(function() {
    $('[data-toggle="tooltip"]').tooltip();  
    $("#botao-login").click(function(){
        $("#modal-login").modal();
    });

    $("#botao-adicionar-lugar").click(function(){
        $("#modal-adicionar-lugar").modal();
    });

});



// vetor da secao Lugares //
////////////////////////////



Template.secaoLugares.helpers({
    vetorLugares: function() {
    return Lugares.find({}, {sort: {createdAt: -1}});
  }
});



Template.secaoLugares.events({

	'submit #form-adicionar-lugar': function(event){
        Lugares.insert({
            identificador: $("#identificador-lugar").val(),
            title: $("#nome-lugar").val(), 
            path: $("#imagem-lugar").val(),
            descricao: $("#descricao").val(),
            createdAt: new Date()
        });
            $("#identificador-lugar").val("");
            $("#nome-lugar").val("");
            $("#imagem-lugar").val("");
            $("#descricao").val("");

		// var e = Cadastro.find({email: event.target.email.value}).count()
		// var c = Cadastro.find({email: event.target.cpf.value}).count()
		// var s = Cadastro.find({email: event.target.senha.value}).count()

		// Cadastro.insert({nome: event.target.nome.value, cpf: event.target.cpf.value, email: event.target.email.value, tel: event.target.tel.value, senha: event.target.senha.value, created: new Date()});        
   		
        // var identificador = event.target.identificador-lugar.value;
        // var title = event.target.nome-lugar.value;
        // var path = event.target.imagem-lugar.value;
        // var descricao = event.target.descricao.value;

        // //alert(identificador + "  " + title + "  " + path + "  " + descricao);


        // Lugares.insert({identificador: event.target.identificador-lugar.value, title: event.target.nome-lugar.value, path: event.target.imagem-lugar.value, descricao: event.target.descricao.value, createdAt: new Date()});  

   	}


});

// Template.login.helpers({
//     getEmail() {
//         return Meteor.user().emails && Meteor.user().emails[0].address;
//     }
// });

// Template.login.events({
//     'click button.log-in'(event) {
//         event.preventDefault();
//         Meteor.loginWithFacebook({requestPermissions: ['public_profile', 'email']}, function(err){
//             if (err) {
//                 console.log('Handle errors here: ', err);
//             }
//         });
//     },
//     'click button.log-out'(event) {
//         event.preventDefault();
//         Meteor.logout();
//     }
// });



