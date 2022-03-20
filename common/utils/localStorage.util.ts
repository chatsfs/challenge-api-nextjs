export function getItemStorage(key:string){
    return localStorage.getItem(key);
}

export function setItemStorage(key:string,value:string){
    localStorage.setItem(key,value)
}