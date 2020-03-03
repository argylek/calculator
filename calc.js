$(document).ready(function () {
  var num1 = ''
  var num2 = ''
  var operator = ''
  var total = ''

  let sysUserInput = document.getElementById('input')
  let sysUserReturn = document.getElementById('return')
  let sysOpReturn = document.getElementById('operator')

  function clearCalc(){
    sysUserInput = "c";
    sysUserReturn =  "c";
    num1 = '';
    num2 = '';
    operator = '';
    total = '';
  }


  $('.calc_btn').on('click', function (e) {
    let btn = e.target.innerHTML;
    if (btn >= '0' && btn <= '9') {
      handleNum(btn);
    } else {
      handleOp(btn);
    }
  });
  
  function handleNum(num) {
    // this will handle all of my number functions
    if (num1 === '') {
        num1 = num;
      } else {
          num2 = num;
        }
        displayButton(num);
      };
      
      function handleOp(op) {
        // this will handle all of my operator funtions
        if (operator === ''){
          operator = op
        } else
          handleTotal();
          operator = op;
        // console.log(displayButton(op));

      };
      
      function displayButton(btn) {
        // this will display the button presses as they're happening
        // debugger
        sysUserInput.innerHTML = btn
      }
      function displayTotal(btn){
        sysUserReturn.innerHTML = btn
      }

    function handleTotal(){
      switch(operator) {
        case '+':
          total = +num1 + +num2;
          displayTotal(total);
          break;
        case '-':
          total = +num1 - +num2;
          displayTotal(total);
          break;
        case '/':
          total = +num1 / +num2;
          displayTotal(total);
          break;
        case '*':
          total = +num1 * +num2;
          displayTotal(total);
          break;
      }
      updateVars();
    }

    function updateVars(){
      num1 = total;
      num2 = '';
    }

   
});