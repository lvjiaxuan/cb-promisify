const promisify = (fn, node = true) => {
  return function () {
    return new Promise((resolve, reject) => {
      const args = [ ...arguments ];
      args.push((..._args) => {
        if(node) {
          if(_args[0]) {
            reject(_args[0]);
          } else {
            _args.shift();
            resolve(_args);
          }
        } else {
          resolve(_args);
        }
      });
      fn.apply(null, args);
    });
  }
}

module.exports = promisify;