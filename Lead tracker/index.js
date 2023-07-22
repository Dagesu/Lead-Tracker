let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn= document.getElementById("delete-btn")
const tabBtn= document.getElementById("tab-btn")
const leadsFromLocalStorage =JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

function render(leads){
let listItems = ""
for(let i = 0; i<leads.length; i++){
   //listItems += "<li><a href = ' " + myLeads[i] +" ' target = '_blank'>" + myLeads[i] + "</li> "}
   listItems += `
        <li>
            <a  target = '_blank' href = '${leads[i]}'>
            ${leads[i]}
            </a>
        </li> `
}
   ulEl.innerHTML = listItems
}
let tab = {
    url:["www.google.com"]}
tabBtn.addEventListener("click", function(){
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
})
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads= []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value) 
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads) 
    //     console.log(myLeads)
// myLeads.push(inputEl.value)
})
   // const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)
//

//"HI.com", "BYE.com","google.com"