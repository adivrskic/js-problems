// a function which accepts a variable number of arguments,
// and checks to see if there are duplicates among the arguments passed in

function areThereDuplicates(...args) {
  let argsObj = {};

  for(let i = 0; i < args.length; i++) {
    argsObj[args[i]] = (argsObj[args[i]] || 0) + 1;

    if(argsObj[args[i]] > 1) return true;
  }

  return false;
}
