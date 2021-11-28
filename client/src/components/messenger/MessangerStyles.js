import styled from 'styled-components';
export const MessangerSection = styled.div`
	padding: 160px 0;
	
	
	background: #101522;
`;
/*********/
export const MessangerWrapper = styled.div`

	@media screen and (max-width: 960px) {
		margin: 0 30px;
		
	}
`;
export const MeessangerContent = styled.div`
height: calc(100vh - 70px);
display: flex;
`
export const ChatMenu = styled.div`
flex:3.5;
`
export const ChatBox = styled.div`
flex:5.5;

`
export const ChatOnlineMessanger = styled.div`
flex:3;

`
       
export const ChatMenuWrapper = styled.div`
height:100% ;
`
export const ChatBoxWrapper = styled.div`
height:100% ;
display: flex;
flex-direction: column;
justify-content: space-between;

`
export const ChatOnlineWrapper = styled.div`
height:100% ;
margin-left: 50px;
`
export const ChatMenuInput = styled.input`
width: 90%;
padding: 10px 0;
border: none;
border-bottom: 1px solid gray;

`

export const ChatBoxTop = styled.div`
height: 100%;
overflow-y: scroll;
padding-right: 10px;

`

export const ChatBoxBottom = styled.div`
margin-top: 5px;
display: flex;
align-items: center;
justify-content: space-between;
`

export const ChatBoxTextarea = styled.textarea`

width: 80%;
height: 90px;
padding: 10px;
`
export const ButtonChat = styled.button`

width: 70px;
height:40px ;
border: none;
border-radius: 5px;
cursor: pointer;
background-color: orange;
color: white;
`