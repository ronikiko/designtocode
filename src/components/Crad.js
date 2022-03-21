import React from 'react'
import styled from 'styled-components'

const CardGroup = styled.div`
	width: '300px';
	height: '225px';
	background-image: url(${({ image }) => image});
	background-size: cover;
	background-position: center;
	border-radius: 20px;
	padding: 0 20px 0 20px;
`

const CartTitleGroup = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
`
const CartTitle = styled.h1`
	align-self: flex-start;
	color: #fff;
	width: 170px;
	font-size: 30px;
`

const CardLeft = styled.p`
	color: gray;
	background-color: #fff;
	opacity: 0.5;
	border-radius: 40px;
	position: absolute;
	right: 20px;
	width: auto;
	padding: 4px 10px;
	letter-spacing: 1.009px;
`
const CardTime = styled.p`
	color: #fff;
	text-transform: uppercase;
`

function Crad({ image, title, time, left }) {
	return (
		<>
			<CardGroup image={image}>
				<CartTitleGroup>
					<CartTitle>{title}</CartTitle>
					<CardLeft>{left}</CardLeft>
				</CartTitleGroup>
				<CardTime>{time}</CardTime>
			</CardGroup>
		</>
	)
}

export default Crad
