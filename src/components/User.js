import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {}
        }
    }

    componentDidMount = async () => {
        this.fetchUserData();
    }

    fetchUserData = async () => {
        const data = await fetch("https://api.github.com/users/Gaushi1999");
        const json = await data.json();

        this.setState({
            userInfo: json
        });
    }

    render() {
        
        const { name, location, avatar_url } = this.state.userInfo;

        return(
            <div className='text-center'>
                <img src={avatar_url} className='w-56 h-56 mx-auto m-2 rounded-full'/>
                <h1>Hey i'm {name}</h1>
                <h2>Country: {location}</h2>
                <h3><i>Sorry but i'm Software engineer so can't send you food right now, but i can cook for you guys</i></h3>
            </div>
        );
    }

}

export default User;