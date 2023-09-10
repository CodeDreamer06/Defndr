import Button from './Button';
import Star from '../assets/images/star.svg';

const Navbar = () => {
	return <nav>
		<span className="brand">
			<p>defndr</p>
			<img className="star" src={Star} alt="star"/>
		</span>
		<div className="links">
			<p>invite</p>
			<p>discord</p>
			<p>docs</p>
			<Button>connect wallet</Button>
		</div>
	</nav>
}

export default Navbar;