const first = () => {
  console.log(y);
  y = 1;
};

const second = () => {
  console.log(y);
  var y = 2;
};

const third = () => {
  y = 3;
  console.log(y);
  var y;
};

const fourth = () => {
  var a = 1;
  console.log(a);
  var a = 2;
  console.log(a);
};

const fifth = () => {
  var z = 1;
  let z;
  console.log(z);
};

const sixth = () => {
  console.log(z);
  let z = 1;
};

const seventh = () => {
  function hoistingExample() {
    console.log("Value of a in local scope: ", a);
  }

  console.log("Value of a in global scope: ", a);

  var a = 1;
  hoistingExample();
};

const eighth = () => {
  function hoistingExample() {
    a = 1;
  }
  hoistingExample();
  console.log(a);
};

const ninth = () => {
  function hoistingExample() {
    var a = 1;
  }
  hoistingExample();
  console.log(a);
};

const eleventh = () => {
  function a() {
    console.log("1");
  }

  a();

  function a() {
    console.log("2");
  }

  a();
};

const twelfth = () => {
  var test = 1;

  function functionHoisting() {
    test = 10;
    return;
    function test() {}
  }

  functionHoisting();

  console.log(test);
};

const thirteen = () => {
  console.log(a());

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
  console.log(a());
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

  console.log(a);
  console.log(b);
};

const sixteen = () => {
  (function () {
    try {
      throw new Error();
    } catch (x) {
      var x = 1,
        y = 2;
      console.log(x);
    }

    console.log(x);
    console.log(y);
  })();
};

const seventeen = () => {
  var b = 1;

  function outer() {
    var b = 2;

    function inner() {
      b++;
      var b = 3;
      console.log(b);
    }

    inner();
  }

  outer();
};
