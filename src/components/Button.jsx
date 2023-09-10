import Arrow from '../assets/images/arrow.svg';

const Button = ({ externalLink = false, children }) => {
	return <button className="btn">{children}{externalLink && <img src={Arrow} alt="arrow"/>}</button>
}

export default Button;