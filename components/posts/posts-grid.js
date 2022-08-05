import PostItem from './post-item';
import classes from './posts-grid.module.css';
import { v4 as uuid } from 'uuid';

export default function PostsGrid(props) {
	const { posts } = props;

	return (
		<ul className="classes.grid">
			{posts.map((post) => (
				<PostItem key={uuid()} />
			))}
		</ul>
	);
}
