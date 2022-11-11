export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }
    //get jwt token
    fetch('https://dentistbhai-server-ehsan-info.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('dentistBhai-token', data.token);

        })
        .catch(err => console.log(err));
}