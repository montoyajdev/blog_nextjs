import PostItem from './post-item';
import classes from './posts-grid.module.css';

export default function PostsGrid(props) {
consts {posts}= props;

	return <ul>
    {posts.map(post=> <PostItem/>)}
  </ul>;
}
