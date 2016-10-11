(function(){
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListService',ShoppingListService);
    
    ToBuyController.$inject = ['ShoppingListService'];
    function ToBuyController(ShoppingListService){
        var buy = this;
        buy.listOfItems = ShoppingListService.getListOfItemsToBuy();
        buy.message = false;
        buy.removeFromList = function(index){
            try{
                ShoppingListService.removeItemFromList(index);      
            } catch(error) {
                buy.message = true;
            }   
        };
    };
    
    AlreadyBoughtController.$inject = ['ShoppingListService'];
    function AlreadyBoughtController(ShoppingListService){
        var bought = this;
        bought.listOfItems = ShoppingListService.getListOfItemsBought();
        bought.message = false;
    };
    
    function ShoppingListService(){
        var service = this;
        
        var itemsToBuy = [{name: "Cookies", quantity: 12}, {name: "Cakes", quantity: 5}, {name: "Soda", quantity: 15}, {name: "Pepto Bismol", quantity: 3}, {name: "Candies", quantity: 20}];
        var itemsBought = [];
        
        service.boughtMessage = function(){
            console.log("Function Called");
            return (itemsBought.length === 0);
        };
        
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
            if(itemsToBuy.length === 0){
                throw new Error();
            }
            if(itemsBought.length !== 0){
                service.boughtMessage = false;
            }
        };
        
    };
})();