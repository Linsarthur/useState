import { useState } from "react";

function Post () {
    const [like, setLike] = useState(false)
    return(
        <div>
        <h1>Atividade de useState</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus eligendi nam, fugit cumque eius?</p>
        {like ? "curtida" : "deslike"}
        <button onClick={() => setLike(!like)}>Like</button>
        </div>
    )
}

export default Post;