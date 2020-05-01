class Github {
    constructor(){
        this.client_id = 'bdbd3a656351953d3754';
        this.client_secret = '801f874a369801fd083ebe05688224d51df636b4';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?
        client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}

export default Github;