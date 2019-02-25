import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Alert, FlatList, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Segment, Content, Text, Card, CardItem, Thumbnail, List, ListItem, Fab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from "react-native-easy-grid";
import customData from '../Faker/db';

export default class Home_screen extends Component {

    static navigationOptions = {
        title: 'LOVON',
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#ff3c0e'
        },
    };

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
                <Segment style={{ backgroundColor: "transparent", marginTop: 20,}}>
                    <Button style={{ backgroundColor: "#FF5A09" }} active={this.state.firstpageactive}
                        onPress={this.firstpage}><Text>Lost</Text></Button>
                    <Button style={{ backgroundColor: "#FF5A09" }} active={this.state.secondpageactive}
                        onPress={this.secondpage}><Text>Found</Text></Button>
                    <Button style={{ backgroundColor: "#FF5A09" }} active={this.state.thirdpageactive}
                        onPress={this.thirdpage}><Text>Returned</Text></Button>
                </Segment>
                <Content padder>
                    <Text>{shows}</Text>
                    <Grid>
                        <FlatList
                            data={this.state.data}
                            renderItem={({ item }) => (
                                <Col>
                                    <Card>
                                        <TouchableOpacity>
                                        <CardItem cardBody>
                                            <Image
                                                source={{
                                                    uri: item.image_item
                                                }}
                                                style={{
                                                    flex: 1, height: 150, width: null
                                                }}
                                            />
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
                                        <CardItem style={{height:50}}>
                                            <Text numberOfLines={2}>
                                                {item.location_item}
                                            </Text>
                                        </CardItem>
                                        <CardItem>
                                            <Button style={{ height: 30, marginTop: 15, backgroundColor: '#FF5A09', width: "100%"}}>
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
                </Content>
                <Fab
                    active={!this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#34A34F' }}
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
// firstpage() {
//    alert ("hello")
//  }

