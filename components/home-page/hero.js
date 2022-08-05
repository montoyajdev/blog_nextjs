import classes from './hero.module.css';
import Image from 'next/image';
import mlady from './mlady.jpg';

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src={mlady}
					alt="An image showing John"
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, Im John</h1>
			<p>I am a React developer</p>
		</section>
	);
}

export default Hero;
