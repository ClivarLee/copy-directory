function copyFile(baseDirectory, targetDirectory) {
  fs.readdirSync(baseDirectory).forEach(fileOrDirector => {
    const filePath = path.resolve(baseDirectory, fileOrDirector)
    
    fs.stat(filePath, (error, stats) => {
      if (error) {
        console.error(error)
        return
      }
      if (stats.isFile()) {
        console.info('copy ' + chalk.green(fileOrDirector) + ' to build-zip directory')
        fs.copyFileSync(filePath, path.resolve(targetDirectory, fileOrDirector))
      }
      if (stats.isDirectory()) {
        const newBaseDir = path.resolve(baseDirectory, fileOrDirector)
        const newTargetDir = path.resolve(targetDirectory, fileOrDirector)
        fs.mkdirSync(newTargetDir)
        copyFile(newBaseDir, newTargetDir)
      }
    })
  })
}

module.exports = copyFile