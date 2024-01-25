import { Box, Grid, GridItem } from "@chakra-ui/layout";
import { useState, useEffect } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import axios from "axios";

const ChatPage = () => {
    const [fetchAgain, setFetchAgain] = useState(false);
    const { user } = ChatState();

    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: '20px' }}>{user && <SideDrawer />}</div>

            <div style={{ display: "flex", flexDirection: "row", flex: 1, }}>
                {user && (
                    <MyChats fetchAgain={fetchAgain} style={{ flex: '0 0 25%', maxWidth: '25%', margin: '0 10px' }} />
                )}
                {user && (
                    <Chatbox
                        fetchAgain={fetchAgain}
                        setFetchAgain={setFetchAgain}
                        style={{ flex: '0 0 65%', maxWidth: '65%', margin: '0 10px' }}
                    />
                )}
            </div>

        </div>
    );
}

export default ChatPage;
