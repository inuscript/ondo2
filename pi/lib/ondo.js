var five = require("johnny-five")
var board = new five.Board({
  repl: false,
  debug: false
})

module.exports = function(cb){
  // console.debug("start")
  board.once("ready", function() {
    // console.debug("ready")
    // This requires OneWire support using the ConfigurableFirmata
    var temperature = new five.Temperature({
      controller: "LM35",
      pin: "A0"
    })

    temperature.once("data", function(data){
      // console.debug("tmp")
      // if(err){
      //   console.warn(err)
      // }
      // TODO: fix api
      cb(undefined, data.celsius, new Date().getTime(), data)
    })
  })
}
