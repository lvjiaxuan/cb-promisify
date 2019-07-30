# promise转换

将普通的回调函数转换为Promise形式返回

## 使用注意

- callback回调参数必须放在最后一位
- 为了不限于node错误优先回调，所有回调函数的返回值存放于数组，可用数组解构获取

## 示例

> 已上传npm，可安装：`npm i cb-promisify`

```javascript
const promisify = required('cb-promisify');
const fs = required('fs');

// 转换函数
const readdirPro = promisify(fs.readdir);

// 使用
readdirPro('dir/').then(rs => {
  const [err, files] = rs;
  console.log(files);
})
```

## 源码

```javascript
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
```