import classes from './post-content.module.css';
import PostHeader from './post-header';

const DUMMY_POST = {
	title: 'Getting Started with NextJS',
	image: 'getting-started-nextjs.png',
	date: '2022-02-10',
	slug: 'getting-started-with-nextjs',
	content: '# This is a first post',
};

function PostContent() {
	const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

	return (
		<article>
			<PostHeader title={DUMMY_POST.title} image={imagePath} />
			CONTENT
		</article>
	);
}

export default PostContent;
