function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return ('This one is on me!')
  }
  else if (feet > 400 && feet <= 2000){
    return ("That will be twenty bucks.")
  }
  else if (feet > 2000 && feet <= 2500){
    return ("I will gladly take your thirty bucks.")
  }
  else if (feet > 2500){
    return ("No can do.")
  }
  // Write your code here!
}

function ternaryCheckCity(City){
  return City === "NYC"? "Ok, sounds good.":"No go.";
  // Write your code here!
}


function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return("Thank you so much.");
      break;
    case 'not as generous':
      return('Thank you.');
      break;
    default:
      return('Bye.');
      break;
  }
  // Write your code here!
}