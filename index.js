const promisify = (fn, ctx) => {

  return function () {

    const args = [...arguments];
    if(!ctx) ctx = this;

    return new Promise(resolve => {
      args.push((..._args) => resolve(_args));
      fn.apply(ctx, args);
    });
  }
}

module.exports = promisify;