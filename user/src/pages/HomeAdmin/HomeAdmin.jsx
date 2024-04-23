import React, { Component } from 'react'
import Visits from './components/Visits/Visits'
import VisitsInfo from './components/VisitsInfo/VisitsInfo'
import Active from './components/Activity/Activity'
import QuickAction from './components/QuickAction/QuickAction'

import './homeadmin.css'
export default class Home extends Component {
  componentDidMount() {
    window.onresize = () => {
      this.visitsRef && this.visitsRef.chartReseize()
      this.visitsInfoRef && this.visitsInfoRef.chartReseize()
      this.activeRef && this.activeRef.chartReseize()
    }
  }
  componentWillUnmount(){
    window.onresize = null
  }
  render() {
    return (
      <div>name: Super Admin</div>
    )
  }
}
