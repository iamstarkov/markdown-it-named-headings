var namedHeadings = require('./index')
var test = require('ava')

var md = require('markdown-it')()
  .use(namedHeadings, {})

test('add ids', t => {
  var out = md.render('# hello')
  t.true(out === '<h1 id="hello">hello</h1>\n')
})

test('kebabcase ids', t => {
  var out = md.render('# hello there')
  t.true(out === '<h1 id="hello-there">hello there</h1>\n')
})

test('handle collisions', t => {
  var out = md.render('# hello there\n# hello there\n# hello there')
  t.true(out ===
    '<h1 id="hello-there">hello there</h1>\n' +
    '<h1 id="hello-there-1">hello there</h1>\n' +
    '<h1 id="hello-there-2">hello there</h1>\n')
})
