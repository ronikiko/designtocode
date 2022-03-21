import React, { useState, useEffect } from 'react'

import './header.css'

const Header = ({ siteTitle }) => {
	const [isScrolling, setIscrolling] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', (e) => {
			const position = window.pageYOffset
			if (position > 50) setIscrolling(true)
			else setIscrolling(false)
		})
	}, [])

	return (
		<div className={isScrolling ? 'header scrollClass' : 'header'}>
			<div className='headerGroup'>
				<a href='/'>
					<img src='/images/logo-designcode.svg' width='30' alt='logo' />
				</a>
				<a href='/courses'>Courses</a>
				<a href='/downloads'>Downloads</a>
				<a href='/workshops'>Workshops</a>
				<a href='/buy'>
					<button>Buy</button>
				</a>
			</div>
		</div>
	)
}

export default Header
//
