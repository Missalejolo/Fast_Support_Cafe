class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }


      holaMundo = () => {
        const message = this.createChatBotMessage("Saludos")
        this.setChatbotMessage(message)
      }
      setChatbotMessage = (message) => {
        this.setState(state => ({...state, messages: [...state.messages, message]}))
      }
      
  }
 
 export default ActionProvider;