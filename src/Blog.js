import React, {Fragment} from 'react'

// export default function Blog() {
//   return (
//     <>
//     <Post title="Ad update" body="It is been a while since i posted"></Post>
//     <Post title="My New Blog" body="I am starting a new blog"></Post>
//     </>
//   )
// }

const posts = [{ id:1,title: "An update", body: "It is been a while since i posted" }, { id:2,title: "My New Blog", body: "I am starting a new blog" }];
export default function Blog() {
    return  posts.map(post =>
            <Fragment key={post.id}>
                <PostTitle title={post.title}></PostTitle>
                <PostBody body={post.body}></PostBody>
            </Fragment>
        )
    
}

function Post({ title, body }) {
    return (
        <>
            <PostTitle title={title}></PostTitle>
            <PostBody body={body}></PostBody>
        </>
    )
}



function PostTitle({ title }) {
    return <h1>{title}</h1>
}


function PostBody({ body }) {
    return <article><p>{body}</p></article>
}