
let sales: number = 123_456_789;

let course: string = 'Typescript';

let is_published: boolean = true;

let level;

//Any 
function render(document: any){
    console.log(document)
}
//Arrays 
let numbers: number[] = [1,2,3];

//Tupples 
let user: [number , string] = [1,'Mosh'];

//Enums 
enum Size {Small = 1 , Medium , Large }

let mySize:Size = Size.Medium
console.log(mySize);

//Functions
function calculateTax( income: number , taxYear = 2022): number {
    if (taxYear < 2022){
        return income * 1.2
    }
    return income * 1.3

}

calculateTax(10_000 , 2023);

//Objects + type alias
type Employee = {
    readonly id: number,
    name: string,
    fax?: number,
    retire: (date: Date) => void

}

let employee: Employee = {
    id: 1,
    name: 'khalil',
    retire: (date: Date) =>{
        console.log(date)
    } 
}

// Union Types
function kgToLbs(weight: number | string):number{
    //Narrowing
    if(typeof weight === 'number'){
        return weight * 2.2
    }else{
        return parseInt(weight) * 2.2
    }
}

kgToLbs(10);
kgToLbs('10');

//Intersection Types

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
}
        //intersection type 
type UIWidget = Draggable & Resizable

let textBox: UIWidget ={
    drag: ()=> {},
    resize: () =>{}
}

//Literral types (exact , specific)
type Quantity = 50 | 100
let quantity: Quantity = 100;

// Nullable types 
function greet(name:string | null | undefined){
    if(name)
        console.log(name.toUpperCase())
    else
        console.log('Hola!')
}

greet(null);
greet(undefined);

//Optional chaining

type Customer ={
    birthday? : Date
}

function getCustomer(id:number):Customer | null | undefined{
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0);
            //optional property access operator
            console.log(customer?.birthday?.getFullYear())
            //Optional element access operator 
            //if (customers !== null && customers !== undefined)
            //cutomers[0] 
            //====> customers?.[0]

            //optional call
            let log: any = null;
            log?.('a'); // log will only get executed when it's refrencing an actual function otherwise will get undefined





