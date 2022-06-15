import axios from 'axios';
import url from './URL';

async function registerUser({email, password, username}) {
    const response = await axios.post(`${url}/api/auth/local/register`, {
        username, email, password
    }).catch(error => console.log(error));

    if (response) {

    }

    return response;
}

export default registerUser;