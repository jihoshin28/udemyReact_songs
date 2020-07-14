import {combineReducers} from 'redux'

const songsReducer = () => {
    return [
        {name: 'Prime Operator', author: 'Mitch Murder'},
        {name: 'Thank You Song', author: 'Su Lee'},
        {name: 'Fluorescent Moon', author: 'Lucy In Disguise'}
    ]
}

const selectSongReducer = (selectedSong = null, action) => {
    if(action.type === "SONG_SELECTED"){
        return action.payload
    }
    
    return selectedSong
}

export default 