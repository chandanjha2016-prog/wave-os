
import { useState } from 'react'

export default function WaveOS() {
  const [selected, setSelected] = useState(null)
  
  const locations = [
    {name: "Goa - Calangute Beach", waveHeight: "2.3m", period: "8s", direction: "SW", risk: "MEDIUM", color: "#F57C00", icon: "🏄"},
    {name: "Mumbai - Juhu Beach", waveHeight: "1.8m", period: "6s", direction: "W", risk: "LOW", color: "#2E7D32", icon: "🌊"},
    {name: "Chennai - Marina Beach", waveHeight: "3.1m", period: "10s", direction: "SE", risk: "HIGH", color: "#D32F2F", icon: "⚠️"},
    {name: "Puri - Odisha Coast", waveHeight: "2.7m", period: "9s", direction: "E", risk: "MEDIUM", color: "#F57C00", icon: "🏄"},
    {name: "Kochi - Kerala", waveHeight: "1.5m", period: "5s", direction: "SW", risk: "LOW", color: "#388E3C", icon: "🎣"},
    {name: "Port Blair - Andaman", waveHeight: "4.2m", period: "12s", direction: "S", risk: "EXTREME", color: "#B71C1C", icon: "🚨"},
  ]

  const getRiskColor = (risk) => {
    if(risk === "LOW") return "#4CAF50"
    if(risk === "MEDIUM") return "#FF9800"
    if(risk === "HIGH") return "#F44336"
    return "#9C27B0"
  }

  return (
    <div style={{background: 'linear-gradient(180deg, #001E3C 0%, #003366 50%, #00509E 100%)', color: '#FFF', minHeight: '100vh', padding: '30px', fontFamily: 'Arial', position: 'relative', overflow: 'hidden'}}>
      
      {/* Wave Animation Background */}
      <div style={{position: 'absolute', bottom: 0, left: 0, width: '100%', height: '200px', background: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCI+PHBhdGggZD0iTTAgNjAgUTMwIDkwIDYwIDYwIFQ5MCA2MCBU120IDYwIFYxMjAgSDBaIiBmaWxsPSIjMDA1MDlFIiBvcGFjaXR5PSIwLjUiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiBkdXI9IjNzIiByZXBlYXQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMCAwOzMwIDA7MCAwIi8+PC9wYXRoPjwvc3ZnPg==) repeat-x', animation: 'wave 3s linear infinite'}}></div>
      
      <style>{`@keyframes wave {0% {background-position-x: 0;} 100% {background-position-x: 1200px;}}`}</style>

      <div style={{position: 'relative', zIndex: 2}}>
        <h1 style={{fontSize: '45px', textAlign: 'center', textShadow: '0 0 20px #00BFFF'}}>🌊 WAVE OS</h1>
        <p style={{textAlign: 'center', fontSize: '16px', opacity: 0.9}}>Ocean Wave Height & Surf Monitoring System</p>
        <p style={{textAlign: 'center', fontSize: '14px', opacity: 0.7}}>Built by Chandan Jha | Jamalpur, Bihar | 2026</p>
        
        {/* Stats Bar */}
        <div style={{display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px', flexWrap: 'wrap'}}>
          <div style={{background: 'rgba(0,0,0,0.3)', padding: '15px 25px', borderRadius: '10px'}}>
            <p style={{margin: 0, fontSize: '12px'}}>MONITORED COASTS</p>
            <p style={{margin: 0, fontSize: '24px', fontWeight: 'bold'}}>6</p>
          </div>
          <div style={{background: 'rgba(0,0,0,0.3)', padding: '15px 25px', borderRadius: '10px'}}>
            <p style={{margin: 0, fontSize: '12px'}}>AVG WAVE</p>
            <p style={{margin: 0, fontSize: '24px', fontWeight: 'bold'}}>2.6m</p>
          </div>
          <div style={{background: 'rgba(0,0,0,0.3)', padding: '15px 25px', borderRadius: '10px'}}>
            <p style={{margin: 0, fontSize: '12px'}}>ALERTS</p>
            <p style={{margin: 0, fontSize: '24px', fontWeight: 'bold'}}>2 HIGH</p>
          </div>
        </div>

        {/* Wave Cards */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginTop: '40px', maxWidth: '1300px', margin: '40px auto'}}>
          {locations.map((loc, idx) => (
            <div 
              key={loc.name} 
              onClick={() => setSelected(idx)}
              style={{
                background: `linear-gradient(135deg, ${loc.color} 0%, #000 100%)`, 
                padding: '25px', 
                borderRadius: '15px', 
                boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
                border: selected === idx ? '3px solid #00BFFF' : '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2 style={{fontSize: '20px', margin: '0 0 15px 0'}}>{loc.icon} {loc.name}</h2>
                <span style={{background: getRiskColor(loc.risk), padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold'}}>{loc.risk}</span>
              </div>
              
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '15px'}}>
                <p style={{margin: '8px 0'}}><b>Wave Height:</b> {loc.waveHeight}</p>
                <p style={{margin: '8px 0'}}><b>Period:</b> {loc.period}</p>
                <p style={{margin: '8px 0'}}><b>Direction:</b> {loc.direction}</p>
                <p style={{margin: '8px 0'}}><b>Status:</b> ACTIVE</p>
              </div>

              {loc.risk === "HIGH" || loc.risk === "EXTREME" ? 
                <div style={{background: 'rgba(255,0,0,0.2)', padding: '10px', borderRadius: '8px', marginTop: '15px'}}>
                  ⚠️ <b>Warning:</b> No swimming. Fishermen advised not to go to sea.
                </div> : 
                <div style={{background: 'rgba(0,255,0,0.1)', padding: '10px', borderRadius: '8px', marginTop: '15px'}}>
                  ✅ <b>Safe:</b> Good for surfing and fishing
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
