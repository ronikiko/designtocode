import * as React from 'react'
import CardsSection from './CardsSection'
import SectionButton from './SectionButton'
import NumbersSection from './NumbersSection'
import Header from './header'
import './layout.css'
import Wave from './Wave'
import Wallpaper from './Wallpaper'
import ImageState from './ImageState'

const logos = [
	'logo-sketch.png',
	'logo-figma.png',
	'logo-studio.png',
	'logo-framer.png',
	'logo-react.png',
	'logo-swift.png',
]

const Layout = () => {
	return (
		<>
			<Header />
			<div className='hero'>
				<div className='heroGroup'>
					<h1>Learn to design and code React apps</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's{' '}
					</p>
					<a href='/about'>Watch the video</a>
				</div>

				<div className='logos'>
					{logos &&
						logos.map((logo, i) => {
							return <img src={`/images/${logo}`} width='50' alt={logo} />
						})}
				</div>
				<div className='waveraper'>
					<Wave />
				</div>
			</div>
			<SectionButton />
			<CardsSection />
			<NumbersSection />
			<Wallpaper />
			<div style={{ position: 'relative' }}>
				<ImageState />
			</div>
		</>
	)
}

export default Layout
