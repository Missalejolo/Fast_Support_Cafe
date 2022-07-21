// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)

      const lowercase= message.toLowerCase()
      console.log(this.state)


      if (lowercase.includes("hola"))
      {
          this.actionProvider.holaMundo()
      }
    }
  }
  
  export default MessageParser;
