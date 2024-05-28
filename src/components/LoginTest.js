import React, { Component } from 'react';
class LoginTest extends Component {
    submitHandler = () => {
        alert('Success')
    }
    render() {
        return (
            <div>
                <form>
                    <label>UserName</label>
                    <input type="text"></input>
                    <label>Password</label>
                    <input type="password"></input>
                    <button type="submit" onClick={this.submitHandler}>Submit</button>
                </form>
            </div>
        )
    }
}

export default LoginTest