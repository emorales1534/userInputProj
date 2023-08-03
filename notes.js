// class Book {
//     constructor(title, series, author) {
//         this.title = title;
//         this.series = series;
//         this.author = author;

//         Book.numBooks +=  1
//     }
    
//     static numBooks = 0;


//     getInformation() {
//         return `${this.title} by ${this.author}`;
//     }
//     static getTitles(...Books){
//         if((typeof Books) !== Array){
//             console.log("GetTitles only accepts arrays")
//         };
//         for(let i = 0; i < Books.length; i++){
//             if((Books[i] instanceof Book) == false){
//                 console.log("input must be an instace of Book")
//             }
//         }
//         return Books.map((book) => book.title);
//     } 
    
// }


// const fellowshipOfTheRing = new Book(
//     'The Fellowship of the Ring',
//     'The Lord of the Rings',
//     'J.R.R. Tolkein');

//     // console.log(fellowshipOfTheRing instanceof Book);

// const theTwoTowers = new Book (
//     'The Two Towers',
//     'The Lored of the Rings',
//     'J.R.R. Tolkein');
// const bookTitles = Book.getTitles(fellowshipOfTheRing, theTwoTowers)
// // console.log(Book.getTitles([]))

//     console.log(bookTitles.join(", "))

//     console.log(Book.numBooks)

//     // const list = new Array(1, 5, 9, 11, -3);
//     // console.log(list.sort());
//     // console.log(list.sort((a, b) => a - b))

class MyClass {}

// another MyClass

class AnotherMyClass extends Object {};

class MyChildCLass extends MyClass {};

class Animal {
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }

    speak(){
        console.log(this.sound)
    }

    static pet(animal) {
        console.log(`You attempted to pet ${animal.name}`);
    }
}

class Dog extends Animal {

}

const fluffy = new Dog('Fluffy', 'woof');
fluffy.speak();
Dog.pet(fluffy)