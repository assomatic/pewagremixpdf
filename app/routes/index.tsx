import BasicDocument from '../components/Basicdocument'

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to react-PDF/renderer</h1>
      <h2>🥳 We're live! 🥳</h2>
      <div>
        {typeof window !== 'undefined'
          ? 'You are on the browser - You are good to go'
          : 'You are on the server - Cannot execute'}
      </div>
      <div>
        {typeof window !== 'undefined'
          ? `${window.innerHeight} height, ${window.innerWidth} width`
          : 'Da geht was net!'}
      </div>
      <div>
        <BasicDocument />
      </div>
    </div>
  )
}
