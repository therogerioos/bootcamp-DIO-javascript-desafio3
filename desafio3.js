class Hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let poder = this.verificarPoder()
        console.log(`o ${this.tipo} atacou usando ${poder}`)
    }

    verificarPoder(){
        switch(this.tipo){
            case "guerreiro":
                return "espada"
            case "mago":
                return "magia"
            case "monge":
                return "artes marciais"
            case "ninja":
                return "shuriken"  
        }
    }
}

let hero1 = new Hero('Mabinbu', 100, 'guerreiro')
let hero2 = new Hero('Michelangelo', 200, 'ninja')
let hero3 = new Hero('Merlin', 1000, 'mago')
let hero4 = new Hero('Chales', 100, 'monge')

hero1.atacar()
hero2.atacar()
hero3.atacar()
hero4.atacar()