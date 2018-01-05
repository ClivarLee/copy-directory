const copyDir = require('../index')
const assert = require('assert');
const fs = require('fs')
const path = require('path')
const childProcess = require('child_process')

const testSourceDir = path.resolve(__dirname, '../node_modules')
const tagrgetName = 'testDir'

describe('copyDir(copy directory sync)', function() {
  describe('copyDirSync()', function() {
    it('files should be equal in directory', function() {
      const testDirSync = path.resolve(__dirname, '../testDirSync')      
      const rm = childProcess.spawnSync('rm', [ '-rf', testDirSync ])
      fs.access(testDirSync, function(error) {
        if(error) {
          fs.mkdirSync(testDirSync)
        }
        copyDir.copyDirSync(testSourceDir, testDirSync)
      })
    });
  });
});

describe('copyDir(copy directory async)', function() {
  it('file should be equal in directory then async', function(done) {
    const testDir = path.resolve(__dirname, '../testDir')      
    const rm = childProcess.spawnSync('rm', [ '-rf', testDir ])

    fs.access(testDir, function(error) {
      if(error) {
        fs.mkdirSync(testDir)
      }
      copyDir(testSourceDir, testDir, function (error) {
        if(error) {
          done(error)
        }
        done()
      })
    })
  })
})
