export class Posts{
    id?:number;
    title:string
    body:string;
    likes:number;

    constructor(){
        this.id = 1;
        this.title='';
        this.body='';
        this.likes=0;
    }
}