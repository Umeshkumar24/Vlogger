import React, { useEffect, useState } from 'react'
import { Box } from "@mui/system";
import { getAllPosts } from '../../api-helpers/helpers';
import DiaryItem from "./DiaryItem";

const Diaries = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    getAllPosts()
      .then((data) => setPosts(data?.posts))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Box
        display="flex"
        flexDirection={"column"}
        padding={3}
        justifyContent="center"
        alignItems={"center"}>
        {" "}
        {posts && posts.map((item, index) => (<DiaryItem
          date={new Date(`${item.date}`).toLocaleDateString()}
          description={item.description}
          image={item.image}
          id={item.id}
          location={item.location}
          title={item.title}
          key={index}
          user={item.user}
        />
        ))}
      </Box>
    </>
  )
}

export default Diaries