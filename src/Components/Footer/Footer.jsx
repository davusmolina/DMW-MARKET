import './Footer.css';
function Footer() {
	return (
		<footer className='footer'>
			<ul className='footer-list'>
				<li className='footer-list-element'>
					<a href=''>Trabaja con nosotros</a>
				</li>
				<li className='footer-list-element'>
					<a href=''>Términos y condiciones</a>
				</li>
				<li className='footer-list-element'>
					<a href=''>Cómo cuidamos tu privacidad</a>
				</li>
				<li className='footer-list-element'>
					<a href=''>Política de cookies</a>
				</li>
				<li className='footer-list-element'>
					<a href=''>Ayuda/PQR</a>
				</li>
				<li className='footer-list-element'>
					<a href=''> www.sic.gov.co</a>
				</li>
			</ul>
			<p>Copyright © 2022 DMW Market Colombia LTDA</p>
			<p>Carrera xx # xx-xx, Villavicancio, Meta, Colombia</p>
		</footer>
	);
}

export { Footer };
