import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	/* justify-content: center;
	align-items: center; */
	margin: 0 auto;
	position: absolute;
	top: -40px;
`
const LepTop = styled.div`
	position: absolute;
	top: -150px;
	align-self: center;

	@media (max-width: 800px) {
		width: 100%;
		top: -80px;
		text-align: center;
		img {
			width: 70%;
		}
	}

	@media (max-width: 500px) {
		width: 100%;
		top: -100px;
		text-align: center;
		img {
			width: 80%;
		}
	}
`
const Iphone = styled.div`
	position: absolute;
	top: 430px;
	right: 430px;

	@media (max-width: 800px) {
		top: 360px;
		right: 0px;
		img {
			width: 85%;
		}
	}

	@media (max-width: 500px) {
		top: 150px;
		right: -250px;

		img {
			width: 40%;
		}
	}
`

function ImageState() {
	return (
		<Container>
			<LepTop>
				<img src='/images/leptop.png' alt='leptop' />
			</LepTop>
			<Iphone>
				<img src='/images/iphone.png' alt='iphone' />
			</Iphone>
		</Container>
	)
}

export default ImageState
