import {getToken} from '@/services/handleToken'
let registered:boolean = false;
if(getToken.length !==0){
    registered =true
}
else {
    registered = false;
}
export {registered}