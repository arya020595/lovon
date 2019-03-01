import React, { Component } from 'react';
import { Text, TouchableOpacity } from "react-native";
import { Container, Header, Content, Input, Item, Form, Footer, Card, CardItem, Body, Label, H2, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from "react-native-easy-grid";
import axios from 'axios';

var s = require("../Assets/Style")

export default class Profile_screen extends Component {

    static navigationOptions = {
        title: 'My Account',
    };

    async componentDidMount() {
        await axios.get(`http://192.168.43.108:3333/api/v1/users/1`)
            .then(res => {
                const users = res;
                alert(JSON.stringify(users.data))
                // this.setState({ items: items.data });
            })
    }

    render() {
        return (
            <Container style={{backgroundColor:"#DDD"}}>
                <Content>
                    <Grid>
                        <Col><H2 style={{ padding: 10, color: "#011b1d", marginTop: 10, }}>Edit Profile</H2></Col>
                        <Col style={{ alignContent: "flex-end" }}><Text style={{ padding: 10, color: "#011b1d", marginTop: 10, textAlign:"right" }}>Sign Out</Text></Col>
                    </Grid>
                    <Card>         
                        <Form>
                            <Item stackedLabel>
                                <Label>Username</Label>
                                <Input disabled  defaultValue="arya020595" />
                            </Item>
                            <Item stackedLabel>
                                <Label>Email</Label>
                                <Input disabled  defaultValue="aryarifqipratama@gmail.com" />
                            </Item>
                            <Item stackedLabel>
                                <Label>Password</Label>
                                <Input secureTextEntry defaultValue="arya020595" />
                            </Item>
                            <Item stackedLabel last>
                                <Label>Confirm Password</Label>
                                <Input secureTextEntry defaultValue="arya020595" />
                            </Item>
                            <Item stackedLabel>
                                <Label>Full Name</Label>
                                <Input defaultValue="Arya Rifqi Pratama" />
                            </Item>
                            <Item stackedLabel>
                                <Label>No Whatsapp</Label>
                                <Input defaultValue="0852-3089-4687" />
                            </Item>
                            <Item stackedLabel last>
                                <Label>Upload Image</Label>
                            </Item>
                            <TouchableOpacity>
                                <Footer style={{ alignItems: "center", backgroundColor: "#2b7873" }}><Icon name="save" size={13} color="white" /><Text style={{ fontWeight: "bold", color: "white" }} onPress={() => {
                                    { this.props.navigation.navigate('Register') }
                                }}> SAVE</Text>
                                </Footer>
                            </TouchableOpacity>
                        </Form>
                    </Card>
                </Content>
            </Container>
        );
    }
}