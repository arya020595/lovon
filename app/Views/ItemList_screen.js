import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Alert, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Segment, Content, Text, Card, CardItem, Thumbnail, List, ListItem, Fab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from "react-native-easy-grid";
import customData from '../Faker/db';

var s = require("../Assets/Style")

export default class itemList_screen extends Component {

    constructor(props) {
        super(props);
        this.firstpage = this.firstpage.bind(this);
        this.secondpage = this.secondpage.bind(this);
        this.thirdpage = this.thirdpage.bind(this);
        this.state = {
            page: 1,
            firstpageactive: true,
            secondpageactive: false,
            thirdpageactive: false,
            data: customData,

            active: 'true'
        };
    }

    render() {

        const page = this.state.page;
        let shows = null;
        if (page == 1) {
            shows = <Text>hello</Text>
        } else if (page == 2) {
            shows = <Text> hello page 2 </Text>
        } else if (page == 3) {
            shows = <Text> hello page 3 </Text>
        }

        return (
            <Container>
                <Segment style={{ backgroundColor: "transparent"}}>
                    <Button style={{ backgroundColor: "#004445" }} active={this.state.firstpageactive}
                        onPress={this.firstpage}><Text>Lost</Text></Button>
                    <Button style={{ backgroundColor: "#004445" }} active={this.state.secondpageactive}
                        onPress={this.secondpage}><Text>Found</Text></Button>
                    <Button style={{ backgroundColor: "#004445" }} active={this.state.thirdpageactive}
                        onPress={this.thirdpage}><Text>Returned</Text></Button>
                </Segment>

                {/* <Text>{shows}</Text> */}
                <Grid>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <Col>
                                <Card>
                                    <TouchableOpacity>
                                        <CardItem cardBody>
                                            <ImageBackground
                                                source={{ uri: item.image_item }}
                                                style={{
                                                    flex: 1,
                                                    height: 200,
                                                    position: 'relative', // because it's parent
                                                }}>
                                                <Text
                                                    style={{
                                                        fontWeight: 'bold',
                                                        color: 'white',
                                                        position: 'absolute', // child
                                                        top: 7, // position where you want
                                                        right: 7,
                                                        padding: 7,
                                                        fontSize: 12,
                                                        zIndex: 2,
                                                        width: 70,
                                                        textAlign: "center",
                                                        backgroundColor: "#2b7873"
                                                    }}>{item.status_item}</Text>
                                            </ImageBackground>
                                        </CardItem>
                                    </TouchableOpacity>
                                    <CardItem>
                                        <Body>
                                            <Text style={{ fontWeight: "bold" }} numberOfLines={1}>
                                                {item.name_item}
                                            </Text>
                                            <Text style={{ color: "#CCC" }}>
                                                {item.date_item}
                                            </Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem style={{ height: 50 }}>
                                        <Text numberOfLines={2}>
                                            {item.location_item}
                                        </Text>
                                    </CardItem>
                                    <CardItem>
                                        <Button style={s.buttonCustomSmall}>
                                            <Text style={{ fontWeight: "bold", fontSize: 8, }}>Claim</Text>
                                        </Button>
                                    </CardItem>
                                </Card>
                            </Col>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        refreshing={false}
                        onRefresh={this.state.data}
                        numColumns={2}
                    />
                </Grid>

                <Fab
                    active={!this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#014344' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="plus" />
                    <Button style={{ backgroundColor: '#D14836' }}>
                        <Icon style={{ color: "white" }} name="ban" />
                    </Button>
                    <Button style={{ backgroundColor: '#3B5998' }}>
                        <Icon style={{ color: "white" }} name="search" />
                    </Button>
                </Fab>
            </Container>
        );
    }
    firstpage() {
        this.setState({
            page: 1,
            firstpageactive: true,
            secondpageactive: false,
            thirdpageactive: false,
        })
    }

    secondpage() {
        this.setState({
            page: 2,
            firstpageactive: false,
            secondpageactive: true,
            thirdpageactive: false,
        })
    }

    thirdpage() {
        this.setState({
            page: 3,
            firstpageactive: false,
            secondpageactive: false,
            thirdpageactive: true,
        })
    }



}

