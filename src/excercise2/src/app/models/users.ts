export class User{
    id:number;
    name:string
    username:string;
    email:string;
    phone:string;
    website:string;
    address:Address;
    company:Company;
    constructor(){
        this.id = 0;
        this.name='';
        this.username='';
        this.email='';
        this.phone='';
        this.website='';
        this.email='';
        this.address={
            city:'',
            geo:{
                lng:'',
                lat:''
            },
            street:'',
            suite:'',
            zipcode:''
        };
        this.company={
            bs:'',
            catchPhrase:'',
            name:''
        }
    }
}

class Company{
    name:string
    catchPhrase:string;
    bs:string;
    constructor(){
        
        this.name='';
        this.catchPhrase='';
        this.bs='';
     
    }
}


class Address{
street:string;
suite:string;
city:string;
zipcode:string;
geo:Geo;

constructor(){
    this.street='';
    this.suite='';
    this.city='';
    this.zipcode='';
    this.geo={
        lat:'',
        lng:''
    };

}

}


class Geo{
    lat:string;
    lng:string;

    constructor(){
        this.lat='';
        this.lng='';

    }
}

export  class user{
    id:number=0
        first_name:string=''
        last_name:string=''
        username:string=''
        password:string=''
        
}