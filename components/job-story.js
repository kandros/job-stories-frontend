import React, {Component} from 'react'
import JobStoryFragment from './job-story-fragment'

class JobStory extends Component {
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

    render() {
        return (
            <div>
                <JobStoryFragment id="when" text="when" onChange={this.handleChange} value={this.state.when}/>
                <JobStoryFragment id="iWantTo" text="i want to" onChange={this.handleChange} value={this.state.iWantTo} />
                <JobStoryFragment id="soIcan" text="so i can" onChange={this.handleChange} value={this.state.soIcan} />
            </div>
        )
    }
}

export default JobStory