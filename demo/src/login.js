//code to login to the app
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    async onLogin() {
        const { username, password } = this.state;
        try {
            // here place your signup logic
            //alert('username: ' + username + ' password: ' + password);
            await AsyncStorage
                .setItem('username', username);
        } catch (error) {
            console.log("Error saving data" + error);
        }
        Actions.home();
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/logo.png')} style={styles.logo} />
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Username'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={this.onLogin.bind(this)}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}