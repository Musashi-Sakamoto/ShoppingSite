import React from 'react'

import { VideoDiv, Container } from './styles'

const VideoNav = () => {
  return (
    <Container>
      <VideoDiv>
        <iframe
          id="player"
          frameborder="0"
          allowFullScreen="1"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/JQbjS0_ZfJ0?autoplay=1&amp;controls=0&amp;loop=1&amp;showinfo=0&amp;autohide=1&amp;rel=0&amp;mute=1&amp;index=4&amp;enablejsapi=1&amp;widgetid=1&amp;modestbranding=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </VideoDiv>
    </Container>
  )
}

export default VideoNav
