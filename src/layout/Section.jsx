import Card from "../components/Card"
function Section({digimons}) {
  return (
    <div className ="flex flex-wrap mt-10 pt-10 m-1 gap-3 justify-center">
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
