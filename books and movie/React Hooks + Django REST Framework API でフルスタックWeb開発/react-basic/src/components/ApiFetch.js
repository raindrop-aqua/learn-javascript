import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiFetch = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    axios.get(url).then((res) => {
      setPosts(res.data);
    });

    // fetch(url, { method: "GET" })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setPosts(data);
    //   });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked]);

  const getPostHandler = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={getPostHandler}>
        Get post
      </button>
      <div>{posts.title}</div>
    </div>
  );
};

export default ApiFetch;
