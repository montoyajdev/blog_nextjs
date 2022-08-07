import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

import PostHeader from './post-header';
import classes from './post-content.module.css';

function PostContent(props) {
	const { post } = props;

	const imagePath = `/images/posts/${post.slug}/${post.image}`;

	const customRenderers = {
		p(paragraph) {
			const { node } = paragraph;
			const image = node.children[0];
			if (image.type === 'element' && image.tagName === 'img') {
				return (
					<div className={classes.image}>
						<Image
							src={`/images/posts/${post.slug}/${post.img}`}
							alt={image.alt}
							width={600}
							height={300}
						/>
					</div>
				);
			}

			return <p>{paragraph.children}</p>;
		},

		code(code) {
			const { language, value } = code;
		},
	};

	return (
		<article className={classes.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
		</article>
	);
}

export default PostContent;
