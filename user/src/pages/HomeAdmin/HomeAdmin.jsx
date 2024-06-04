import { Component } from 'react'

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
