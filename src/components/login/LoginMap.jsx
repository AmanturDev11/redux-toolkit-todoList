/* eslint-disable react/prop-types */

import axios from "axios";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../UI/Modal";
import styled from "styled-components";

const url =
	"https://api-v2.elchocrud.pro/api/v1/a0d59e0c711731d42bfe08de06433d69/reduxTollcit";

export const LoginMap = ({ cards, getTodos }) => {
	const [isModal, setIsModal] = useState(false);
	const [itemId, setItemId] = useState();

	const ModalFunk = () => {
		setIsModal(true);
	};

	const handleDeleteFunkAndModal = async (id) => {
		setIsModal(false);
		try {
			await axios.delete(`${url}/${id}`);
			getTodos();
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div>
			<div className="container">
				<Content>
					<Cards>
						<h1>Users</h1>
						{cards.map((item) => (
							<div key={item.id}>
								<h1>{item.email}</h1>
								<span>{item.password}</span>
								<button
									onClick={() => {
										ModalFunk();
										setItemId(item._id);
									}}>
									delete
								</button>
							</div>
						))}
						{isModal &&
							createPortal(
								<Modal>
									<div className="">
										<button onClick={() => setIsModal(false)}>cancel</button>
										<button onClick={() => handleDeleteFunkAndModal(itemId)}>
											delete
										</button>
									</div>
								</Modal>,
								document.getElementById("modal")
							)}
					</Cards>
				</Content>
			</div>
		</div>
	);
};

const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Cards = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: 2px solid;
	border-radius: 5px;
`;
