import React, { useEffect, useState } from "react";

function Hooks78() {
    const [posts, setPosts] = useState([]);
    const [originalposts, setOriginalPosts] = useState([]);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(res => {
                setPosts(res);
                setOriginalPosts(res);
            })
    }, [])
    return (
        <div>
            <div className="inputbtn" >
                <input type="text" placeholder="enter the post id"
                    onChange={(event) => { setInputText(event.target.value) }}>

                </input>
                <button onClick={() => {
                    let arr;
                    if (inputText !== '') {
                        arr = originalposts.filter(item => item.id === Number(inputText))
                    }
                    else {
                        arr = originalposts;
                    }
                    setPosts(arr)
                }}>submit</button>
            </div>
            {posts.map((item) => {
                return <div className="StateEffectHook" key={item.id}>
                    <h4 className="Hooktitile" > {`${item.id} - ${item.title}`}  </h4>
                    <div className="HookData"> {item.body}</div>
                </div>
            })}
        </div>
    )
}

export default Hooks78;