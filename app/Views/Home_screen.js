import React, { Component } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Left, Body, Right, H3 } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/FontAwesome';

var s = require('../Assets/Style');

export default class ItemList_screen extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <Grid style={{ padding: 5 }}>  
                            <Row style={{ padding: 5 }}>
                                <Col size={40}>
                                    <ImageBackground
                                        source={{ uri: 'https://www.verlorenofgevonden.nl/webviewer/images/gv0748-01/Foto/G0748-2019000137.jpg' }}
                                        style={{
                                            flex: 1,
                                            height: 150,
                                            position: 'relative', // because it's parent
                                        }}>
                                    </ImageBackground>
                                </Col>
                                <Col size={60} style={{ padding: 10 }}>
                                    <Text style={ s.titleCustom }>Please found my key :(</Text>
                                    <Text style={{ marginTop: 5, }}>4296 Everett Plaza</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 5, }}>
                                        <Icon
                                            size={30}
                                            name="ban"
                                            color="#D14836"
                                            onPress={this.loginWithFacebook}>
                                        </Icon><Text style={{ marginLeft: 10, color: "#D14836" }}>LOST</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5, backgroundColor: "#6fb98f" }}><Icon
                                        size={20}
                                        name="info-circle"
                                        color="white"
                                        onPress={this.loginWithFacebook}>
                                    </Icon><Text style={{ textAlign: "center", fontWeight: "bold", color: "white", marginLeft: 10, }}>Report Returned</Text></View>
                                </Col>
                            </Row>
                        </Grid>
                    </Card>
                </Content>
            </Container>
        );
    }
}