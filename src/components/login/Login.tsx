import React, { Component } from 'react';
import { Button, Checkbox, Form, Card, Header, Label } from 'semantic-ui-react';

import './Login.css';
import { Redirect } from 'react-router';
import { RouterPathEnum } from 'enums/RouterPathEnums';

interface ProfileProps {

}

interface ProfileState {

};

export default class Login extends Component<ProfileProps, ProfileState> {

    forgotPassword = () => {
        console.log('forgot');
    }

    login = () => {
        console.log('login');
        return <Redirect to={RouterPathEnum.HOME} push={true} />
    }

    render() {
        return (
            <div className='box'>
                <Header as='h2'>S H I F T H A C K E R</Header>
                <Card.Group>
                    <Card className='card'>
                        <Card.Content>
                            <Form>
                                <Form.Field>
                                    {/* <label>Phone</label> */}
                                    <input placeholder='Phone' />
                                </Form.Field>
                                <Form.Field>
                                    {/* <label>Password</label> */}
                                    <input placeholder='Password' />
                                    {/* <Label basic color='red' pointing='left'>
                                That name is taken!
                            </Label> */}
                                </Form.Field>
                                <Form.Field>
                                    <p className='forgot'
                                        onClick={this.forgotPassword}>Forgot your password?</p>
                                </Form.Field>
                                <Button
                                    type='submit'
                                    color='green'
                                    fluid
                                    onClick={this.login}>LOGIN</Button>
                                    <Form.Field>
                                    <p className='sign-up'
                                        onClick={this.forgotPassword}>First time here? <b>Sign up!</b></p>
                                </Form.Field>
                            </Form>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        )
    }
}