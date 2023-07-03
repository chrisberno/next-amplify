// pages/iframe.js
import Iframe from 'react-iframe';
export default function Home() {
    
    return (
    <div>
      <Iframe url="https://flex.twilio.com/limerick-trout-8174" 
        allow="camera *;microphone *"
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