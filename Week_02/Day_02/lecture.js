let pikachu = {
    name: 'Pikachu',
    types: [
        {
        name: 'Electric',
        weaknesses: ['Ground','Grass','Electric','Dragon'],
        strengths: ['Flying','Water']
        }
    ],
    evolutionChain: {
        count: 3,
        names: {
            baby: 'Pichu',
            teen: 'Pikachu',
            adult: 'Raichu'
        }
    },
    generation: 'Generation I',
    canEvolve: true,
    evolutionRequirements: "Thunder Stone",
    moves: [
        {
            name: "Thundershock",
            type: "Electric",
            damageType: "Special"
        },
        {
            name: "Dig",
            type: "Ground",
            damageType: "Physical"
        },
        {
            name: "Thunder Wave",
            type: "Electric",
            damageType: "Status"
        },
        {
            name: "Brick Break",
            type: "Fighting",
            damageType: "Physical"
        }
    ]
}

// console.log(
//     `My ${pikachu.name} is the best Pokemon in the world\nIt is an ${pikachu['types'][0]['name']} type Pokemon, which means that it is weak to ${pikachu['types'][0]['weaknesses'][0]} types, and strong against ${pikachu['types'][0]['strengths'][0]} types.\nIts adult evolved form is ${pikachu['evolutionChain']['names']['adult']}. It needs a ${pikachu['evolutionRequirements']} to evolve into ${pikachu['evolutionChain']['names']['adult']}, and it evolves from ${pikachu['evolutionChain']['names']['baby']}!\nMy ${pikachu.name} knows many moves, and even though ${pikachu.name} is an ${pikachu['types'][0]['name']} type, not all of its moves are that type.\nFor example, my ${pikachu.name} knows ${pikachu['moves'][1]['name']} which is a ${pikachu['moves'][1]['type']} type move, and does ${pikachu['moves'][1]['damageType']} damage.`
// )


//Write a function that creates a grammatically correct sentence, spelling out all of Pikachu's weaknesses, strengths, and moves (Their names, types, and damage types) and logs it to the console.