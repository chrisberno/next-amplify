// pages/iframe.js
import Iframe from 'react-iframe';
export default function Home() {
    
    return (
    <div>
      <Iframe url="https://admin.connie.one/" allow="camera, microphone"
        margin='0px'
        width='100%'
        height='100%'
        scrolling='auto'
        allowFullScreen='true'
        position='absolute'
        />
    </div>
    )
}