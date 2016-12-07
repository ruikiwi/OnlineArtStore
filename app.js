(function(){

var app = angular.module('artStore', []);
var art = { name: 'Snow', price: 10 };

  app.controller("StoreController", function(){
    this.product = art;
  });


})();
