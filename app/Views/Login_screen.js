import React, { Component } from 'react';
import { Text, View, Image } from "react-native";
import { Container, Form, Item, Input, Button, Footer } from 'native-base';

export default class Login_screen extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'transparent'
        },
    };

    render() {
        return (
            <Container>
                <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', flexDirection: 'column', }}>
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../Assets/image/carikan1.png')}
                    />
                    <Form style={{ padding: 15, width: "100%" }}>
                        <Item style={{ backgroundColor: "#EEE", marginBottom: 5 }} regular>
                            <Input placeholder="Username" />
                        </Item>
                        <Item style={{ backgroundColor: "#EEE" }} regular>
                            <Input secureTextEntry={true} placeholder="Password" />
                        </Item>
                        <Item regular>
                            <Button onPress={() => {
                                { this.props.navigation.navigate('Home') }
                            }} style={{ flex: 1, marginTop: 20, backgroundColor: "#FF5A09", alignItems: 'center', alignContent: 'center', justifyContent: "center" }}><Text style={{ fontSize: 20, color: "white", fontWeight: "bold", textAlign: "center" }}>Sign In</Text></Button>
                        </Item>
                        <Item style={{ justifyContent: "center", marginTop: 20, borderBottomWidth: 0, }}>
                            <Text style={{ textAlign: "center" }}>Forgot your password ?</Text>
                        </Item>
                    </Form>
                </View>
                <Footer style={{ alignItems: "center", backgroundColor: "transparent" }}><Text>Don't have an account ?</Text><Text style={{ fontWeight: "bold" }} onPress={()=> {
                    { this.props.navigation.navigate('Register') }
                }}> Sign up</Text></Footer>
            </Container>
        );
    }
}