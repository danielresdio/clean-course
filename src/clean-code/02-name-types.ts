(() => {

    // arreglo de temperaturas celsius
    //const arrayOfNums = [33.6, 12.34];
    const temperatureValues = [33.6, 12.34];

    // Dirección ip del servidor
    //const ip = '123.123.123.123';
    const serverIp = '123.123.123.123';

    // Listado de usuarios
    //const people = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    //const emails = people.map( u => u.email );
    const emailsOfUsers = users.map( u => u.email );
    // Variables booleanas de un video juego
    //const jump = false;
    //const run = true;
   // const noTieneItems = true;
    //const loading = false;

    const canJump = false;
    const isRuning = true;
    const haveItems = true;
    const isLoading = false;

    // Otros ejercicios
    // tiempo inicial
    //const start = new Date().getTime();
    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const endTime = new Date().getTime() - startTime;


    // Funciones
    // Obtiene los libros
    /*function book() {
        throw new Error('Function not implemented.');
    }*/

    function getBook() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    /*function BooksUrl( u: string) {
        throw new Error('Function not implemented.');
    }*/

    function getBooksByUrl( u: string) {
        throw new Error('Function not implemented.');
    }
    
    // obtiene el área de un cuadrado basado en sus lados
    /*function areaCuadrado( s: number ) {
        throw new Error('Function not implemented.');
    }*/

    function areaOfTheSquareByItsSides( s: number ) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function printJob() {
        throw new Error('Function not implemented.');
    }   
})();