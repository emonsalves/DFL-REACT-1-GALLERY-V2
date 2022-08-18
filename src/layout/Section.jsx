import Card from "../components/Card"

function Section({digimons}) {
  return (
    <div className = "flex justify-center flex-wrap mt-11 pt-12 gap-3 bg-slate-400 min-h-screen">
      <Card digimons={digimons[0]}/>
      <Card digimons={digimons[1]}/>
      <Card digimons={digimons[2]}/>
      <Card digimons={digimons[3]}/>
      <Card digimons={digimons[4]}/>
      <Card digimons={digimons[5]}/>
      <Card digimons={digimons[6]}/>
      <Card digimons={digimons[7]}/>
      <Card digimons={digimons[8]}/>
      <Card digimons={digimons[9]}/>
      <Card digimons={digimons[10]}/>
      <Card digimons={digimons[11]}/>
    </div>
  )
}

export default Section
