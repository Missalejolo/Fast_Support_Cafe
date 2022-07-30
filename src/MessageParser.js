import { Switch } from "react-router";

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
    
    
    if (lowercase.includes("desfragmentaci"))
    {
      if (lowercase.includes("desfragmentaci"&&"como"))
      {
          this.actionProvider.desfragmentacionTutorial()
      }
      else{
        this.actionProvider.desfragmentacionDefinicion()
      }
        
    }
    else if (lowercase.includes("archivos")&&("temporales"))
    {
      if (lowercase.includes("como"))
      {
        this.actionProvider.temporalesTutorial()
      }
      else{
        this.actionProvider.temporalesDefinicion()
      }
        
    }
    
    else if (lowercase.includes("inicio") &&("aplicaciones"))
    {
      if (lowercase.includes("como"&&"deshabilitar"))
      {
        this.actionProvider.inicioAppsTutorial()
      }
      else{
        this.actionProvider.inicioAppsDefinicion()
      }
        
    }

    else{
        this.actionProvider.error()
    }
    

    
  }
}

export default MessageParser;
