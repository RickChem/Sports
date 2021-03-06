/**
 * Created by raychen on 2016/10/19.
 */
import React, {Component} from 'react'

import Badge from 'material-ui/Badge'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'

import s from './SideHead.scss'

const badgeInside={
    width: '35px',
    height: '35px',
    fontSize: '16px'
};

class SideHead extends Component{
    render () {
        return (
            <Paper className={s.container}>
                <div>
                    <Badge
                        className={s.badge}
                        badgeStyle={badgeInside}
                        badgeContent={this.props.level}
                        primary={true}
                    >
                        <Avatar size={80} src={require("../../assets/"+this.props.avatar)} />
                    </Badge>
                </div>
                <div className={s.name}> {this.props.user} </div>
            </Paper>
        );
    }
}

export default SideHead