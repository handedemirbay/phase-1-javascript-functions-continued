// code your solution here
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(workplace = "go to the office"){
  return `This Monday, I will ${workplace}.`;
}

function wrapAdjective(wrap = "*"){
  return function(adj = "a hard worker"){
      return `You are ${wrap}${adj}${wrap}!`;
  }
}
