import { Outlet } from "react-router-dom"
//import "./Home.css"

export default function Home() {
    return (
        <>
            <div class="chat-notification">
                <div class="chat-notification-logo-wrapper">
                    <img class="chat-notification-logo" src="https://www.rastreator.com/wp-content/themes/rastreator/assets/img/autonomos/autonomos-icon-aseguradoras.svg" alt="ChitChat Logo"/>
                    <link href="./output.css" rel="stylesheet"></link>
                </div>
                <div class="chat-notification-content">
                    <h4 class="chat-notification-title">ChitChat</h4>
                    <p class="chat-notification-message">You have a new message!</p>
                </div>
            </div>
            <Outlet /></>

    )
}