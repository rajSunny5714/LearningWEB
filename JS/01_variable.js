const accountId = 54321
let accountEmail = "eleven@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountid = 3544 not allowed

accountEmail = "sj@sj.com"
accountPassword = "59304"
accountCity = "Bengaluru"
accountState = "Karnataka"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId)
// console.log()+

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
// console.log(accountState);