import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MarkdownPreviewer from '../component/MarkdownPreviewer'



const Problem = ({route,props}) => {
    
    return (
        <View>
            <Text>{route.params.title}</Text>
            <Text>{route.params.difficulty}</Text>
            <MarkdownPreviewer data={route.params.question}/>
            <Text>{route.params.question}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Problem;
