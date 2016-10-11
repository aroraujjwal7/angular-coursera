(function(){
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListService',ShoppingListService);
    
    ToBuyController.$inject = ['ShoppingListService'];
    function ToBuyController(ShoppingListService){
        var buy = this;
        
        buy.listOfItems = function(){
          return  ShoppingListService.getListOfItemsToBuy();
        };
        
        buy.removeFromList = function(index){
            ShoppingListService.removeItemFromList(index);      
        };
        
        buy.message = function(){
         return (buy.listOfItems().length === 0);   
        };
        
    };
    
    AlreadyBoughtController.$inject = ['ShoppingListService'];
    function AlreadyBoughtController(ShoppingListService){
        var bought = this;
        
        bought.listOfItems = function() {
         
            return ShoppingListService.getListOfItemsBought();
        };
        
        bought.message = function(){
            return (bought.listOfItems().length === 0);
        };
    };
    
    function ShoppingListService(){
        var service = this;
        
        var itemsToBuy = [{name: "Cookies", quantity: 12}, {name: "Cakes", quantity: 5}, {name: "Soda", quantity: 15}, {name: "Pepto Bismol", quantity: 3}, {name: "Candies", quantity: 20}];
        var itemsBought = [];
        
        service.getListOfItemsToBuy = function(){
            return itemsToBuy;
        };
        
        service.getListOfItemsBought = function(){
            return itemsBought;
        };
        
        service.removeItemFromList = function(index){
            var item = itemsToBuy[index];
            itemsToBuy.splice(index,1);
            itemsBought.push(item);
        };
        
    };
})();