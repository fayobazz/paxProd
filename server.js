// // const { createServer } = require('http')
// // const { parse } = require('url')
// // const next = require('next')

// // const dev = process.env.NODE_ENV !== 'production'
// // const hostname = 'localhost'
// // const port = process.env.PORT || 3000

// // const app = next({ dev, hostname, port })
// // const handle = app.getRequestHandler()

// // app.prepare().then(() => {
// //   createServer(async (req, res) => {
// //     try {
// //       const parsedUrl = parse(req.url, true)
// //       const { pathname, query } = parsedUrl

// //       if (pathname === '/a') {
// //         await app.render(req, res, '/a', query)
// //       } else if (pathname === '/b') {
// //         await app.render(req, res, '/b', query)
// //       } else {
// //         await handle(req, res, parsedUrl)
// //       }
// //     } catch (err) {
// //       console.error('Error occurred handling', req.url, err)
// //       res.statusCode = 500
// //       res.end('internal server error')
// //     }
// //   }).listen(port, (err) => {
// //     if (err) throw err
// //     console.log(`> Ready on http://${hostname}:${port}`)
// //   })
// // })
// import { createServer } from 'http'
// import { parse } from 'url'
// import next from 'next'

// const hostname = process.env.NODE_ENV !== 'production' ? 'localhost' : 'paxcatholictv.org'
// const port = parseInt(process.env.PORT || '4789', 10)
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//   createServer((req, res) => {
//     const parsedUrl = parse(req.url, true)
//     handle(req, res, parsedUrl)
//   }).listen(port)

//   console.log(
//     `> Server listening at http://${hostname}:${port} as ${
//       dev ? 'development' : process.env.NODE_ENV
//     }`
//   )
// })
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
// const hostname = process.env.NODE_ENV !== 'production' ? 'localhost' : 'new.test.paxcatholictv.org'

const hostname = 'localhost'
const port = process.env.PORT || 3000

const app = next({ hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      if (pathname === '/a') {
        await app.render(req, res, '/a', query)
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query)
      } else {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})