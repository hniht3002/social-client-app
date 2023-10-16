var tokenAuth:string  = " "

export const setToken = (token:string)=>{
    tokenAuth = token
}

export const getToken = ()=>{
    return tokenAuth;
}