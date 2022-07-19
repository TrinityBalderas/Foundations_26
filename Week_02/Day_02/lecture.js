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

const pokeStats = obj => {
    const { name, types: typesArr ,moves: movesArr } = obj
    let strengthsArr = new Set([])
    let weaknessesArr = new Set([])
    for(let i = 0; i < typesArr.length; i++){
        let { strengths, weaknesses } = typesArr[i]
        for(let j = 0; j < strengths.length; j++){
            strengthsArr.add(strengths[j])
        }
        for(let j = 0; j < weaknesses.length; j++){
            weaknessesArr.add(weaknesses[j])
        }
    }
    strengthsArr = [...strengthsArr]
    weaknessesArr = [...weaknessesArr]
    let strengthsStr = `${name} is strong against `
    let weaknessesStr = `${name} is weak against `
    let movesStr = `${name}'s moves are `

    for(let i = 0; i < strengthsArr.length; i++){
        if(i < strengthsArr.length - 1){
            strengthsStr += `${strengthsArr[i].toLowerCase()}, `
        } else {
            strengthsStr += `and ${strengthsArr[i].toLowerCase()} types.`
        }
    }

    for(let i = 0; i < weaknessesArr.length; i++){
        if(i < weaknessesArr.length - 1){
            weaknessesStr += `${weaknessesArr[i].toLowerCase()}, `
        } else {
            weaknessesStr += `and ${weaknessesArr[i].toLowerCase()} types.`
        }
    }

    for(let i = 0; i < movesArr.length; i++){
        let { name: moveName } = movesArr[i]
        moveName = moveName.toLowerCase()
        if(i < movesArr.length - 1){
            movesStr += `${moveName}, `
        } else {
            movesStr += `and ${moveName}.`
        }
    }

    return strengthsStr + ' ' + weaknessesStr + ' ' + movesStr
}

console.log(pokeStats(pikachu))