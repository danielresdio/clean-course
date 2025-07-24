(() => {

    // función para obtener información de una película por Id
    /*function getAllMovies( movieId: string ) {
        console.log({ movieId });
    }*/
    function getMoviebyId( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película 
    /*function getAllMovieActors( id: string ) {
        console.log({ id });
    }*/
    function getMovieCast( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    /*function getUsuario( ActorId: string ) {
        console.log({ ActorId });
    }*/
    function getActorBiographyById( ActorId: string ) {
        console.log({ ActorId });
    }

    // Crear una película
    /*function movie(title: string, description: string, rating: number, cast: string[] ) {
        console.log({ title, description, rating, cast });
    }*/
   interface Movie{
    title: string;
    description: string; 
    rating: number; 
    cast: string[];
   }
    function createMovie({title, description, rating, cast}:Movie ) {
        console.log({title, description, rating, cast });
    } 

    // Crea un nuevo actor
    /*function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }*/

    function validateUserName(fullName: string){
        console.log('Crear actor');
        return true;  
    }    

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        if ( validateUserName(fullName) ) return false;

        console.log('Crear actor');
        return true;        

    }

    


})();