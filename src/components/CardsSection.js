import './cardsection.css'
import Crad from './Crad'

function CardsSection() {
	return (
		<div className='cardsGroup'>
			<h1 className='title'>6 courses, more coming.</h1>
			<div className='container'>
				<Crad
					image='/images/wallpaper2.jpg'
					title='Design System with Figma'
					time='10 Section'
					left='21AUG'
				/>
				<Crad
					image='/images/wallpaper.jpg'
					title='Motion Design in After Effects'
					time='10 Section'
					left='21AUG'
				/>
				<Crad
					image='/images/1.png'
					title='Design System with Figma'
					time='10 Section'
					left='21AUG'
				/>
				<Crad
					image='/images/wallpaper3.jpg'
					title='Design System with Figma'
					time='10 Section'
					left='21AUG'
				/>
				<Crad
					image='/images/wallpaper3.jpg'
					title='Design System with Figma'
					time='10 Section'
					left='21AUG'
				/>
				<Crad
					image='/images/wallpaper3.jpg'
					title='Design System with Figma'
					time='10 Section'
					left='21AUG'
				/>
			</div>
		</div>
	)
}

export default CardsSection
