const assert = require('assert');
const promisify = require('.');
const fs = require('fs');
const path = require('path');

describe('cb-promisify',  () => {

  it('fs.readFile回调测试（resolve）', done => {
    const readFile = promisify(fs.readFile);
    readFile(path.join(__dirname, 'index.js')).then(data => data && done());
  });

  it('fs.readFile回调测试（reject）', done => {
    const readFile = promisify(fs.readFile);
    readFile(path.join(__dirname, 'fade.js')).catch(error => error && done());
  });

  it('普通函数回调测试（多参）', done => {
    const normalFun = (foo, cb) => cb({ a: 1, b: 2 }, foo);
    const promiseFun = promisify(normalFun, false);
    promiseFun('fooo').then(res => res && res.length && done());
  });
});