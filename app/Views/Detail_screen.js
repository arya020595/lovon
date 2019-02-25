// IMPORT COMPONENT
import React, { Component } from 'react';
import { Image, StyleSheet, View } from "react-native";
import { Container, Content, Card, CardItem, Text, Button, Body,  Fab, List, ListItem, Left, Thumbnail, H3 } from 'native-base';
import { Col, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/FontAwesome';

import customData from '../Faker/db';

export default class Detail_screen extends Component {

    static navigationOptions = {
        title: 'Little Kitten',
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#ff3c0e'
        },
    };

    constructor(props) {
        super(props)
        this.state = {
            active: 'true'
        };
    }

    render() {
        return (
            <Container style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: "#DDD" }}>
                <Content>
                    <Card>
                        <CardItem cardBody>
                            <Image source={{ uri: 'http://dummyimage.com/189x198.bmp/ff4444/ffffff'}} style={{ height: 250, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem style={{ flex: 1, flexDirection: 'row', flexWrap: "wrap", borderBottomColor: "#CCC", borderBottomWidth: 1, color:"#D14836"}}>
                        <View>
                            <Icon
                                size={30}
                                name="ban"
                                color="#D14836"
                                onPress={this.loginWithFacebook}>
                            </Icon>
                        </View>
                        <View>
                            <H3 style={{ marginLeft: 10, color: "#D14836" }}>LOST</H3>
                        </View>
                        <View style={{ flex:1, alignContent: "flex-end" }}>
                            <Text note style={{textAlign:"right"}}>2 Jan 2019</Text>
                        </View>
                        </CardItem>
                        <CardItem style={{ flex: 1, flexDirection: 'row', flexWrap:"wrap", borderBottomColor: "#CCC", borderBottomWidth: 1, }}>
                            <View>
                                <Thumbnail source={{ uri: 'http://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg' }} />
                            </View>
                            <View style={{marginLeft: 10, width:"60%"}}>
                                <Text style={{ fontWeight:"400"}}>Kumar Pratik</Text>
                                <Text note>Posted in Jln Tengger Kandangan Surabaya</Text>
                            </View>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={{ fontWeight: "400" }}>Little Kitten</Text>
                                <Text note>Duis mattis egestas metus. Aenean fermentum. egestas metus. Aenean fermentum. Aenean fermentum. Aenean fermentum.</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{flex: 1}}>
                            <Button style={{ backgroundColor: '#FF5A09', marginRight: 5, flex:1, textAlign: "center", alignContent: "center", justifyContent: "center" }}>
                                <Text> Contact Finder </Text>
                            </Button>
                        </CardItem>
                    </Card>
                </Content>
                {/* Fab */}
                <Fab
                    active={!this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="share-alt" />
                    <Button style={{ backgroundColor: '#34A34F' }}>
                        <Icon style={{ color: "white" }} name="whatsapp" />
                    </Button>
                    <Button style={{ backgroundColor: '#3B5998' }}>
                        <Icon style={{color:"white"}} name="facebook" />
                    </Button>
                    <Button disabled style={{ backgroundColor: '#DD5144' }}>
                        <Icon style={{ color: "white" }} name="envelope" />
                    </Button>
                </Fab>
            </Container>
        );
    }
}