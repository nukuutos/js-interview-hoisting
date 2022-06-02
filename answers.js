// var, let, const are hoisted to the top.
// var is initialized as undefined(var someVariable = undefined)
// let and const keyword is not initialized. if you try to use a let variable before declaration, you'll get a Reference Error.
// All undeclared variables(no keyword var or let or const) are global variables.
// function declarations hoist the function definitions.Hence, functions declaration can be used before they are declared.
// Function expressions in JavaScript are not hoisted. (const someFunction = () => {};)

// my notes
// treat word "function" as "var" keyword without initialization to undefined (twelfth)
// be careful with function arguments (sixteen)

// what it logs?

const first = () => {
  console.log(y); // no declaration - error
  y = 1;
};

const second = () => {
  console.log(y); // undefined
  var y = 2;
};

const third = () => {
  y = 3;
  console.log(y); // 3
  var y;
};

const fourth = () => {
  var a = 1;
  console.log(a); // 1
  var a = 2;
  console.log(a); // 2

  // under the hood
  // var a;
  // a = 1;
  // a = 2;
};

const fifth = () => {
  var z = 1;
  let z; // error
  console.log(z);
};

const sixth = () => {
  console.log(z); // error
  let z = 1;
};

const seventh = () => {
  function hoistingExample() {
    console.log("Value of a in local scope: ", a); // 1
  }

  console.log("Value of a in global scope: ", a); // undefined

  var a = 1;
  hoistingExample();
};

const eighth = () => {
  function hoistingExample() {
    a = 1;
  }
  hoistingExample();
  console.log(a); // 1
};

const ninth = () => {
  function hoistingExample() {
    var a = 1;
  }
  hoistingExample();
  console.log(a); // error
};

const eleventh = () => {
  function a() {
    console.log("1");
  }

  a(); // 2

  function a() {
    console.log("2");
  }

  a(); // 2
};

const twelfth = () => {
  var test = 1;

  function functionHoisting() {
    test = 10;
    return;
    function test() {}
  }

  functionHoisting();

  console.log(test); // 1
  //
  // under the hood
  // var test;
  // function functionHoisting() {
  //   function test() {}, local variable
  //   test = 10;
  //   return;
  // }
  //
  // test = 1;
  // functionHoisting();
  // console.log(test);
};

const thirteen = () => {
  console.log(a()); // 3

  function a() {
    var b = function () {
      return 3;
    };
    return b();
    var b = function () {
      return 8;
    };
  }
};

const fourteen = () => {
  console.log(a()); // 8
  function a() {
    function b() {
      return 3;
    }

    return b();

    function b() {
      return 8;
    }
  }
};

const fifteen = () => {
  (function () {
    var a = (b = 3);
  })();

  console.log(a); // error, a is not defined
  console.log(b); // b = 3, global variable
};

const sixteen = () => {
  (function () {
    try {
      throw new Error();
    } catch (x) {
      var x = 1,
        y = 2;
      console.log(x); // 1
    }

    console.log(x); // undefined
    console.log(y); // 2
  })();
};

const seventeen = () => {
  var b = 1;

  function outer() {
    var b = 2;

    function inner() {
      b++; // nan
      var b = 3;
      console.log(b); // 3
    }

    inner();
  }

  outer();
};
