import React, { Component } from 'react';
import { Text, View, Image, AsyncStorage } from "react-native";
import { Container, Form, Item, Input, Button, Footer, Root, Toast } from 'native-base';

import axios from 'axios';
var s = require('../Assets/Style');

export default class Login_screen extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'transparent'
        },
    };

    constructor(props) {
        super(props)
        this.state = {
            email: null,
            password: null,
            users: null,
            token: null,
            data: null
        }
        // if (this.state.token != null) {
        //     this.props.navigation.navigate('Home')
        // }
    }

    async handleSubmit() {

        const Users = {
            email: this.state.email,
            password: this.state.password,
        };

        await axios.post('http://192.168.43.108:3333/api/v1/users/login', Users)
            .then(res => {
                // console.warn(res.data)
                this.setState({data: res.data})
                // AsyncStorage.setItem('token', String(this.state.token))
                // this.props.navigation.navigate('Home')
                console.warn(this.state.data.access_token.token)
            }).catch((error) => {
                alert(error)
            })
        // console.warn(this.state.token)
    }

    // async cekToken(){
    //     const A = await AsyncStorage.getItem('token')
    //     alert(A)
    // }

    // async hapusToken() {
    //     const A = await AsyncStorage.removeItem('token')
    //     alert(A)
    // }

    render() {
        console.warn(this.state.token)
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
                    <Text onPress={()=>{this.cekToken()}}>Cek token</Text>
                    <Text onPress={() => { this.hapusToken() }}>Hapus token</Text>
                    <Footer style={{ alignItems: "center", backgroundColor: "transparent" }}><Text>Don't have an account ?</Text><Text style={{ fontWeight: "bold" }} onPress={() => {
                        { this.props.navigation.navigate('Register') }
                    }}> Sign up</Text></Footer>
                </Container>
            </Root>
        );
    }
}