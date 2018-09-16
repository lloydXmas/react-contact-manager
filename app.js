const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Initial read/write should be synchronous
try {
  fs.accessSync('./saved/contacts.json', fs.constants.F_OK)
  console.log('contacts.txt exists')
} catch (err) {
  console.error('contacts.json not found, creating file...')
  fs.writeFileSync('./saved/contacts.json', '{ "contacts": [] } ')
}

app.get('/contacts', (req, res) => {
  fs.readFile('./saved/contacts.json', 'utf8', (err, data) => {
    if (err) throw err
    res.json(JSON.parse(data))
  })
})
app.post('/add', (req, res) => {
  const newEntry = req.body
  fs.readFile('./saved/contacts.json', 'utf8', (err, data) => {
    if (err) throw err
    var contactList = JSON.parse(data)
    contactList.contacts.push(newEntry)
    console.log(contactList)

    fs.writeFile('./saved/contacts.json', JSON.stringify(contactList), 'utf8', (err) => {
      if (err) throw err
      console.log('Updated contacts')
    })
  })
})

app.listen(5000, function () {
  console.log('Listening on port 5000')
})
