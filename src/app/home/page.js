
'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { useState } from 'react'

import { BBullet, BZtxt, CBList, Footer, Spacer, TabBar, Vdiv, Work } from '../cmp/Components'

function BZList({ items, height }) {
  return (
    <div style={{display:'flex', flexDirection: 'column', height: height}}>
      {items.map((item, i) => {
        return <div key={i} style={{display:'flex', flexGrow: 1, alignItems:'center', gap:'8px'}}>
          <p style={{margin: 0, color: 'rgb(60,60,60)'}}>&rArr;</p>
          <p style={{margin: 0, color: 'rgb(220,220,220)'}}>{item.txt}</p>
        </div>
      })}
    </div>
  )
}

function BZList2({ items, height }) {
  return (
    <div style={{display:'flex', flexDirection: 'column', height: height}}>
      {items.map((item, i) => {
        return <div key={i} style={{display:'flex', flexGrow: 1, alignItems:'center', gap:'8px'}}>
          <p style={{margin: 0, color: 'rgb(238, 0, 254)'}}>&diams;</p>
          <p style={{margin: 0, color: 'rgb(220,220,220)'}}>{item.txt}</p>
        </div>
      })}
    </div>
  )
}

function EndMeeting() {
  const initials = [
    'BM',
    'GT',
    'WA',
    'BC',
    'DR',
    'DP'
  ]

  function CloseButton() {
    const style = { 
      position: 'absolute',
      zIndex: '2',
      height:'7px', 
      width: '7px', 
      margin: '0 0 125px 200px',
      borderRadius: '5px', 
      background: 'red'
    }
    return (
      <div style={style}></div>
    )
  }

  function Popup() {
    const style = {
      background: 'rgb(235,235,235)',
      borderRadius: '8px',
      width: '100px',
      height: '50px',
      position: 'absolute',
      zIndex: '2',
      textAlign: 'center'
    }
    return (
      <div style={style}>
        <p style={{color: 'black', fontSize: '8px', marginBottom: '10px'}}>Meeting has ended</p>
        <div style={{background: 'rgb(200,200,200)', width: '100px', height: '0.5px'}}></div>
        <p style={{color: 'rgb(0, 167, 250)', fontSize: '8px'}}>Close</p>
      </div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', height: '150px', width: '225px', background: 'white', borderRadius: '10px'}}>
        <div style={{display:'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap:'15px'}}>
          {initials.map((initial, i) => { 
            return <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + (i * 0.25) }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background:'rgb(210,210,210)',
                  borderRadius: '50%',
                  width: 50,
                  height: 50
                }}>
                  <p style={{position: 'absolute', color: 'rgb(40,40,40)'}}>{initial}</p>
                </div>
            </motion.div>
          })}          
        </div>
        <CloseButton/>
        <motion.div
          style={{position: 'absolute', zIndex: '2', display:'flex', justifyContent:'center', alignItems:'center'}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7 }}
        >
          <Popup/>
        </motion.div>
      </div>
    </motion.div>
  )
}

function IntroDiv() {
  return (
    <div id='intro'>
      <Title/>
      <Subtitle/>
      <BZList items={[
        {txt: 'We believe in a message-driven culture'},
        {txt: 'Productivity over processes and legacy'},
        {txt: 'Agile has never been so lightweight'}
      ]} height={'120px'}/>
      {/* <TryUs/> */}
      <Spacer height={100}/>
      <FrictionPointDiv/>
    </div>
  )
}

function AnimDiv() {
  return (
    <div id='intro' style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: '250px',
      marginTop: '100px',
      gap: '120px'
    }}>
      <Anim/>
      <EndMeeting/>
    </div>
  )
}



function Anim() {
  const [state, setState] = useState(0)

  setTimeout(() => {
    setState([...Array(8)].map(_ => Math.round(Math.random())).join(''))
  }, 80)

  const leftLaptopMeta = {
    imgLink: '/mac1.png',
    width: '55',
    height: '60',
    margin: '',
    alt: 'Laptop'
  }

  const rightLaptopMeta = {
    imgLink: '/mac2.png',
    width: '55',
    height: '38',
    margin: '11px 0 0 0',
    alt: 'Laptop'
  }

  function Laptop({ meta }) {
    return <Image 
      src={meta.imgLink}
      width={meta.width}
      height={meta.height}
      style={{margin: meta.margin, width: meta.width, height: meta.height}} 
      alt={meta.alt}
    />
  }

  return (
    <div style={{display: 'flex', gap:'10px'}}>
      <Laptop meta={leftLaptopMeta}/>
      <motion.div
      style={{marginTop: '10px', width: '180px'}}
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 100, opacity: [0,1,0] }}
      transition={{
        duration: 1,
        delay: 0.5,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 8
      }}
      >
        <pre id='txt-transfer' className='txt-glow'>{state}</pre>
      </motion.div>
      <Laptop meta={rightLaptopMeta}/>
    </div>
  )
}

function Title() {
  return (
    <div>
      <p id='title'>Berzerk</p>
    </div>
  )
}

function Subtitle() {
  return (
    <div>
      <p id='subtitle'>Accelerated Agile Development</p>
    </div>
  )
}

function TryUs() {
  return <div style={{display: 'flex', gap: '5px', alignItems: 'center'}}>
    <p style={{color: 'rgb(220,220,220)'}}>Try</p>
    <BZtxt/>
    <p style={{color: 'rgb(220,220,220)'}}>free for 30 days</p>
  </div>
}

function ContentPair({ left, right }) {
  return (
    <div className='content-pair'>
      {[left, right].map((k, i) => {
        return <div key={i} className='content'>
          {k()}
        </div>
      })}
    </div>
  )
}


// max chars for work item titles

// no more links to Figmas
// embedded video and screenshot
// aesthetically pleasing
// no scrolling
// acceptance criteria automatically defaulted on work with interactible checkbox

// blocked is the same as ready


function WorkBenefits() {
  return (
    <div>
      <BZList2 items={[
        {txt: 'Only the data that matters'},
        {txt: 'Seamlessly linked branches'},
        {txt: 'Simply drag & drop screenshots'},
        {txt: 'Elegant modern design'},
      ]} height={'120px'}/>
    </div>
  )
}

function WorkDesc() {
  function DescTxt({ txt }) {
    return <p style={{color: 'rgb(220,220,220)', fontSize: '14px'}}>{txt}</p>
  }

  function LoginDesign() {
    function LoginField({ txt }) {
      return (
        <div style={{border: '1px solid rgb(26,26,26)', height: '18px', width: '120px', borderRadius: '4px'}}>
          <p style={{color:'rgb(60,60,60)', position: 'absolute', margin: '5px 0 0 5px', fontSize: '8px'}}>{txt}</p>
        </div>
      )
    }

    function Decoration() {
      const json = {
        usr: 'brd',
        pwd: '82$!'
      }

      return (
        <div style={{display: 'flex', textAlign: 'left'}}>
          <pre style={{
            fontSize: '8px',
            color: 'rgb(160,160,160)', 
            textShadow: '0px 0px 15px rgb(46, 190, 238), 0px 0px 12px rgb(46, 190, 238), 0px 0px 15px rgb(46, 190, 238)'
          }}>
            {JSON.stringify(json, null, 2)}
          </pre>
        </div>
      )
    }

    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Spacer height={'15px'}/>
        <b style={{color: 'rgb(238, 0, 254)', textShadow: '0px 0px 12px rgb(222, 218, 218)', fontSize: '20px', marginBottom:8}}>Berzerk</b>
        <Decoration/>
        <Spacer height={'10px'}/>
        <LoginField txt={'Email'}/>
        <Spacer height={'5px'}/>
        <LoginField txt={'Secure password'}/>
        <Spacer height={'5px'}/>
        <div style={{
          border: 'none',
          background:'rgb(238, 0, 254)', 
          width: '120px',
          height: '18px',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <b style={{color: 'rgb(220,220,220)', fontSize: '8px'}}>Log in</b>
        </div>
        <Spacer height={'8px'}/>
        <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
          <p style={{color: 'rgb(220,220,220)', fontSize: '8px'}}>Don't have an account?</p>
          <b style={{color: 'rgb(238, 0, 254)', fontSize: '8px', textShadow: '0px 0px 5px rgb(192, 191, 191)'}}>Create one</b>
        </div>
        <Spacer height={'20px'}/>
        <CBList txt={'Golden image & unit tests'}/>
        <CBList txt={'Code merged + pipeline succeeded'}/>
      </div>
    )
  }

  return (
    <div style={{}}>
      <DescTxt txt={'The login screen should allow users to enter'}/>
      <BBullet txt={'email'} color={'rgb(220,220,220)'}/>
      <Spacer height={'3px'}/>
      <BBullet txt={'secure password'} color={'rgb(220,220,220)'}/>
      <Spacer height={'5px'}/>
      <LoginDesign/>
      <Spacer height={'20px'}/>
    </div>
  )
}

const workMeta = {
  author: 'Braeden Meikle',
  pfp: 'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg',
  app: 'Web',
  title: 'Make login screen for site',
  desc: WorkDesc,
  branch: 'ftr/8022-make-login-screen',
  status: 'Feature',
  statusColor: 'rgb(238, 0, 254)'
}

function WorkDiv() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', gap: '25px', paddingTop:'50px'}}>
      <Work meta={workMeta} isMerging={true} isToggled={true}/>
      <WorkBenefits/>
    </div>
  )
}

const sections = [
  {left: IntroDiv, right: AnimDiv},
  {left: WorkDiv, right: SurveyDiv},
]



function SurveyDiv() {
  function Asterisk() {
    return <p style={{color: 'rgb(110,110,110)', fontSize: '12px'}}>*</p>
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: '3px'}}>
        <p style={{color: 'rgb(220,220,220)', fontSize: '24px'}}>We surveyed hundreds of software engineers and managers</p>
        <Asterisk/>
      </div>
      <BZList items={[
        {txt: '55% unaware or vaguely unaware of OKRs'},
        {txt: '75% of work item features unused'},
        {txt: '68% reported purpose by work item metrics/optics'}
      ]} height={'120px'}/>
      <div style={{display: 'flex', alignItems: 'center', gap: '3px'}}>
        <Asterisk/>
        <p style={{color: 'rgb(110,110,110)', fontSize: '10px'}}>
          222 engineers and 128 managers from FAANG and startup companies were polled
        </p>
      </div>
      <div>
        <p className='txt'>Less meetings and more doing, that's why our work items are automated</p>
      </div>
    </div>
  )
}

function FrictionPointDiv() {
  function Circle({ dx, dy, color }) {
    return <div style={{
      position: 'absolute',
      zIndex: 2,
      width: '6px', 
      height: '6px', 
      background: color, 
      borderRadius: '50%',
      transform: `translate(${dx}px,${dy}px)`
    }}/>
  }

  function Line({ dx, dy, theta, width }) {
    return <div style={{
      position: 'absolute',
      zIndex: 0,
      width: `${width}px`, 
      background: 'rgb(75,75,75)', 
      height: '1px',
      transform: `translate(${dx}px,${dy}px) rotate(${theta}deg)`
    }}/>
  }

  function OldFrictionPoints() {
    const color = 'rgb(180,180,180)'
  
    return (
      <div>
        <Circle dx={0} dy={-1} color={color}/>
        <Line dx={-14} dy={8} theta={-45} width={20}/>
        <Circle dx={12} dy={8} color={color}/>
        <Line dx={4} dy={6} theta={42} width={10}/>
        <Circle dx={3} dy={20} color={color}/>
        <Line dx={4} dy={15} theta={-52} width={15}/>
        <Circle dx={-14} dy={12} color={color}/>
        <Line dx={8} dy={21} theta={-8} width={11}/>
        <Circle dx={16} dy={18} color={color}/>
        <Line dx={21} dy={17} theta={-18} width={16}/>
        <Circle dx={34} dy={12} color={color}/>
      </div>
    )
  }
  
  function NewFrictionPoints() {
    const color = 'rgb(238, 0, 254)'
  
    return (
      <div>
        <Circle dx={-14} dy={6} color={color}/>
        <Line dx={-10} dy={8.5} theta={0} width={20}/>
        <Circle dx={10} dy={6} color={color}/>
        <Line dx={15} dy={8.5} theta={0} width={20}/>
        <Circle dx={34} dy={6} color={color}/>
      </div>
    )
  }

  return (
    <div style={{display: 'flex', gap: '60px', flexDirection: 'column'}}>
      <div style={{display: 'flex'}}>
        <OldFrictionPoints/>
        <p style={{color:'white', position: 'absolute', marginLeft: '150px', marginTop: '5px'}}>
          Legacy software development
        </p>
      </div>
      <div style={{display: 'flex'}}>
        <NewFrictionPoints/>
        <b style={{display: 'inline', marginLeft: '150px', color: 'rgb(238, 0, 254)', textShadow: '0px 0px 10px rgb(222, 218, 218)'}}>Berzerk</b>
        <p style={{color:'white', position: 'absolute', marginLeft: '214px', marginTop: '0px'}}>
          software development
        </p>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div>
      <TabBar/>
      <Vdiv/>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      >
        {sections.map((section, i) => {
          return <div key={i} ><ContentPair left={section.left} right={section.right}/><Vdiv/></div>
        })}
        <Footer/>
      </motion.div>
    </div>
  )
}