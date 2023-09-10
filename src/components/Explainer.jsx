import Card from "./Card";
import CardModel from '../models/card';

const Explainer = () => {
	const verification_cards = [
		new CardModel("discord account", "user connects his discord account with defndr"),
		new CardModel("wallet connection", "user connects his web3 wallet with discord account"),
		new CardModel("defndrID is generated", "user identity will be generated with defndr."),
		new CardModel("access to server", "user identity will be generated with defndr."),
	];

	const user_ban_cards = [
		new CardModel("report", "administrators can report a user to defndr with valid proof."),
		new CardModel("report created!", "A case will be initiated against the user, resulting in a temporary ban within that specific server until the report undergoes a thorough review."),
		new CardModel("case accepted", "If a case is created against a user for violating the Terms of Service, that user will be banned across all servers protected by Defndr. Additionally, their DefndrID will be terminated as well."),
		new CardModel("appeals", "Users have the option to appeal their actions. Following a comprehensive review, there is a possibility of their ban being lifted, and their Defndr privileges being reinstated."),
	];

	return <section className="explainer">
		<h2>how does defndr verifies a human?</h2>
		<p className="explainer__description"><strong>defndr</strong> aids in the verification of legitimate human users using decentralized authentication and contributes to the safeguarding of your server.</p>
		<div className="explainer__card-group explainer__card-group--horizontally-misaligned">{verification_cards.map((card, id) => <Card id={id + 1} details={card}/>)}</div>
		<h2>how does defndr ban a user globally?</h2>
		<p className="explainer__description"><strong>defndr's</strong> moderators diligently review all user-reported incidents and implement global bans on offenders across all servers where Defndr is active. Additionally, Defndr restricts a user from joining any new server until they have successfully appealed.</p>
		<div className="explainer__card-group explainer__card-group--vertically-misaligned">{user_ban_cards.map((card, id) => <Card id={id + 1} details={card}/>)}</div>
	</section>
}

export default Explainer;