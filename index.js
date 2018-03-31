// Write your code in this file!


function scuberGreetingForFeet(distance){
  switch (true){
    case (distance < 400):
      return 'This one is on me!'
      break;
    case (distance > 2000):
      return 'I will gladly take your thirty bucks.';
      break;
    case (distance > 2500):
      return 'No can do.'
      break;
    default:
      return ''
  }
}