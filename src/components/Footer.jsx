import Github from '../assets/images/github.png';
import Discord from '../assets/images/discord.png';
import Twitter from '../assets/images/x.png';

const Footer = () => {
	return <footer>
		<p>@defndr</p>
		<div>
			<img src={Github} alt="github" />
			<img src={Discord} alt="discord" />
			<img src={Twitter} alt="x" />
		</div>
	</footer>
}

export default Footer;