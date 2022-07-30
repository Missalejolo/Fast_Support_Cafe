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
      const message = this.createChatBotMessage("Saludos.")
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
      const message = this.createChatBotMessage('Vamos a pulsar la tecla de Windows y a la vez la tecla R, se nos abrirá un recuadro en el cual buscaremos "%temp%" se nos abrirá una carpeta en la cual tendremos todos nuestros archivos temporales, los elegiremos todos y haremos clic derecho, luego de eso pulsaremos "Eliminar". Aquellos elementos que no se nos permita eliminar, los omitiremos.')
      this.setChatbotMessage(message)
    }

    temporalesDefinicion = () => {
      const message = this.createChatBotMessage("Un archivo temporal es un archivo que puede ser creado por un programa cuando no puede asignar memoria suficiente para sus tareas o bien el sistema operativo en algunos casos son copias de seguridad")
      this.setChatbotMessage(message)
    }

    inicioAppsTutorial = () => {
      const message = this.createChatBotMessage('Pulse clic derecho en la barra de herramientas e ingrese a la opción "Administrador de tareas", pulsaremos "Más detalles" y nos iremos a la sección de "Inicio" ahí tendremos la opción de deshabilitar aquellas aplicaciones que inician en segundo plano para optimizar el arranque de nuestro equipo.')
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
