/**
 * Created by raychen on 2016/11/3.
 */

import React, {Component} from 'react'

import Paper from 'material-ui/Paper'

import s from './AdminItem.scss'

class TopicItem extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <Paper className={s.container} >
            </Paper>
        );
    }
}

export default TopicItem;