import React, {Component} from 'react'
import PropTypes from 'prop-types'
import JobStoryFragment from './job-story-fragment'

class JobStory extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    state = {
        when: "",
        iWantTo: "",
        soIcan: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const {when, iWantTo, soIcan} = this.state
        if (when && iWantTo && soIcan) {
            this.props.onSubmit(this.state)
        } else {
            console.log('nope')
        }
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div>
                    <JobStoryFragment id="when" text="when" onChange={this.handleChange} value={this.state.when}/>
                    <JobStoryFragment id="iWantTo" text="i want to" onChange={this.handleChange} value={this.state.iWantTo}/>
                    <JobStoryFragment id="soIcan" text="so i can" onChange={this.handleChange} value={this.state.soIcan}/>
                </div>
                <button typeof="submit">submit</button>
            </form>
        )
    }
}

export default JobStory