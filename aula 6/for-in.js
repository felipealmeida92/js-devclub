const user = {
    name: 'Rodolfo', 
    age: 33,
    street: 'Rua dos Bobos'
}

for(let key in user){
    console.log(`${key}: ${user[key]}`)
}