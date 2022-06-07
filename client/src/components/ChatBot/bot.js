// export const msgWelcome = `Hola bienvenidos al proyecto individual de Cristian Machado donde realizamos una Single Page Application sobre .... , en la cual utilizamos tecnologias para el Front-end como ReactJS , Redux Toolkits y CSS Puro , para el Back-end utilizamos Nodejs, Express, SQL y Postgres para la base de datos, espero que sea de su agrado

// \nPor favor seleccione una opcion para continuar o salir`
export const msgWelcome = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`

// msgLowerCase.includes('hola')
export default function msgProcessing(input){
    
    const msgLowerCase = input.toLowerCase();
    if(msgLowerCase.includes('continuar')) return 'entro'// req.history para ir a la siguiente pagina o close para cerrar la pestana o sino con link envio una respuesta y si matchea link a la proxima
    if(msgLowerCase.includes('hola') || msgLowerCase.includes('hi') || msgLowerCase.includes('buenas') || msgLowerCase.includes('que tal') || msgLowerCase.includes('buen dia') || msgLowerCase.includes('good morning') || msgLowerCase.includes('hello')) return 'Hola que tal bienvenido al Proyeccto individual de Cristian Machado para mas informacion teclear /mas informacion '
    if(msgLowerCase)return `Disculpe actualmente no podemos ayudarlo con nada mas`
}



