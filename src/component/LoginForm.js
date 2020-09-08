import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: 'Authenticated failed!' });
                    });
            });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <Input
                            placeholder="user@gmail.com"
                            label="Email"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </CardSection>

                    <CardSection >
                        <Input
                            placeholder="password"
                            label="Password"
                            value={this.setState.password}
                            onChangeText={password => this.setState({ password })}
                            secureTextEntry={true}
                        />
                    </CardSection>

                    <Text style={styles.errorStyle}>
                        {this.state.error}
                    </Text>

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 18,
        color: 'red',
        alignSelf: 'center'
    }
};

export default LoginForm;