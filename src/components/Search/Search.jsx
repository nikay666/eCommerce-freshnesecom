import React from 'react'
import PropTypes from 'prop-types'
import { TextField, withStyles } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';


const SearchField =  withStyles({
    root: {

        '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
        },
        '& .MuiInputBase-inputTypeSearch': {
            padding: '15px 12px'
    
        }
    },

})(TextField)

const Search = ({placeholder}) => {

    return (
        <SearchField
            variant='outlined'
            placeholder={placeholder}
            type='search'
            InputProps={{
                endAdornment: (
                    <SearchIcon/>
                )
            }}
        />
        
    )
}
Search.defaultProps = {
    placeholder: 'Search Products, categories ...'
}

Search.propTypes = {
    placeholder: PropTypes.string
}

export default Search
