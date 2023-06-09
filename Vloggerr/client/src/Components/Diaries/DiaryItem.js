import { Card, Avatar, CardHeader, IconButton, CardActions, CardContent, Typography, Button, Snackbar, Alert} from "@mui/material"
import React, { useState } from "react";
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import EditIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import { Box } from "@mui/system";
import { Link } from "react-router-dom"
import { postDelete } from "../../api-helpers/helpers";

const DiaryItem = ({ title, description, image, location, date, id, user, name }) => {
    const [open, setOpen] = useState(false);
    const isLoggedInUser = () => {
        if (localStorage.getItem("userId") === user) {
            return true;
        }
        return false;
    };

    const handleDelete = () => {
        postDelete(id)
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
        setOpen(true);
      };

    return (
        <Card sx={{
            width: "50%",
            height: "60vh",
            margin: 1,
            padding: 1,
            display: "flex",
            flexDirection: "column",
            boxShadow: "5px 5px 10px #ccc"
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "aqua" }} aria-label="travel">
                        {name.charAt(0)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        {<ShareLocationIcon />}
                    </IconButton>
                }
                title={location}
                header={location}
                subheader={date}
            />
            <img
                height="55%"
                src={image}
                alt={title}
            />
            <CardContent>
                <Typography
                    paddingBottom={1}
                    variant="h6"
                    color="text.secondary">
                    {title}
                </Typography>
                <hr />
                <Box display="flex" paddingTop={1}>
                    <Typography width="170px" fontWeight={'bold'} variant="caption" >{ }</Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary">
                        {description}
                    </Typography>
                </Box>
            </CardContent>

            {isLoggedInUser() && <CardActions sx={{ marginLeft: "auto" }}>
                <Button LinkComponent={Link} to={`/post/${id}`}><EditIcon color="warning" /></Button>
                <Button onClick={handleDelete}><DeleteIcon color="error" /></Button>
            </CardActions>}

            <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
        </Card>
    )
}

export default DiaryItem