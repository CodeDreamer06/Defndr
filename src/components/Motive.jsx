import Shield from '../assets/images/shield.png';

const Motive = () => {
	return <section className="motive">
		<div>
			<h2>why use defndr?</h2>
			<p>defndr offers protection against raiders and enforces bans on them across all servers under its protection. Additionally, it aids in safeguarding servers from spam links and fraudulent activities.</p>
		</div>
		<img src={Shield} className="shield" alt="shield"/>
	</section>
}

export default Motive;