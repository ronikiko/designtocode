import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	max-width: 500px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 40px;

	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		justify-items: center;
	}
`
const Left = styled.div``

const Number = styled.div`
	font-size: 200px;
	line-height: 234px;
	text-align: center;
	background: -webkit-linear-gradient(#852f56, #e84378);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: 700;
`

const NumberTitle = styled.div`
	text-align: center;
	background: -webkit-linear-gradient(#eee, #333);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background: -webkit-linear-gradient(#852f56, #e84378);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	@media (max-width: 500px) {
		padding: 0 100px;
	}
`
const Right = styled.div``
const NumberRight = styled.div`
	font-size: 200px;
	line-height: 234px;
	text-align: center;
	background: -webkit-linear-gradient(#e3544e, #fb826a);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: 700;
`
const NumberTitleRight = styled.div`
	text-align: center;
	background: -webkit-linear-gradient(#e3544e, #fb826a);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	// for mobile
	@media (max-width: 500px) {
		padding: 0 100px;
	}
`

function NumbersSection() {
	return (
		<Container>
			<Left>
				<Number>60</Number>
				<NumberTitle>
					hours of video content that’s downloadable and captioned
				</NumberTitle>
			</Left>
			<Right>
				<NumberRight>4</NumberRight>
				<NumberTitleRight>
					languages supported. English, Chinese, French, Spanish.
				</NumberTitleRight>
			</Right>
		</Container>
	)
}

export default NumbersSection
