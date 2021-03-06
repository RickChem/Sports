/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'
import cookie from 'react-cookie'

import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router'

import Run from 'material-ui/svg-icons/maps/directions-run'
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import History from 'material-ui/svg-icons/action/history';
import Activity from 'material-ui/svg-icons/maps/directions-bike';
import Circle from 'material-ui/svg-icons/action/group-work';
import Friends from 'material-ui/svg-icons/social/group'
import Fans from 'material-ui/svg-icons/action/favorite'

import s from './Sidebar.scss'
import {white1, blueDark} from '../../config'

class Sidebar extends Component {
    render() {
        let contents = null;
        let type = cookie.load('user_per') > 1?1:0;
        if (type == 1){
            //管理员
            contents =
                <Menu autoWidth={true}>
                    <MenuItem primaryText="用户管理"
                              focusState="focused"
                              leftIcon={<Run color={white1} />}
                              rightIcon={<ArrowDropRight color={white1} />}
                              containerElement={<Link to='/admin' />}
                    />
                    <MenuItem primaryText="活动管理"
                              leftIcon={<History color={white1} />}
                              rightIcon={<ArrowDropRight color={white1} />}
                              containerElement={<Link to='/activity' />}
                    />
                </Menu>
        } else {
            //用户
            contents =
                <Menu autoWidth={true}>
                    <MenuItem primaryText="今日运动"
                              focusState="focused"
                              leftIcon={<Run color={white1} />}
                              rightIcon={<ArrowDropRight color={white1} />}
                              containerElement={<Link to='/home' />}
                    />
                    <MenuItem primaryText="历史记录"
                              leftIcon={<History color={white1} />}
                              rightIcon={<ArrowDropRight color={white1} />}
                              containerElement={<Link to='/home' />}
                    />
                    <MenuItem primaryText="活动管理"
                              leftIcon={<Activity color={white1} />}
                              rightIcon={<ArrowDropRight color={white1} />}
                              containerElement={<Link to='/activity' />}
                    />
                    <MenuItem primaryText="我的关注"
                              leftIcon={<Friends color={white1} />}
                              rightIcon={<ArrowDropRight color={white1} />}
                              containerElement={<Link to='/friends' />}
                    />
                    <MenuItem primaryText="圈子管理"
                              leftIcon={<Circle color={white1} />}
                              rightIcon={<ArrowDropRight color={white1} />}
                              containerElement={<Link to='/circle' />}
                    />
                    <MenuItem primaryText="最近动态"
                              leftIcon={<Friends color={white1} />}
                              rightIcon={<ArrowDropRight color={white1} />}
                              containerElement={<Link to='/news' />}
                    />
                </Menu>
        }
        return (
            <Paper className={s.paper} zDepth={1}>
                {contents}
            </Paper>
        );
    }
}

export default Sidebar