import WebSocket from 'ws'

const websocket = new WebSocket('ws://localhost:9091')
websocket.on('open', function open() {
  websocket.on('message', function message(data) {
    console.log(`${data}`)
  })
})
