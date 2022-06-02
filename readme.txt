var, let, const are hoisted to the top.
var is initialized as undefined(var someVariable = undefined)
let and const keyword is not initialized. if you try to use a let variable before declaration, you'll get a Reference Error.
All undeclared variables(no keyword var or let or const before variable) are global variables.
Function declarations hoist the function definitions. Hence, functions declaration can be used before they are declared.
Function expressions in JavaScript are not hoisted. (const someFunction = () => {};)

my notes
treat word "function" as "var" keyword without initialization to undefined (twelfth)
be careful with function arguments (sixteen)