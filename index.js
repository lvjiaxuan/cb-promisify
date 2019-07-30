const promisify = (fn, ctx, node = true) => {

  return function () {

    const args = [...arguments];
    if(!ctx) ctx = this;

    return new Promise((resolve, reject) => {
      args.push((..._args) => {
        if(node) {
          if(_args[0]) reject(_args[0]);
          else resolve(_args.pop());
        } else {
          resolve(_args);
        }
      });
      fn.apply(ctx, args);
    });
  }
}

module.exports = promisify;