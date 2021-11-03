const template = require('babel-template')
const fs = require('fs')
const compFolder = './src/flag-components'
const flagFolder = './dist/flags'
const countryCodeList = JSON.parse(fs.readFileSync('node_modules/flagpack-core/countryCodeList.json'))
const mainPath = './src/main.js'
// const templateFile = fs.readFileSync('./src/template.vue')

const countryObject = {}
countryCodeList.map((country) => {
  const alpha2 = country.alpha2
  const flagName = alpha2.replaceAll('-', '')

  countryObject.alpha2 = alpha2
  countryObject.flagName = flagName
})


fs.readFile('./src/template.vue', 'utf8', (err, data) => {
  const file = 'US'

  const newFile = data.replaceAll('FlagTemplate', file)

  // console.log(newFile);

  fs.writeFile(`${compFolder}/US.vue`, newFile, () => {
    console.log('Wrote Vue component for US!')
  })

  fs.readFile(mainPath, 'utf8', (err,mainData) => {
    const importIdentifier = '// import above'
    const importInsert = `import ${file} from './flag-components/${file}.vue'`

    const exportIdentifier = '// export above'
    const exportInsert = `module.exports.Flag${file} = ${file}`

    const newMainFile = mainData.replace(importIdentifier, `${importInsert}\n${importIdentifier}`).replace(exportIdentifier, `${exportInsert}\n${exportIdentifier}`)

    fs.writeFile(mainPath, newMainFile, () => {
    console.log('Updated main.js')
    })
  })
})
