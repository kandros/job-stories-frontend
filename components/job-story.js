import React, {Component} from 'react'
import PropTypes from 'prop-types'
import JobStoryFragment from './job-story-fragment'
import Cta from './cta'

class JobStory extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    state = {
        when: "",
        iWantTo: "",
        soIcan: "",

        errors: {}
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    _validate = (formData) => {
        const errors = {}

        if (!formData.when) {
            errors.when = 'required'
        }
        if (!formData.iWantTo) {
            errors.iWantTo = 'required'
        }
        if (!formData.soIcan) {
            errors.soIcan = 'required'
        }

        return errors
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const {when, iWantTo, soIcan} = this.state

        const formData = {when, iWantTo, soIcan}

        const errors = this._validate(formData)

        if (Object.keys(errors).length === 0) {
            this.props.onSubmit(formData)
        } else {
            this.setState({errors})
        }
    }

    render() {
        const {
            errors,
            when,
            iWantTo,
            soIcan
        } = this.state

        return (
            <form>
                <style>{`
                    .stories {
                      display: flex;
                      justify-content: centerl
                    }
                    .actions {
                      margin-top: 40px;
                      display: flex;
                      justify-content: center;
                    }
                `}
                </style>
                <div className="stories">
                    <JobStoryFragment error={errors.when} id="when" text="when" onChange={this.handleChange} value={when}/>
                    <JobStoryFragment error={errors.iWantTo} id="iWantTo" text="i want to" onChange={this.handleChange} value={iWantTo}/>
                    <JobStoryFragment error={errors.soIcan} id="soIcan" text="so i can" onChange={this.handleChange} value={soIcan}/>
                </div>
                <div className="actions">
                    <Cta text="submit" onClick={this._handleSubmit}/>
                </div>
            </form>
        )
    }
}

export default JobStory