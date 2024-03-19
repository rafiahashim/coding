interface adderssType{
    streetName: string;
    city:string;
    country:string;
    zipCode:string;
};

type usertype = {
    firstname:string;
    lastname:string;
    cnicno:number;
    isstudent:boolean;
    subjects:string[];
    address:adderssType;
};
var user:usertype ={
    firstname:"rafia",
    lastname:"imran",
    cnicno:123465,
    isstudent:true,
    subjects:["english,urdu"],
    address:{
        streetName:"r207",
        city:"karachi",
        country:"pakistan",
        zipCode:"234",
    }



}
console.log (user);