import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Lugares = new Mongo.Collection('lugares');



  Template.menuNavegacao.helpers({
    'player': function(){
        return "Some other text";
    },
    'otherHelperFunction': function(){
        return "Some other function";
    }
});
 



