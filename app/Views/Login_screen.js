import React, { Component } from 'react';
import { Text, View, Image } from "react-native";
import { Container, Form, Item, Input, Button, Footer, Root, Toast } from 'native-base';

import axios from 'axios';
var s = require('../Assets/Style');

export default class Login_screen extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'transparent'
        },
    };

    state = {
        email: null,
        password: null,
        users: null
    }

    async componentDidMount() {
        await axios.get(`http://192.168.43.108:3333/api/v1/users/`)
            .then(res => {
                const users = res;
                // alert(JSON.stringify(users.data))
                this.setState({ users: users.data });
            })
    }

    handleSubmit = async () => {

        // const inventory = [
        //     { name: 'apples', quantity: 2 },
        //     { name: 'bananas', quantity: 0 },
        //     { name: 'cherries', quantity: 5 }
        // ];

        const Users = {
            email: this.state.email,
            password: this.state.password,
        };

        // const result = this.state.users.find(cari => cari.email == this.state.email && cari.password == this.state.password);

        if (this.state.password == null || this.state.email == null) {
            Toast.show({
                text: 'Please fill all your form',
                duration: 2000,
                type: "danger",
            })
        }
        else {
            // console.warn(Users)
            await axios.post('http://192.168.43.108:3333/api/v1/users/login', Users)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    this.props.navigation.navigate('Home')
                }).catch(() => {
                    Toast.show({
                        text: 'Your email and password is not correct',
                        duration: 2000,
                        type: "danger"
                    })
                })
        }
        // Tadi kesalahannya karena properti yang ada di form berbeda dengan properti yang ada di database
    }

    render() {
        // console.warn(JSON.stringify(this.state.users))
        return (
            <Root>
                <Container>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', flexDirection: 'column', }}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../Assets/image/carikan1.png')}
                        />
                        <Form style={{ padding: 15, width: "100%" }}>
                            <Item style={{ backgroundColor: "#EEE", marginBottom: 5 }} regular>
                                <Input placeholder="Email" onChangeText={mail => (this.setState({ email: mail }))} />
                            </Item>
                            <Item style={{ backgroundColor: "#EEE" }} regular>
                                <Input secureTextEntry={true} placeholder="Password" onChangeText={pass => (this.setState({ password: pass }))} />
                            </Item>
                            <Item regular>
                                <Button onPress={() => { this.handleSubmit() }} style={s.buttonCustom}><Text style={{ fontSize: 20, color: "white", fontWeight: "bold", textAlign: "center" }}>Sign In</Text></Button>
                            </Item>
                            <Item style={{ justifyContent: "center", marginTop: 20, borderBottomWidth: 0, }}>
                                <Text style={{ textAlign: "center" }}>Forgot your password ?</Text>
                            </Item>
                        </Form>
                    </View>
                    <Footer style={{ alignItems: "center", backgroundColor: "transparent" }}><Text>Don't have an account ?</Text><Text style={{ fontWeight: "bold" }} onPress={() => {
                        { this.props.navigation.navigate('Register') }
                    }}> Sign up</Text></Footer>
                </Container>
            </Root>
        );
    }
}