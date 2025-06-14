// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'

function App(){

  const entryElements=data.map((entry)=>{
    return(
      <Entry
      key={entry.id}
      // img={entry.img}
      // title={entry.title}
      // country={entry.country}
      // googleMapsLink={entry.googleMapsLink}
      // dates={entry.dates}
      // text={entry.text}

      // entry={entry}
      
      {...entry} // spread our prop
      />
    )
  })

  return(
    <>
    <Header/>
    <main className="container">
      {entryElements}
    </main>
    {/* <Entry
        img.src ="/src/assets/images/mount-fuji.jpg"
        alt="Mount Fuji Image"
        country="japan"
        googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        title="Mount Fuji"
        dates="12 Jan, 2021 - 24 Jan, 2021"
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    /> */}
    {/* <Entry
        img.src= "/src/assets/images/opera-house.jpg"
        alt="Sydney Opera House Image"
        country="Australia"
        googleMapsLink= "https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2152967,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        title="Sydney Opera House"
        dates="27 May, 2023 - 8 Jun, 2023"
        text="The Sydney Opera House is a multi-venue performing arts centre in Sydney, New South Wales, Australia. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture."
    />
    <Entry
        img.src="/src/assets/images/norway-image.jpg"
        alt="Geirangerfjord Image"
        country="norway"
        googleMapsLink="https://www.google.com/maps/place/Geirangerfjord/@62.1047507,6.9098347,11z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        title="Geirangerfjord"
        dates="01 Oct, 2024 - 18 Nov, 2024"
        text="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality. It is a 15-kilometre-long branch off the Sunnylvsfjorden, which is a branch off the Storfjorden."
    /> */}
    </>
  );
}

export default App

