function isValidHKPhone(phone) {
  
  let re = /^((\+?852[ -]?)|(\(\+?852\)[ -]?))?[0-9]{4}[ -]?[0-9]{4}$/;
  //let re = /^(\+?\(?852[) -]{0,2})?([2356789]{4}[- ]?[0-9]{4})$/;
  //re = /^([\+]{1}||[\(])+([852]{3}|)+(|\))+( |)[23569]{1}[0-9]{3}?( ||\-)[0-9]{4}$/
  return re.test(phone);
}


function setup() {
  createCanvas(400, 400);
  getTests().forEach((test, i) => {
    if (isValidHKPhone(test.input) === test.result) {
      let msg = i + ") ok ";
      if (test.result) {
        let number = test.input.replace(/[^0-9]/g,'');
        msg += number.replace(/^\+?852/,'');
      }
      console.log(msg);
    } else {
      console.warn(i + ") fail: ", test);
    }
  });
}

function getTests() {
  return [
    {
      input: "2567-7865",
      result: true,
    },
     {
      input: "(852 25677865",
      result: false,
    },
    {
      input: "",
      result: false,
    },
    {
      input: "(852) 25677865",
      result: true,
    },
    {
      input: "(852)25677865",
      result: true,
    },
    {
      input: "(852)256778651",
      result: false,
    },
    {
      input: "8527865",
      result: false,
    },
    {
      input: "8527865999",
      result: false,
    },
    {
      input: "852786599",
      result: false,
    },
    {
      input: "852-2567-7865",
      result: true,
    },
    {
      input: "(851)25677865",
      result: false,
    },
    {
      input: "2567 7865",
      result: true,
    },
    {
      input: "852 2567 7865",
      result: true,
    },
    {
      input: "852 456a 7865",
      result: false,
    },
    {
      input: "852 45688 865",
      result: false,
    },
    {
      input: "852 45688 8654",
      result: false,
    },
    {
      input: "852 456 8654",
      result: false,
    },
    {
      input: "+852 2567 7865",
      result: true,
    },
    {
      input: "+852256778-5",
      result: false,
    },
    {
      input: "212 891 7865",
      result: false,
    },
    {
      input: "+85 25677865",
      result: false,
    },
    {
      input: "",
      result: false,
    },
    {
      input: "+85225677865",
      result: true,
    },
  ];
}
