function check(str, bracketsConfig) {
  let resault = [];
  let reversBrecket;

  function reversItem(item){
    for(let i=0; i<bracketsConfig.length;i++){
      let itemTemp = bracketsConfig[i].indexOf(item);
      if(itemTemp!=-1){
        if(itemTemp==0){        
            return bracketsConfig[i][1];
        }
        else if(itemTemp==1){
          if(resault.length==0){
           return false;
          }else{
            return bracketsConfig[i][0];
          }            
        }
      }
    }
  }

  for (item of str){
    reversBrecket = reversItem(item);
    if(reversBrecket == false){
      return false;
    }
    let lastElement = resault[resault.length-1];
    if (lastElement!=reversBrecket){
      resault.push(item);
    }
    else{
      resault.pop();
    }
  }
  
  if (resault.length>0){
    console.log('false');
  }else{
    console.log('true');
  }
  
}

check('())(', [['(', ')']]) // -> false
check('[]][[]', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
// check('111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222', [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']]) // -> true








