import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 585px;
	background-image: url('/images/wallpaperorange.png');
	background-size: cover;
	background-position: center;
	position: relative;
	justify-content: center;
	align-items: center;
`
const WaveTop = styled.div`
	position: absolute;
	top: -10px;
	width: 100%;
	transform: rotate(180deg);
`
const WaveBottom = styled.div`
	position: absolute;
	width: 100%;
	bottom: -10px;
	left: 0px;
`

const Title = styled.h1`
	font-size: 60px;
	line-height: 70px;
	text-align: center;
	color: #fff;
	background: -webkit-linear-gradient(#f5a124, #d82b63);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: 700;

	@media (max-width: 500px) {
		font-size: 40px;
		line-height: normal;
	}
`

function Wallpaper(props) {
	return (
		<>
			<Container>
				<WaveTop>
					<Wave />
				</WaveTop>
				<Title>
					Design for everyone. <br />
					Coding for designers.
				</Title>
				<WaveBottom>
					<Wave />
				</WaveBottom>
			</Container>
		</>
	)
}

export default Wallpaper
