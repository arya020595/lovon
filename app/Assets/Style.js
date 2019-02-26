'use strict';

var React = require('react-native');

var {
    StyleSheet,
} = React;

module.exports = StyleSheet.create({

    buttonCustom: {
        flex: 1, marginTop: 20, backgroundColor: "#6fb98f", alignItems: 'center', alignContent: 'center', justifyContent: "center"
    },
    buttonCustomSmall: {
        flex: 1, marginTop: 15, backgroundColor: "#6fb98f", alignItems: 'center', alignContent: 'center', justifyContent: "center", height: 30
    },
    titleCustom: {
        color: "#011b1d", fontSize: 18, fontWeight: "bold" 
    },
    smallTitleCustom: {
        color: "#011b1d", fontSize: 8, fontWeight: "bold"
    }


});