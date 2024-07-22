import React, { useState } from 'react';
import SearchIcon from './../assets/SearchIcon.png';

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    const styles = {
        form: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            marginTop: '20px',
        },
        inputContainer: {
            position: 'relative',
            width: '650px',
        },
        input: {
            width: '100%',
            height: '55px',
            padding: '10px 20px 10px 55px', // Add padding for the icon
            fontSize: '16px',
            borderRadius: '50px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
        },
        icon: {
            position: 'absolute',
            top: '50%',
            left: '20px',
            transform: 'translateY(-50%)',
            width: '20px',
            height: '20px',
        },
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputContainer}>
                <img src={SearchIcon} alt="Search Icon" style={styles.icon} />
                <input
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder="Search"
                    style={styles.input}
                />
            </div>
        </form>
    );
};

export default SearchBar;
