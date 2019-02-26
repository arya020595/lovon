import React, { Component } from 'react';
import { Text, View, Image } from "react-native";
import { Container, Form, Item, Input, Button, Footer, Toast, Root } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

var s = require('../Assets/Style');

export default class Register_screen extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'transparent'
        },
    };

    state = {
        username: null,
        email: null,
        password: null,
        repassword: null,
    }

    handleSubmit = async () => {

        const Users = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        };

        if (this.state.password != this.state.repassword) {
            Toast.show({
                text: 'Password and confirm Password is not match !',
                duration: 2000,
                type: "danger",
            })
        } else if(this.state.username == null || this.state.email == null || this.state.password == null || this.state.repassword == null) {
            Toast.show({
                text: 'Please fill all your form',
                duration: 2000,
                type: "danger",
            })
        } else {
            // alert(JSON.stringify(Users))
           await axios.post('http://192.168.43.108:3333/api/v1/users/', Users)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    Toast.show({
                        text: 'Sign Up Success',
                        duration: 2000,
                        type: "success"
                    })
                }).catch((error) => {
                    alert(error)
                })
        }

        // Tadi kesalahannya karena properti yang ada di form berbeda dengan properti yang ada di database
    }


    render() {
        return (
            <Root>
                <Container>
                    {/* {console.warn(this.props.Users.data)} */}
                    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', flexDirection: 'column', }}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../Assets/image/carikan1.png')}
                        />
                        <Form style={{ padding: 15, width: "100%" }}>
                            <Item style={{ backgroundColor: "#EEE", marginBottom: 5 }} regular>
                                <Input placeholder="Username" onChangeText={name => (this.setState({ username: name }))} />
                            </Item>
                            <Item style={{ backgroundColor: "#EEE", marginBottom: 5 }} regular>
                                <Input placeholder="Email" onChangeText={mail => (this.setState({ email: mail }))} />
                            </Item>
                            <Item style={{ backgroundColor: "#EEE", marginBottom: 5 }} regular>
                                <Input placeholder="Password" onChangeText={pass => (this.setState({ password: pass }))} />
                            </Item>
                            <Item style={{ backgroundColor: "#EEE" }} regular>
                                <Input placeholder="Confirm Password" onChangeText={repass => (this.setState({ repassword: repass }))} />
                            </Item>
                            <Item regular>
                                <Button style={s.buttonCustom} onPress={() => { this.handleSubmit() }}><Text style={{ fontSize: 20, color: "white", fontWeight: "bold", textAlign: "center" }}>Sign Up</Text></Button>
                            </Item>
                            <Item style={{ justifyContent: "center", marginTop: 20, borderBottomWidth: 0, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, }} regular>
                                <Text style={{ textAlign: "center" }}>Fast sign up with your favorite social profile</Text>
                            </Item>
                            <Item style={{ justifyContent: "center", marginTop: 20, borderBottomWidth: 0, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0 }} regular>
                                <Icon.Button
                                    name="facebook"
                                    backgroundColor="#3b5998"
                                    onPress={this.loginWithFacebook}
                                >
                                    Login with Facebook
                             </Icon.Button>
                            </Item>
                        </Form>
                    </View>
                    <Footer regular style={{ alignItems: "center", backgroundColor: "transparent" }}><Text>Already have an account ?</Text><Text style={{ fontWeight: "bold" }} onPress={() => { this.props.navigation.navigate('Login') }}> Sign In</Text></Footer>
                </Container>
            </Root>
        );
    }
}

