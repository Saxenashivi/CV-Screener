console.log("This is a script of CV Screener");
//Data is an array of objects which container information about the user

const data=[
    {name:"Rohan",
     age:35,
     city:"Lucknow",
     language:"JavaScript",
     framework:"Node.js",
     image:'https://randomuser.me/api/portraits/men/75.jpg'
},
    {name:"Nick",
     age:24,
     city:"Lakhimpur kheri",
     language:"Java",
     framework:"Spring-Boot",
     image:'https://randomuser.me/api/portraits/men/76.jpg'
},
    {name:"Jack",
     age:23,
     city:"Lucknow",
     language:"JavaScript",
     framework:"Node.js",
     image:'https://randomuser.me/api/portraits/men/77.jpg'
},
    {name:"Ratal",
     age:21,
     city:"Lucknow",
     language:"JavaScript",
     framework:"Node.js",
     image:'https://randomuser.me/api/portraits/men/78.jpg'
},
    {name:"Yons",
     age:20,
     city:"Lucknow",
     language:"JavaScript",
     framework:"Node.js",
     image:'https://randomuser.me/api/portraits/men/79.jpg'
}
]

//CV Iterator
function cvIterator(profiles) {
   let nextIndex=0;
   return {
       next:function() {
          return nextIndex<profiles.length?
          {
              value:profiles[nextIndex++],
              done:false
            }:
              {
                  done:true
              }
          } 
       }
    }
const candidates=cvIterator(data);
nextCV();
let next=document.getElementById("next");
next.addEventListener('click',nextCV);
function nextCV() {
    const currentCandidate = candidates.next().value;
    console.log("The button got clicked");
    let image=document.getElementById('image');
    if(currentCandidate != undefined){
    let profile=document.getElementById('profile');
    image.innerHTML=`<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else
    {
        
        alert("End of the profiles");
        window.location.reload();
    }
}