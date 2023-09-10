import Button from "./Button";
import QRCode from "../assets/images/qrcode.png";

const Hero = () => {
	return <section className="hero">
		<div className="hero__content">
			<h1>Annoyed of spammers in your Discord server?</h1>
			<p><strong>defndr</strong> provides decentralized authentication to verify legitimate human users and enhances server security.</p>
			<div>
				<Button>coming soon</Button>
				<Button externalLink={true}>join our discord server</Button>
			</div>
		</div>
		<img src={QRCode} alt="qr code"/>
	</section>
}

export default Hero;