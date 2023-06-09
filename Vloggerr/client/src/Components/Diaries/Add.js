import React from 'react'
import { Box, FormLabel, Typography, TextField, Button } from '@mui/material'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import { useState } from 'react'
import { addPost } from '../../api-helpers/helpers'

const Add = () => {
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        location: "",
        imageURL: "",
        date: "",
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        addPost(inputs)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };

    return (
        <>
            <Box display="flex" flexDirection={"column"} width="100%" height="100%">
                <Box display="flex" margin="auto" padding={2}>
                    <Typography variant="h4" fontFamily={"quicksand"} fontWeight={"bold"}>
                        Add Your Memories
                    </Typography>
                    <TravelExploreIcon sx={{ fontSize: "45px", paddingLeft: 2, color: "lightgreen" }} />
                </Box>
                <Box>
                    <form onSubmit={handleSubmit}>
                        <Box padding={3} width="60%" display={"flex"} flexDirection={"column"} margin="auto">
                            <FormLabel>Title</FormLabel>
                            <TextField
                                fontFamily={"quicksand"}
                                onChange={handleChange}
                                name="title"
                                value={inputs.title}
                                variant="standard"
                                margin="normal" />

                            <FormLabel>Description</FormLabel>
                            <TextField
                                fontFamily={"quicksand"}
                                onChange={handleChange}
                                name="description"
                                value={inputs.description}
                                variant="standard"
                                margin="normal" />

                            <FormLabel>Image URL</FormLabel>
                            <TextField
                                fontFamily={"quicksand"}
                                onChange={handleChange}
                                name="imageURL"
                                value={inputs.imageURL}
                                variant="standard"
                                margin="normal" />
                            <FormLabel>Location</FormLabel>
                            <TextField
                                fontFamily={"quicksand"}
                                onChange={handleChange}
                                name="location"
                                value={inputs.location}
                                variant="standard"
                                margin="normal" />

                            <FormLabel>Date</FormLabel>
                            <TextField
                                fontFamily={"quicksand"}
                                onChange={handleChange}
                                type="date"
                                name="date"
                                value={inputs.date}
                                variant="standard"
                                margin="normal" />
                            <Button
                                type="submit"
                                color="success"
                                variant="contained"
                                sx={{ mt: 2, width: "25%", margin: "auto", borderRadius: 5 }}>POST</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </>
    )
};

export default Add