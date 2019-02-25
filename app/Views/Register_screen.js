import React, { Component } from 'react';
import { Text, View, Image } from "react-native";
import { Container, Form, Item, Input, Button, Footer } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Register_screen extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'transparent'
        },
    };

    render() {
        return (
            <Container>
            {/* {console.warn(this.props.Users.data)} */}
                <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', flexDirection: 'column', }}>
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../Assets/image/carikan1.png')}
                    />
                    <Form style={{ padding: 15, width: "100%" }}>
                        <Item style={{ backgroundColor: "#EEE", marginBottom: 5 }} regular>
                            <Input placeholder="Username" />
                        </Item>
                        <Item style={{ backgroundColor: "#EEE", marginBottom: 5  }} regular>
                            <Input placeholder="Password" />
                        </Item>
                        <Item style={{ backgroundColor: "#EEE" }} regular>
                            <Input placeholder="Confirm Password" />
                        </Item>
                        <Item regular>
                            <Button style={{ flex: 1, marginTop: 20, backgroundColor: "#FF5A09", alignItems: 'center', alignContent: 'center', justifyContent: "center" }}><Text style={{ fontSize: 20, color: "white", fontWeight: "bold", textAlign: "center" }}>Sign Up</Text></Button>
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
        );
    }
}

