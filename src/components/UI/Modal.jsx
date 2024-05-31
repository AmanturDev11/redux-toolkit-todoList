/* eslint-disable react/prop-types */
import styled from "styled-components";

const Modal = ({ children }) => {
	return (
		<Modal_Container>
			<Modal_Content>{children}</Modal_Content>
		</Modal_Container>
	);
};

export default Modal;

const Modal_Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(191, 188, 188, 0.27);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Modal_Content = styled.div`
	background: black;
	box-sizing: 2px 2px 2px 5px #fff;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(195, 190, 190, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	width: 350px;
	height: 350px;
	border-radius: 15px;
	button {
		cursor: pointer;
	}
	@media (max-width: 600px) {
		width: 285px;
		height: 325px;
	}
`;
