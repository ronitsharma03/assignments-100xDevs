
import { BussinessCard } from './components/BussinessCard'

function App() {
  const data = [
  {
    fullName: "Ronit khajura",
    desc: "A undergrad student",
    interest: ["Web3", "Ethical hacking", "open Source"],
    socialMedia: 
      {
        tagName: ["Linkedin", "Twitter", "Github"],
        links: ["https://www.linkedin.com/in/ronit-khajuria-394609228/", "https://twitter.com/devXronit", "https://github.com/ronitsharma03"]
      }
    
  },
  {
    fullName: "Ronit khajura",
    desc: "A undergrad student",
    interest: ["Web3", "Ethical hacking", "open Source"],
    socialMedia: 
      {
        tagName: ["Linkedin", "Twitter", "Github"],
        links: ["https://www.linkedin.com/in/ronit-khajuria-394609228/", "https://twitter.com/devXronit", "https://github.com/ronitsharma03"]
      }
    
  }
]
  return <>
    <BussinessCard data={data}/>
  </>
}


export default App