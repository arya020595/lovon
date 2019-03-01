import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Alert, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Segment, Content, Text, Card, CardItem, Thumbnail, List, ListItem, Fab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from "react-native-easy-grid";

import { connect } from 'react-redux';
import { getItems } from '../Redux/Actions/Items';

import Moment from 'moment';

var s = require("../Assets/Style")

class itemList_screen extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Ini menjalankan action atau fungsi
        this.getDataItems();
    }

    getDataItems = () => {
        // Didapat dari import products dari folder action
        this.props.dispatch(getItems());
    }

    render() {
        return (
            <Container>
                <Grid>
                    {/* {console.warn(this.props.Items.data)} */}
                    <FlatList
                    // Ini ambil dari state global
                        data={this.props.Items.data}
                        renderItem={({ item }) => (
                            <Col>
                                <Card>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Detail', { id: item.id })}}>
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
                                            <Text style={{ color: "#CCC" }} numberOfLines={1}>
                                                {Moment(item.date_item).fromNow()}
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
                        refreshing={this.props.Items.isLoading}
                        onRefresh={this.getDataItems}
                        numColumns={2}
                    />
                </Grid>
                <Fab
                    style={{ backgroundColor: '#ffba00' }}
                    position="bottomRight"
                    onPress={() => (this.props.navigation.navigate("ItemAdd"))}>
                    <Icon name="pencil" />
                </Fab>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Items: state.Items
    }
}

export default connect(mapStateToProps)(itemList_screen)