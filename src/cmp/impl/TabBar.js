import { useNavigate } from 'react-router-dom'

function TabBar() {
  const navigate = useNavigate()

  const tabs = [
    {txt: 'About Berzerk', action: () => { navigate('/home') }},
    {txt: 'Dashboard', action: () => { navigate('/dashboard') }},
    {txt: 'Log in', action: () => { navigate('/login') }},
  ]

  return (
    <div style={{display: 'flex', width: 'fit-content', paddingBottom: '10px', paddingTop: '5px', zIndex: 1}}>
      <div style={{display: 'flex', paddingLeft: 80, paddingRight: 80, zIndex: 1, background: 'black'}}>
        {tabs.map((tab, i) => {
          return <div key={i} style={{display: 'flex', justifyContent: 'space-between', zIndex: 1, background:'black'}}>
            <button className='tab-btn' onClick={tab.action}>
              <p className='tab'>{tab.txt}</p>
            </button>
            {i < tabs.length-1 ? <div style={{
              height: '40px',
              width: '1px',
              backgroundClip: 'content-box',
              margin: '0 80px 0 80px',
              background: 'linear-gradient(rgb(20,20,20), rgb(70,70,70), rgb(20,20,20))'
            }}/> : null}
          </div>
        })}
      </div>
    </div>
  )
}

export { TabBar }