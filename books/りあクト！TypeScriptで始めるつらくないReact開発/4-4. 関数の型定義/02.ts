// ReturnType


const aloha = () => "Aloha!";
type Greeting = ReturnType<typeof aloha>;
const chao = (): Greeting => "Chao!";
console.log(chao());
