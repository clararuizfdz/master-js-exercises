// Implementa una función llamada hasId que admita como parámetro un objeto y 
// compruebe si dicho objeto tiene una propiedad llamada id (debe devolver booleano true/false).
const hasId = (objectToCheck) =>{
    const {id} = objectToCheck;    
    const objectHasId = id ? true: false;
    return objectHasId;
}

const objectToCheck = {
    name: "pepe",
    city: "malaga",
    id: 2
}

console.log("hasId: ", hasId(objectToCheck));

// Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.
const head = (inputArray) =>{
    const [firstItemInArray] = inputArray;
    return firstItemInArray;
}

const inputArray = [1, 2, 3, 4, 5];
console.log("head: ", head([1,2,3]));

// Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los elementos menos el primero.
const tail = (inputArray) =>{
    const [,...newArrayWithoutFirstItem] = inputArray;
    return newArrayWithoutFirstItem;
}
console.log("tail: ", tail([1, 2, 3, 4, 5]));

//Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array 
//donde el primer elemento ha sido colocado en la última posición.
const swapFirstToLast = (inputArray) =>{
    const [first, ...newArrayWithoutFirstItem] = inputArray;
    return [...newArrayWithoutFirstItem, first];
}
console.log("swapFirstToLast: ", swapFirstToLast(["Ana", "Pedro", "Juan"]));

//Implementa una función llamada excludeId tal que, dado un objeto como entrada, 
// devuelva dicho objeto clonado excepto la propiedad id si la hubiera.
const excludeId =({id, ...input}) => input;
console.log("excludeId:", excludeId(objectToCheck));

//Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, 
//devuelva otro array filtrado con aquellas palabras que empiecen por a.
const wordsStartingWithA = (words) => {
    const wordsWithA = words.filter(([first]) => first.toLowerCase() === "a");
    return wordsWithA;
}
console.log("wordsStartingWithA: ", wordsStartingWithA(["Ana", "María", "Antonio", "Pepe"]));

//Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y 
// devuelva otro string con la concatenación de todos, separados por |.
const concat = (...args) => {
    return  args.join("|");
}
console.log("concat: ", concat("Maria", "Ana", "Casa"));

// Implementa una función llamada multArray que admita un array de números (arr) y otro parámetro que sea un número (x) y 
// devuelva un nuevo array donde cada elemento ha sido multiplicado por x.
const multArray = (numbers, x) =>{
    return numbers.map(y => y*x);
}
console.log("multArray: ", multArray([1,2,3], 2));
console.log("multArray: ", multArray([1,2,3,4,5], 5));

//Implementa una función llamada calcMult que admita múltiples números como argumento y 
// devuelva como resultado el producto de todos ellos
const calcMult = (...numbers) =>{
    return numbers.length>0 ? numbers.reduce((acc,num) => acc*num) : null;
}
console.log("calcMult: ", calcMult(1,2,3,4,5));
console.log("calcMult: ", calcMult());

//Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer elemento 
// ha sido intercambiado por el segundo.
const swapFirstSecond =(elements) => {
    const [first, second, ...elementsChanged] = elements;    
    return [second, first, ...elementsChanged];
}
console.log("swapFirstSecond:", swapFirstSecond([1, 2, 3, 4]));

// Implementa una función firstEqual tal que admita multiples strings como argumento de entrada así como un carácter cualquiera,
// y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.
const firstEqual= (character, ...words) =>{
    return words.every(([first]) => first ===character);
}
console.log("firstEqual: ", firstEqual("M","Maria","Manuela"));
console.log("firstEqual: ", firstEqual("M","Maria","Ana"));
