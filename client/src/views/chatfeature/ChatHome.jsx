import React, { useEffect, useState } from "react";
import { Button, Paper, Divider, IconButton, Typography } from "@mui/material";
import styled from 'styled-components'
import SendIcon from "@mui/icons-material/Send";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../Firebase";
import {
	addDoc,
	collection,
	onSnapshot,
	orderBy,
	query,
} from "firebase/firestore";

import Navbar from '../../mainComponent/Navbar';
import SideNav from '../../mainComponent/NavbarAndSideBar/SideNav';



const TimeTrackerStyling = styled.div`
margin:30px;
padding:50px 20px;
.MainDivForTimeTracking{
    display:flex;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
    border:1px solid #dedede;
    height:fit-content;
    align-items:center;
    background:white;
    justify-content:space-between;
}
.MainDivForTimeTrackingLeftPart{
    height:40px;
    margin:10px 0px 10px 20px;
    padding:5px 15px;
    font-size:14px;
    width:57%;
}
.MainDivForTimeTrackingLeftPart:hover{
    border:1px solid #dedede;
}
.MainDivForTimeTrackingRightPartSubDiv{
    display:flex;
    align-items:center;
    gap:10px;
}
.MainDivForTimeTrackingRightPart{
    display:flex;
    align-items:center;
    gap:25px;
    margin-right:10px;
}

`




function UsersComponent(props) {
	const handleToggle = (username, userId) => {
		props.setReceiverData({
			username: username,
			userId: userId,
		});

		props.navigate(`/employee/chat-home/${userId}`);
	};

	return (
		<List
			dense
			sx={{
				width: "100%", maxWidth: 360,
				bgcolor: "#fff"
			}}
		>
			{props.users?.map((value, index) => {
				const labelId = `checkbox-list-secondary-label-${value}`;

				if (props.currentUserId !== value.userId)
					return (
						<ListItem key={value.userId} disablePadding>
							<ListItemButton
								onClick={() => {
									handleToggle(value.username, value.userId);
								}}
							>
								<ListItemAvatar>
									<Avatar
										alt={`${value.username}`}
										src={`${value.username}.jpg`}
									/>
								</ListItemAvatar>
								<ListItemText id={labelId}
									primary={`${value.username}`} />
							</ListItemButton>
						</ListItem>
					);
			})}
		</List>
	);
}

export default function ChatHome() {
	const [users, setUsers] = useState([]);

	const [receiverData, setReceiverData] = useState(null);
	const [chatMessage, setChatMessage] = useState("");

	const [allMessages, setAllMessages] = useState([]);
	const [toggle, setToggle] = useState(true)
	const toggleNavbar = (x) => {
		setToggle(x)
	}


	const user = auth.currentUser;

	const navigate = useNavigate();

	useEffect(() => {
		const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
			setUsers(snapshot.docs.map((doc) => doc.data()));
		});
		return unsub;
	}, []);

	useEffect(() => {
		if (receiverData) {
			const unsub = onSnapshot(
				query(
					collection(
						db,
						"users",
						user?.uid,
						"chatUsers",
						receiverData?.userId,
						"messages"
					),
					orderBy("timestamp")
				),
				(snapshot) => {
					setAllMessages(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							messages: doc.data(),
						}))
					);
				}
			);
			return unsub;
		}
	}, [receiverData?.userId]);

	const sendMessage = async () => {
		try {
			if (user && receiverData) {
				await addDoc(
					collection(
						db,
						"users",
						user.uid,
						"chatUsers",
						receiverData.userId,
						"messages"
					),
					{
						username: user.displayName,
						messageUserId: user.uid,
						message: chatMessage,
						timestamp: new Date(),
					}
				);

				await addDoc(
					collection(
						db,
						"users",
						receiverData.userId,
						"chatUsers",
						user.uid,
						"messages"
					),
					{
						username: user.displayName,
						messageUserId: user.uid,
						message: chatMessage,
						timestamp: new Date(),
					}
				);
			}
		} catch (error) {
			console.log(error);
		}
		setChatMessage("");
	};

	return (

		<div>
			<Navbar props={{ toggle, toggleNavbar }} />
			<div style={{ display: 'flex' }}>
				<div style={toggle ? { width: "218px" } : { width: '53px' }}>
					<SideNav props={toggle} />
				</div>
				<div style={toggle ? { width: 'calc(100% - 218px)' } : { width: 'calc(100% - 53px)' }}>
				<TimeTrackerStyling>
					<div style={box} >
						<Paper elevation={0} style={left}>
							<div
								style={{
									display: "flex",
									padding: 5,
									justifyContent: "space-between",
								}}
							>
								<Typography variant="body1" fontWeight={600} m={2}>{user?.displayName} </Typography>

								<Button
									color="secondary"

									onClick={() => {
										auth.signOut();
										navigate("/employee");
									}}
								>
									Logout
								</Button>
							</div>
							<Divider />
							<Typography m={2}>All Member</Typography>
							<div style={{ overflowY: "scroll" }}>
								<UsersComponent
									users={users}
									setReceiverData={setReceiverData}
									navigate={navigate}
									currentUserId={user?.uid}
								/>
							</div>
						</Paper>

						<Paper style={right}>
							<h4 style={{ margin: 2, padding: 10 }}>
								{receiverData ? receiverData.username : user?.displayName}{" "}
							</h4>

							<Divider />
							<div style={messagesDiv}>
								{/* messages area */}

								{allMessages &&
									allMessages.map(({ id, messages }) => {
										return (
											<div
												key={id}
												style={{
													margin: 2,
													display: "flex",
													flexDirection:
														user?.uid === messages.messageUserId
															? "row-reverse"
															: "row",
												}}
											>
												<span
													style={{
														backgroundColor: "#fff",
														padding: 6,
														borderTopLeftRadius:
															user?.uid === messages.messageUserId ? 10 : 0,
														borderTopRightRadius:
															user?.uid === messages.messageUserId ? 0 : 10,
														borderBottomLeftRadius: 10,
														borderBottomRightRadius: 10,
														maxWidth: 400,
														fontSize: 15,
														textAlign:
															user?.uid === messages.messageUserId ? "right" : "left",
													}}
												>
													{messages.message}
												</span>
											</div>
										);

									})}
							</div>

							<div style={{ width: "100%", display: "flex", flex: 0.08 }}>
								<input
									value={chatMessage}
									onChange={(e) => setChatMessage(e.target.value)}
									style={input}
									type="text"
									placeholder="Type message..."
								/>
								<IconButton onClick={sendMessage}>
									<SendIcon style={{ margin: 10 }} />
								</IconButton>
							</div>
						</Paper>
					</div>

					</TimeTrackerStyling>
				</div>
			</div>


		</div>


	);
}

const box = {
	display: "flex",
	flexDirection: "row",
	flex: 1,
	width: "100%",
	mt:"10%"
};

const left = {
	display: "flex",
	flex: 0.2,
	height: "95vh",
	margin: 10,
	flexDirection: "column",
};

const right = {
	display: "flex",
	flex: 0.8,
	height: "95vh",
	margin: 10,
	flexDirection: "column",
};

const input = {
	flex: 1,
	outline: "none",
	borderRadius: 5,
	border: "none",
};

const messagesDiv = {
	backgroundColor: "lightblue",
	padding: 5,
	display: "flex",
	flexDirection: "column",
	flex: 1,
	maxHeight: 460,
	overflowY: "scroll",
};




