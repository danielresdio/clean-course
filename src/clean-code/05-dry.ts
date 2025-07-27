type Size = '' | 'S' | 'M' | 'L'

class Product{
    constructor(public name: string = '',
        public price: number = 0,
        public size: Size =  ''
    ){}

   
    toString(){        
         /* This lines doesn't apply Dry */
        /*if(this.name.length <= 0 )throw Error('Name is empty');
        if(this.price < 0 )throw Error('Name is empty');
        if(this.name.length <= 0 )throw Error('Name is empty');
        return `${this.name}`*/

        /* calling new method to apply dry*/
        if(!this.isProductReady) return;

        return `${this.name} (${this.price}),${this.size}`


    }

    /* This method apply Dry */
    isProductReady() : boolean{        
        for(const key in this){
            switch(typeof this[key]){
                case 'string':
                    if((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`);
                break;
                case 'number':
                    if((<number><unknown>this[key]) <= 0) throw Error(`${key} is zero`);
                break;
                default:
                    throw Error(`${typeof this[key]} is not valid`);
            }
        }
        return true;
    }

}

(() => {
    const bluePants = new Product();
    console.log(bluePants.toString());
})