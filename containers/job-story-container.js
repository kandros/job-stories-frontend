import React from 'react'
import JobStory from '../components/job-story'
import {createStory} from '../api/stories-api'

export default () => (
    <JobStory onSubmit={createStory}/>
)
