const login = (data) => {
    if(data.name){
        return{
            name: data.name.length
        }
    }else{
        return{
            error:"sin nombre"
        }
    }
    
}

const register = () => {
    return{status:"registered"}
}


export  {login,register};
