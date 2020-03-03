$(document).ready(function(){
    var num1 = ''
    var num2 = ''
    var operator = ''
    var total = ''

    let sysUserInput = $('input')
    let sysUserReturn = $('return')

    $('button').on('click', function(e) {        
      let btn = e.target.innerHTML;
      if (btn >= '0' && btn <= '9') {
        console.log('number');
      } else {
        console.log('operator');
      }
  });

  function handleNum(num) {
  };

  function handleOp (operactor) {
  };
  
  
  
  });
