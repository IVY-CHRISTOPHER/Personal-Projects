//* Style Sheets
import './App.css'

//* Imports
import { useState } from 'react'

function App() {
  var [op, setOp] = useState("Not Available" || op)


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
  }

  const DRandomOp = () => {
    var a = Math.floor(Math.random() * 34) + 1
    console.log(dlist[a])
    // alert(a)
    setOp(dlist[a])
  }

  const ARandomOp = () => {
    var a = Math.floor(Math.random() * 34) + 1
    console.log(alist[a])
    // alert(a)
    setOp(alist[a])
  }

  return (
    <div>
      <h1>Your Operator Is {op}</h1>
    <button onClick={RandomOp}>Click to choose random operator</button>
    <button onClick={ARandomOp}>Click to choose random Attacker</button>
    <button onClick={DRandomOp}>Click to choose random Defender</button>
    </div>
  )
}


export default App