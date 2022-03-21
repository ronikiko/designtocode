import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	max-width: 500px;
	margin: 0 auto;
	padding: 40px 0;
	text-align: center;

	@media (max-width: 500px) {
		position: relative;
		margin-top: -100px;
	}

	@media (max-width: 800px) {
		position: relative;
		margin-top: -50px;
	}
`

const TryButton = styled.button`
	width: 228px;
	height: 60px;
	background: linear-gradient(93.96deg, #4b26ff 0%, #b01eff 100%);
	box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
	border-radius: 30px;
	outline: none;
	border: none;
	color: #fff;
	font-size: 24px;
	line-height: 37px;
	font-weight: bold;
`

const MainTitle = styled.h1`
	font-size: 18px;
	line-height: 21px;
	text-align: center;
	letter-spacing: 0.208px;
	text-transform: uppercase;
	color: #b9c8dd;
`

const Paragraph = styled.p`
	font-size: 16px;
	line-height: 27px;
	text-align: center;
	color: #205284;
	display: flex;
	justify-content: center;
`

function SectionButton() {
	return (
		<Container>
			<TryButton>Try for free</TryButton>
			<MainTitle>get 7 days free trial</MainTitle>
			<Paragraph>
				Then, it’s $9 per month, billed annually. <br />
				Cancel anytime. No soul required.
				<br /> Free upgrade from version 2.
			</Paragraph>
		</Container>
	)
}

export default SectionButton
