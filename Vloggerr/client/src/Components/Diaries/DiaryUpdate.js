import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPostDetails, postUpdate  } from '../../api-helpers/helpers';
import { useState } from 'react';
import { Box, FormLabel, Typography, TextField, Button } from '@mui/material'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'

const DiaryUpdate = () => {
    const [post, setPost] = useState();
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
        postUpdate(inputs, id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    };

    const id = useParams().id;
    console.log(id);
    useEffect(() => {
        getPostDetails(id)
            .then((data) => {
                setPost(data.post);

                setInputs({
                    title: data.post.title,
                    description: data.post.description,
                    location: data.post.location,
                    imageURL: data.post.imageURL,
                });
            })
            .catch(err => console.log(err));
}, [id]);

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
                {post && <form onSubmit={handleSubmit}>
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

                        <Button
                            type="submit"
                            color="success"
                            variant="contained"
                            sx={{ mt: 2, width: "25%", margin: "auto", borderRadius: 5 }}>POST</Button>
                    </Box>
                </form>}
            </Box>
        </Box>
    </>
);
};

export default DiaryUpdate