import React, { useRef } from 'react'

function ChatHeader({ user, chatContainerRef, swipeContainerRef }) {
  const menuButtonRef = useRef(null)

  function handleHamburgerClick() {
    menuButtonRef.current.classList.toggle('active')
  }

  function handleMatchesChatClick() {
    if (!chatContainerRef.current.classList.value.includes('active')) {
      chatContainerRef.current.classList.toggle('active')
      swipeContainerRef.current.classList.toggle('inactive')
      menuButtonRef.current.classList.toggle('active')
    }
  }

  function handleSeeUsersClick() {
    if (swipeContainerRef.current.classList.value.includes('inactive')) {
      swipeContainerRef.current.classList.toggle('inactive')
      chatContainerRef.current.classList.toggle('active')   
      menuButtonRef.current.classList.toggle('active')   
    }
  }

  return (
    <div className="chat-header">
      <div className="chat-header-photo-name">
        <img className="profile-photo" src={user.url1} alt="profile" />
        <h1>{user.first_name}</h1>    
      </div>
      <div className="mobile-menu">
        <div className="mobile-button" ref={menuButtonRef}>
          <button 
            id="matches-chat" 
            onClick={handleMatchesChatClick}>
              Matches/Chat
          </button>
          <button 
            id="see-users" 
            onClick={handleSeeUsersClick}>
              See Users
          </button>
        </div>
        <div className="hamburger-button" onClick={handleHamburgerClick}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader