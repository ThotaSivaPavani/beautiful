fetch("data.json")
.then((response)=>{
  return response.json();
}).then((data)=>{
   console.log(data);
    display_info(data.basics);
})
var bodyElement=document.querySelector("#root");
function display_info(info){
  let card=document.createElement("div");
  card.classList.add("card");

  let heading=document.createElement("h1");
  heading.textContent=info.name;
  bodyElement.append(card);
  card.append(heading);

  let line=document.createElement("hr")
card.append(line);

  let details=document.createElement("h2");
  details.textContent=info.role;
  bodyElement.append(card);
  card.append(details);

  let email=document.createElement("a");
  email.href="emailto:"+info.email;
  email.textContent=info.email;
  bodyElement.append(card);
  card.append(email);
  
  let br=document.createElement("br");
  card.append(br);

  let br1=document.createElement("br");
  card.append(br1);
   
  let mobile=document.createElement("a");
  mobile.href="tel:"+info-mobile;
  mobile.textContent=info.mobile;
  card.append(mobile);

  let br2=document.createElement("br");
  card.append(br2);

  let br3=document.createElement("br");
  card.append(br3);

  var button=document.createElement("a");
  button.textContent="View Profile";
  button.classList.add("btn");
  card.append(button);


}


