class Socket {
  constructor(channels = {}) {
    this.channels = channels
  }
  subscribe(channelName, callback) {
    const currentCbs = this.channels[channelName] || []
    currentCbs.push(callback)
    this.channels[channelName] = currentCbs
  }
  publish(channelName, message) {
    if (this.channels[channelName]) {
      this.channels[channelName].forEach(fn => fn(message))
    }
  }
  unsubscribe(channelName, callback) {
    const index = (this.channels[channelName] || []).indexOf(callback)
    if (index >= 0) {
      this.channels[channelName].splice(index, 1)
    }
  }
  broadcast(message) {
    Object.keys(this.channels).forEach(channel =>
      this.publish(channel, message)
    )
  }
}

const socket = new Socket()

socket.subscribe("test1", message => {
  console.log("test1", message)
})

socket.subscribe("basket", message => {
  console.log("basket", message)
})

socket.publish("test1", {
  message: "just a test "
})

socket.broadcast({
  message: "TEST BROADCAST"
})
