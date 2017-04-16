import axios from 'axios'
import uuid from 'uuid'

const url = process.env.STORIES_API_URL

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export function createStory(formData) {
    const story = {
        when: formData.when,
        iWantTo: formData.iWantTo,
        soIcan: formData.soIcan,
    }

    const data = {
        id: uuid.v1(),
        story
    }

    const config = {
        headers
    }

    return axios.post(
        url,
        data,
        config
    )
        .then(res => console.log(res))
        .catch(err => console.error(err))
}