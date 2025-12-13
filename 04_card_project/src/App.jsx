import React from 'react'
import Card from './component/Card'

const App = () => {


  const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: 70,
    location: "Remote"
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/15/1/apple-logo-png_seeklogo-158010.png",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/017/396/814/non_2x/netflix-mobile-application-logo-free-png.png",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 75,
    location: "Remote"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 50,
    location: "Pune, India"
  },
  {
    brandLogo: "https://pngimg.com/d/tesla_logo_PNG12.png",
    companyName: "Tesla",
    datePosted: "6 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 80,
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0HvtEK-V3UTGTB9TJuvsE3gDhJFi52YuELA&s",
    companyName: "Uber",
    datePosted: "12 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://freepnglogo.com/images/all_img/1707660877airbnb-logo-icon.png",
    companyName: "Airbnb",
    datePosted: "8 days ago",
    post: "Product Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 68,
    location: "Remote"
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/42/1/open-ai-logo-png_seeklogo-428036.png",
    companyName: "OpenAI",
    datePosted: "10 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 90,
    location: "Remote"
  }
];


  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
          return <Card key={idx} company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} location={elem.location}/>
      })}
    </div>
  )
}

export default App