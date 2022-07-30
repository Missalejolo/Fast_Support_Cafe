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
    
    desfragmentacionDefinicion = () => {
      const message = this.createChatBotMessage("Un Desfragmentador de Disco es un programa que restablece el orden en la superficie del disco duro o disco rígido de las computadoras, resolviendo así el problema de la fragmentación y logrando un funcionamiento optima en éstas. Si deseas mas informacion, puedes hacer click ")
      this.setChatbotMessage(message)
    }
    desfragmentacionTutorial = () => {
      const message = this.createChatBotMessage("Abra Desfragmentador de disco haciendo clic en el botón Icono del botón Inicio. En el cuadro de búsqueda, escribe Desfragmentador de disco y, en la lista de resultados, haz clic en Desfragmentador de disco. En Estado actual, selecciona el disco que desees desfragmentar. Para determinar si es necesario o no desfragmentar el disco, haz clic en Analizar disco. Se requieren permisos de administrador Si se le solicita una contraseña de administrador o una confirmación, escriba la contraseña o proporcione confirmación. Cuando Windows haya terminado de analizar el disco, puede comprobar el porcentaje de fragmentación en el disco en la columna Última ejecución. Si el número es superior al 10 %, deberías desfragmentar el disco. Haga clic en Disco de desfragmentación.  Se requieren permisos de administrador Si se le solicita una contraseña de administrador o una confirmación, escriba la contraseña o proporcione confirmación.")
      this.setChatbotMessage(message)
    }

    temporalesTutorial = () => {
      const message = this.createChatBotMessage("En el cuadro de búsqueda de la barra de tareas, escribe liberador de espacio en disco y selecciona Liberador de espacio en disco en la lista de resultados. Selecciona la unidad que quieres limpiar y, a continuación, Aceptar. En Archivos a eliminar, selecciona los tipos de archivo de los que desees deshacerte. Para obtener una descripción de algún tipo de archivo, selecciónalo. Selecciona Aceptar.")
      this.setChatbotMessage(message)
    }

    temporalesDefinicion = () => {
      const message = this.createChatBotMessage("Un archivo temporal es un archivo que puede ser creado por un programa cuando no puede asignar memoria suficiente para sus tareas o bien el sistema operativo en algunos casos son copias de seguridad")
      this.setChatbotMessage(message)
    }

    inicioAppsTutorial = () => {
      const message = this.createChatBotMessage("Apps inicio")
      this.setChatbotMessage(message)
    }

    inicioAppsDefinicion = () => {
      const message = this.createChatBotMessage("Estas aplicaciones son aquellas que se ejecutan al momento de iniciar Windows. El tener muchas de estas aplicaciones ejecutandose a la vez puede relentizar de manera significativa el inicio del sistema")
      this.setChatbotMessage(message)
    }

    error = () => {
      const message = this.createChatBotMessage("Lo siento, no te he entendido.")
      this.setChatbotMessage(message)
    }

    



    setChatbotMessage = (message) => {
      this.setState(state => ({...state, messages: [...state.messages, message]}))
    }
}
 export default ActionProvider;
