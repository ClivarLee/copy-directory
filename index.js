const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

function copyDirSync(sourceDirectory, targetDirectory) {
  fs.readdirSync(sourceDirectory).forEach(fileOrDirector => {
    const filePath = path.resolve(sourceDirectory, fileOrDirector)
    
    const fsStats = fs.statSync(filePath)
    if (fsStats.isFile()) {
      console.info(
        'copy ' +
        chalk.green(fileOrDirector) +
        ` to ${ targetDirectory.substr(targetDirectory.lastIndexOf('/') + 1) } directory`)
      fs.copyFileSync(filePath, path.resolve(targetDirectory, fileOrDirector))
    }
    if (fsStats.isDirectory()) {
      const newSourceDir = path.resolve(sourceDirectory, fileOrDirector)
      const newTargetDir = path.resolve(targetDirectory, fileOrDirector)
      fs.mkdir(newTargetDir)
      copyDirSync(newSourceDir, newTargetDir)
    }
  })
}

function copyDirAsync(sourceDirectory, targetDirectory ) {
  fs.readdir(sourceDirectory, (error, filesOrDirectory) => {
    // 遍历文件或者目录的数组
    files.forEach(file => {
      const filePath = path.resolve(sourceDirectory, filesOrDirectory)

      fs.stat(filePath, (error, stats) => {
        if (stats.isFile()) {
          console.info(
            'copy ' +
            chalk.green(fileOrDirector) +
            ` to ${ targetDirectory.substr(targetDirectory.lastIndexOf('/') + 1) } directory`)
          fs.copyFile(filePath, path.resolve(targetDirectory, fileOrDirector))
        }
        
        if (stats.isDirectory()) {
          const newSourceDir = path.resolve(sourceDirectory, fileOrDirector)
          const newTargetDir = path.resolve(targetDirectory, fileOrDirector)
          
          fs.mkdirSync(newTargetDir, (error) => {
            copyDirAsync(newSourceDir, newTargetDir)
          })
        }
      })
    })
  })
}

function copyDir(sourceDirectory, targetDirectory) {
  copyDirAsync(sourceDirectory, targetDirectory)
}
copyDir.copyDirSync = copyDirSync

module.exports = copyDir