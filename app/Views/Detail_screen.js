import React, { Component } from 'react';
import { Image, StyleSheet, View } from "react-native";
import { Container, Content, Card, CardItem, Text, Button, Body, Fab, List, ListItem, Left, Thumbnail, H3 } from 'native-base';
import { Col, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/FontAwesome';
import Moment from 'moment';

import { connect } from 'react-redux';
import { getItemsDetail } from '../Redux/Actions/Items';

var s = require('../Assets/Style');

class Detail_screen extends Component {

    constructor(props) {
        super(props)
        const { navigation } = this.props;
        this.id = navigation.getParam('id', 'NO-ID');
        this.getDetailItems(this.id)
        this.state = {
            active:true
        }
    }

    getDetailItems = (body) => {
        // Didapat dari import products dari folder action
        this.props.dispatch(getItemsDetail(body));
    }

    render() {
        return (
            <Container >
                <Content>
                    <Card style={{marginTop:0}}>
                        <CardItem cardBody>
                            <Image source={{ uri: this.props.Items.detail.image_item }} style={{ height: 250, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem style={{ flex: 1, flexDirection: 'row',  borderBottomColor: "#CCC", borderBottomWidth: 1, color: "#D14836" }}>
                            <View>
                                {this.props.Items.detail.status_item == 'lost' ?
                                    <Icon
                                        size={30}
                                        name="ban"
                                        color="#D14836"
                                        onPress={this.loginWithFacebook}>
                                    </Icon> : <Icon
                                        size={30}
                                        name="search"
                                        color="#ffb72b"
                                        onPress={this.loginWithFacebook}>
                                    </Icon>}
                            </View>
                            <View>
                                <H3 style={{ textTransform: "uppercase", marginLeft: 10, color: "#D14836" }}>{this.props.Items.detail.status_item}</H3>
                            </View>
                            <View style={{ flex: 1, alignContent: "flex-end" }}>
                                <Text note style={{ textAlign: "right" }}>{Moment(this.props.Items.detail.date_item).format('LL')}</Text>
                            </View>
                        </CardItem>
                        <CardItem style={{ flex: 1, flexDirection: 'row', flexWrap: "wrap", borderBottomColor: "#CCC", borderBottomWidth: 1, }}>
                            <View style={{ flex: 0, }}>
                                <Thumbnail source={{ uri: 'http://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg' }} />
                            </View>
                            <View style={{ marginLeft: 10, flex: 1, }}>
                                <Text style={{ fontWeight: "400" }}>Kumar Pratik</Text>
                                <Text note>Posted in {this.props.Items.detail.location_item}</Text>
                            </View>
                        </CardItem>
                        <CardItem style={{ borderBottomColor: "#CCC", borderBottomWidth: 1, }}>
                            <Body>
                                <Text style={{ fontWeight: "400", marginBottom: 20, }}>Description</Text>
                                <Text note>{this.props.Items.detail.description_item}</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ borderBottomColor: "#CCC", borderBottomWidth: 1, color: "#D14836" }}>
                            <Body>
                                <Text style={{ fontWeight: "400", marginBottom: 20, }}>Location</Text>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center',}}>
                                    <Icon
                                        size={15}
                                        name="map"
                                        color="#22b8cf"
                                        onPress={this.loginWithFacebook}>
                                    </Icon>
                                    <Text style={{marginLeft: 10,}} note>View on Map</Text>
                                </View>
                                
                            </Body>
                        </CardItem>
                        <CardItem style={{ flex: 1 }}>
                            <Button style={s.buttonCustom}>
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
                    style={{ backgroundColor: '#375d96' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="share-alt" />
                    <Button style={{ backgroundColor: '#34A34F' }}>
                        <Icon style={{ color: "white" }} name="whatsapp" />
                    </Button>
                    <Button style={{ backgroundColor: '#3B5998' }}>
                        <Icon style={{ color: "white" }} name="facebook" />
                    </Button>
                    <Button disabled style={{ backgroundColor: '#DD5144' }}>
                        <Icon style={{ color: "white" }} name="envelope" />
                    </Button>
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

export default connect(mapStateToProps)(Detail_screen)