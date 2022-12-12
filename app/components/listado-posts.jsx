import Post from './post'

const ListadoPosts = ({posts}) => {
  return (
    <>
      <h2 className="heading">Bog</h2>
        <div className="blog">
          {posts.map(post => (
            <Post
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>
    </>
  );
};

export default ListadoPosts;