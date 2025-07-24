(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( fileToEvaluate => fileToEvaluate.flagged );
    
    // mala idea para nombrar clases
    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor idea para nombrar clases
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy
   // const ddmmyyyy = new Date();
   const currentDay = new Date();
    
    // días transcurridos
    //const d: number = 23;
    const elapsedTimeInDays: number = 23;
    
    // número de archivos en un directorio
    //const dir = 33;
    const numberFilesInDirectory = 33;
    
    // primer nombre
    //const nombre = 'Fernando';
    const firstName = 'Fernando';
    
    // primer apellido
    //const apellido = 'Herrera';
    const lastName = 'Herrera';

    // días desde la última modificación
    //const dsm = 12;
    const daysSinceModification = 12;
    
    // cantidad máxima de clases por estudiante 
    //const max = 6;
    const maxClassesPerStudent = 6;


})();