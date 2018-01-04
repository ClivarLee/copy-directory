## copyDirectory
a function of copy file inside directory use node

## Install 
npm
```bash
  $ npm intall copydirectory --save
```

yarn 
```bash 
  $ yarn add copydirectory --save
```

## Usage
copydirectory(src, dest, callBack)
  * src - source directory
  * dest - targert directory
  * callBack - invoke of copy done

Async copy file
```js
  var copydirectory = require('copydirectory');
  copydirectory('./dist', './build-zip', (error) => {})
```
Sync copy file 
```js
  var copydirectory = require('copydirectory');
  copydirectory.copyDirSync('./dist', './build-zip')
```

## License
MIT
