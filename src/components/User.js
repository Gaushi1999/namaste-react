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
            <div className='user-section'>
                <img src={avatar_url} />
                <h1>Hey i'm {name}</h1>
                <h2>Country: {location}</h2>
                <h3>Full Stack developer </h3>
                <p>Managing the multiple thinngs simoustanesouly i'm the only one here currently</p>
            </div>
        );
    }

}

export default User;