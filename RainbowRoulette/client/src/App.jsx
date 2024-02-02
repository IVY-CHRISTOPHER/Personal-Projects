//* Style Sheets
import './App.css'

//* Imports
import { useState } from 'react'
import './assets/';

function App() {
  var [op, setOp] = useState("Please Choose an Operator" || op)
  const [c, setColor] = useState()
  
  //* MIXED LIST
  const list = [" ",
  "RAM",
  "FENRIR",
  "BRAVA",
  "SOLIS",
  "GRIM",
  "SENS",
  "AZAMI",
  "THORN",
  "OSA",
  "THUNDERBIRD",
  "FLORES",
  "ARUNI",
  "ZERO",
  "ACE",
  "MELUSI",
  "ORYX",
  "IANA",
  "WAMAI",
  "KALI",
  "AMARU",
  "GOYO",
  "NOKK",
  "WARDEN",
  "MOZZIE",
  "GRIDLOCK",
  "NOMAD",
  "KAID",
  "CLASH",
  "MAVERICK",
  "MAESTRO",
  "ALIBI",
  "LION",
  "FINKA",
  "VIGIL",
  "DOKKAEBI",
  "ZOFIA",
  "ELA",
  "YING",
  "LESION",
  "MIRA",
  "JACKAL",
  "HIBANA",
  "ECHO",
  "CAVEIRA",
  "CAPITAO",
  "BLACKBEARD",
  "VALKYRIE",
  "BUCK",
  "THERMITE",
  "MONTAGNE",
  "TWITCH",
  "DOC",
  "ROOK",
  "JAGER",
  "BANDIT",
  "BLITZ",
  "IQ",
  "FUZE",
  "GLAZ",
  "TACHANKA",
  "KAPKAN",
  "FROST",
  "MUTE",
  "SLEDGE",
  "SMOKE",
  "THATCHER",
  "ASH",
  "CASTLE",
  "PULSE",
  "TUBARAO"]
  //* DEFENDERS LIST
  const dlist = [" ",
  "TUBARAO",
  "FENRIR",
  "SOLIS",
  "AZAMI",
  "THORN",
  "THUNDERBIRD",
  "ARUNI",
  "MELUSI",
  "ORYX",
  "WAMAI",
  "GOYO",
  "WARDEN",
  "MOZZIE",
  "KAID",
  "CLASH",
  "MAESTRO",
  "ALIBI",
  "VIGIL",
  "ELA",
  "LESION",
  "MIRA",
  "ECHO",
  "CAVIERA",
  "VAKYRIE",
  "FROST",
  "MUTE",
  "SMOKE",
  "CASTLE",
  "PULSE",
  "DOC",
  "ROOK",
  "JAGER",
  "BANDIT",
  "TACHANKA",
  "KAPKAN"
  ]
//* ATTACKERS LIST
  const alist = [" ",
  "RAM",
  "BRAVA",
  "GRIM",
  "SENS",
  "OSA",
  "FLORES",
  "ZERO",
  "ACE",
  "IANA",
  "KALI",
  "AMARU",
  "NOKK",
  "GRIDLOCK",
  "NOMAD",
  "MAVERICK",
  "LION",
  "FINKA",
  "DOKKAEBI",
  "ZOFIA",
  "YING",
  "JACKAL",
  "HIBANA",
  "CAPITAO",
  "BLACKBEARD",
  "BUCK",
  "SLEDGE",
  "THATCHER",
  "ASH",
  "THERMITE",
  "MONTAGNE",
  "TWITCH",
  "BLITZ",
  "IQ",
  "FUZE",
  "GLAZ"
  ]

  const RandomOp = () => {
    var a = Math.floor(Math.random() * 69) + 1
    console.log(list[a])
    // alert(a)
    setOp(list[a])

    var hex = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(hex)
    console.log(c)
  }

  const DRandomOp = () => {
    var a = Math.floor(Math.random() * 34) + 1
    console.log(dlist[a])
    // alert(a)
    setOp(dlist[a])

    var hex = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(hex)
    console.log(c)
  }

  const ARandomOp = () => {
    var a = Math.floor(Math.random() * 34) + 1
    console.log(alist[a])
    // alert(a)
    setOp(alist[a])

    var hex = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(hex)
    console.log(c)
  }

  return (
    <div className='main'>
      <h1 style={{ color: `${c}` }}>{op}</h1>
      <button onClick={RandomOp}>Click to choose random operator</button>
      <button onClick={ARandomOp}>Click to choose random Attacker</button>
      <button onClick={DRandomOp}>Click to choose random Defender</button>
    </div>
  )
}


export default App