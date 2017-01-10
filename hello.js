console.log('Starting password manager');

//node-persist is node module which acts like a file manager to store data from which data can be extracted
//just like db calls.It uses HTML5 local storage API.
var storage = require('node-persist');
storage.initSync();

storage.setItemSync('accountDetails', [{
  name: 'raji',
  balance: 100
}, {
  name: 'nisha',
  balance: 200
}]);

var accounts = storage.getItemSync('accountDetails');

accounts.push({
  name: 'sabi',
  balance: 1000
});

//Once new data is added, do not forget to sync it to keep it updated
storage.setItemSync('accountDetails', accounts);
console.log(accounts);
