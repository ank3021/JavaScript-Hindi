const account_id = 147852;// const variables must be initialized with a value once they are declared.
let account_balance = 5000; // let variables can be changed after initialization but cannot be re-declared. It has block level scope. It has a default value of undefined.
var account_password = 12345;// var variables can be changed after initialization and can be re-declared. It has function level scope. It has a default calue of undefined.
account_city = "Jaipur";
let account_state;

account_balance = 10000;
account_password = 30215;
account_city = "New Delhi";

/*account_id = 156987;  const variables once initialized cannot be changed in the program. It is illegal.*/
console.table([account_id, account_balance, account_password, account_city, account_state]);