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



// Template.editarLugar.events({
//   'submit form': function(e) {
//     e.preventDefault();

//     var currentLugartId = this._id;

//     var propriedadesLugar = {
//         identificador: $(e.target).find('[name="identificador]').val(), 
//         title: $(e.target).find('[name=title]').val(),
//         path: $(e.target).find('[name=path]').val(),
//         descricao: $(e.target).find('[name=descricao]').val()
//     }

//     Lugares.update(currentLugartId, {$set: propriedadesLugar}, function(error) {
//       if (error) {
//         // display the error to the user
//         alert(error.reason);
//       } else {
//         Router.go('postPage', {_id: currentLugartId});
//       }
//     });
//   },

//   'click .delete': function(e) {
//     e.preventDefault();

//     if (confirm("Delete this post?")) {
//       var currentLugartId = this._id;
//       var currentLugartId = this._id;
//       Lugares.remove(currentPostId);
//       Router.go('postsList');
//     }
//   }
// });











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
   	}

    // 'click #botao-buscar-lugar': function(event){
    //     vetorLugares: function() {
    //         return Lugares.find({title: $("#botao-buscar-lugar").val()}, {sort: {createdAt: -1}});
    //     }
    // }   


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



