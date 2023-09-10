import Button from "./Button";

const FinalPromo = () => {
	return <div className="final_promo">
		<div>
			<h2>Protect your server with <span>defndr</span> now!</h2>
			<Button externalLink={true}>add defndr to your server</Button>
			<Button externalLink={true}>join our discord server</Button>
		</div>
	</div>
}

export default FinalPromo;