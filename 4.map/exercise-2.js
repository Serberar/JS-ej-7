const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];
const newName= users.map(usuario => {
    if (usuario.name[0]==="A") {
        return usuario.name="Anacleto"
    }
    else{
        return usuario.name
    }
})
console.log(newName);