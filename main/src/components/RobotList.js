import React, { Component } from 'react'
import RobotStore from '../stores/RobotStore'
import Robot from './Robot'
import RobotForm from './RobotForm'



class RobotList extends Component {
	constructor(){
		super()
		this.state = {
			robots : []
		}
	}
	componentDidMount(){
		this.store = new RobotStore()
		this.setState({
			robots : this.store.getRobots()
		})
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				robots : this.store.getRobots()
			})			
		})
	}
	onAdd(event){
		event.preventDefault();
		
		let name = event.target.name.value;
		let type = event.target.type.value;
		let mass = event.target.mass.value.toString();
		this.props.name = name;
		this.props.type = type;
		this.props.mass = mass;
		this.setState({
			robots: this.store.addRobot(new Robot(this.props))
		})
	}
	render() {
		return (
			<div>{
				console.log("ree")
				}
				<RobotForm onAdd={this.onAdd}/>
				{
					this.state.robots.map((e, i) => 
						<Robot item={e} key={i} />
					)
				}
			</div>
		)
	}
}

export default RobotList
