import {jwtDecode} from "jwt-decode";

function getUsername(token){
    const decoded = jwtDecode(token);
    console.log(decoded);
    return decoded.sub;
}
export default getUsername;