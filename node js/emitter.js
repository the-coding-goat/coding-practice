

const EventEmitter = require("events");

let eventEmitter = new EventEmitter();

eventEmitter.on("tutorial",()=>{
    console.log("this event has been emitted");

})
eventEmitter.emit("tutorial");

class Person extends EventEmitter {
    constructor(name, age){
        super();
        this._name = name;
        this._age = age;

        this.math = function(a,b){
            return a+b;
        }
    }

    get name(){
      return {name: this._name,
        age: this._age};
    }


} 

let person = new Person("pedro",67);

person.on("name",()=>{
    console.log("my name is" + person.name["name"] + " and i am" + person.name["age"])
})

person.emit("name");


/* 
⚡ TOPIC 3: EventEmitter
🧠 Classwork 1 – Basic Event

Create an EventEmitter that emits a "greet" event.
When the event is triggered, log "Hello from EventEmitter!".

🧠 Classwork 2 – Multiple Listeners

Create an EventEmitter with an event "dataReceived".
Add two listeners:

One that logs "Data received successfully!"

Another that logs "Processing data..."
Emit the event and watch both listeners run.

🧠 Classwork 3 – Custom Logic

Emit an event "orderPlaced" with a message like "Order #123 confirmed".
Make a listener that receives the message and logs it with a timestamp.
 */
