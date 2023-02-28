/***********  Experience and Education Starts Here ***********/
/*********** global root elements ***********/
const formCaontainer = document.querySelector(".formCaontainer");
const position = document.getElementById("position");
const positionDialog = document.getElementById("positionDialog");
const educationDialog = document.getElementById("educationDialog");

/*********** global variables for experience section ***********/
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const years = Array.from({ length: 14 }, (_, i) => i + 2010);

let expGlobalId = 0;
let expFormId=Math.random()*10
let eduGlobalId = 0;
let eduFormId=Math.random()*10
/*********** get each saved data **********/
const experienceData=[]
const educationData=[]
let industryData={};
let photoData={photos:[]};
let summaryData={};
/*********** load multiple forms eduction and experinces respectively and dynamically here we have static form structure and whenever user clicks on add more then the same structure will added  ***********/

function staticForms(type) {
  const uniqueForm = `
  ${type==="experience" ?  `<label for="role">
  Role*
  <input
    type="text"
    name="role"
    id="role"
    class="role"
    placeholder="Ex: Ratail Sales Manager"
    required
  />
</label>
<p>
  <label
    >Empolyment type
    <select id="employment" name="employment" class="employment" >
      <option value="default">Please select</option>
      <option value="Full time ">Full time</option>
      <option value="Part time ">Part time</option>
      <option value="Self employed ">Self employed</option>
      <option value="Freelancer">Freelancer</option>
      <option value="Trainee">Trainee</option>
      <option value="Intern">Intern</option>
    </select>
  </label>
</p>
<label for="compName">
  Company name*
  <input
    type="text"
    name="compName"
    id="compName"
    class="compName"
    placeholder="Ex: Ratail Sales Manager"
    required
  />
</label>
<label for="Complocation">
  Location
  <input
    type="search"
    name="Complocation"
    id="Complocation"
    class="Complocation"
    placeholder="Ex: Ratail Sales Manager"
  />
</label>
<label for="${expGlobalId+'checkBox'}" >
<input type="checkbox" name="${expGlobalId+'checkBox'}" id="${expGlobalId+'checkBox'}" class="checkboxExp" checked="true"  onchange="addMultipleForms(event,'expToggle')" />
  I am currently working in this role
</label>` :`
</br>
<label for="collegeName">
Company name*
<input
  type="text"
  name="collegeName"
  id="collegeName"
  class="collegeName"
  placeholder="Enter your college name"
  required
/>
</label>
<label for="${eduGlobalId+'checkBox'}" >
<input type="checkbox" name="${eduGlobalId+'checkBox'}" id="${eduGlobalId+'checkBox'}" class="checkboxEdu" checked="true"  onchange="addMultipleForms(event,'toggle')" />
  I am currently studying
</label>`}
  <div class="expDetailsContainer">
    <p>
      <label>Start date: </label>
    </p>
    <div class="subContainer">
    <select class="expStartM" name="${'Startmonth'+expFormId}" id="${'Startmonth'+expFormId}">
      <option value="default">Month</option>
      ${months.map((el, i) => `<option key=${i} value="${el}">${el}</option>`)}
    </select>
    <select name="${'Startyear'+expFormId}" id="${'Startyear'+expFormId}" class="expStartY" >
        <option value="default">Year</option>
        ${years.map((el, i) => `<option key=${i} value="${el}">${el}</option>`)}
      </select>
    </div>
  </div>
  <div class="expDetailsContainer">
    <p>
      <label>End date: </label>
    </p>
    <div class="subContainer">
    <select name="${'Endmonth'+expFormId}" id="${'Endmonth'+expFormId}" class="${'endDisable' + expGlobalId} expEndM " disabled   >
      <option value="default">Month</option>
      ${months.map((el, i) => `<option key=${i}>${el}</option>`)}
    </select>
      <select name="${'Endyear'+expFormId}" id="${'Endyear'+expFormId}" class="${'endDisable' + expGlobalId}  expEndY " disabled   >
        <option value="default">Year</option>
        ${years.map((el, i) => `<option key=${i}>${el}</option>`)}
      </select>
    </div>
    </div>
    <div class="addforms">

    ${type==="experience" ? `<button id="${expFormId}remove" class="controlForms" onclick="removeForm(document.getElementById(${expFormId}),document.getElementById(${expFormId}))">- Remove</button>    <button type="test" id="${expFormId}reset" onclick="resetFielsds(event,document.getElementById(${expFormId}))">Reset</button>`:`    <button id="${eduFormId}remove" class="controlForms" onclick="removeForm(document.getElementById(${eduFormId}))">- Remove</button>    <button type="test" id="${eduFormId}reset" onclick="resetFielsds(event,document.getElementById(${eduFormId}))">Reset</button>`}
    </div>
`;
  return uniqueForm;

}
/*********** Experience starts here ***********/
staticForms("experience");
/*********** Initial default form for experience section ***********/
function loadExpForm() {
  const tempform =
  `<div class="titleConatiner"><h2 class="addExp">Add Experiences</h2><div class="cross closeDailouge"></div></div><button id="${expGlobalId+"add"}" onclick="addMultipleForms(event,'experince')" class="controlForms" >+ Add more</button>
  <form method="dialog" action="#" id="formExperience" >
  <div class="expForms" id="${expFormId}">${staticForms("experience")}</div>  <button id="${'confirmBtn'+expFormId}" type="submit" value="default" style="bottom: 0;">Save</button></form>`
  const divCreate = document.createElement("div");
  divCreate.setAttribute("class", "formContainer");
  divCreate.innerHTML = tempform;
  positionDialog.insertBefore(divCreate, positionDialog.children[0]);
}
/*********** 1st render ***********/
loadExpForm();
/*********** show experience form with dialog show method ***********/
position.addEventListener("click", () => {
  positionDialog.showModal();
});
const formExperience=document.getElementById("formExperience") 
/*********** remove both exp and edu form ***********/
function removeForm(exp,edu){
  exp.remove()
  edu.remove()
}
/*********** rest fields desired field ***********/
function resetFielsds(e,id){
  e.preventDefault(); 

  Object.values((id.children)).forEach((el)=>{
      Object.values(el.children).forEach((lastChild)=>{
        switch(lastChild.localName){
          case "input":
            lastChild.value=""
            break;
          case "label":
            Object.values(lastChild.children).forEach((e)=>{
              e.value="default"
            })
            break;
          default:
            Object.values(lastChild.children).forEach((e)=>{
              e.value="default"})
          break;
        }
      })
  })
}
/*********** save form data for experience ***********/
const expForm=document.getElementById("formExperience")
expForm.addEventListener("submit", (e) => {
  e.preventDefault(); 

  let experiences = {};

/*********** get all the experience form children ***********/
const expForms = document.querySelectorAll('.expForms');
expForms.forEach((form) => {
  const role = form.querySelector('.role').value;
  const employment = form.querySelector('.employment').value;
  const companyName = form.querySelector('.compName').value;
  const Complocation = form.querySelector('.Complocation').value;
  const checkboxExp = form.querySelector('.checkboxExp').value;
  const startMonth = form.querySelector('.expStartM').value;
  const startYear = form.querySelector('.expStartY').value;
  const endMonth = form.querySelector('.expEndM').value;
  const endYear = form.querySelector('.expEndY').value;
   experiences = {
    role:role,
    employmentType:employment,
    Complocation:Complocation,
    companyName: companyName,
    startDate: [
      {month: startMonth},
      {year: startYear}
    ],

  };
  if(!checkboxExp){
    experiences.endDate={
    month: endMonth,
    year: endYear
    }
}
experienceData.push(experiences)
});
 console.log("experienceData",experienceData)
  positionDialog.close();
  alert("check saved data in console")
});


/*********** Education starts here ***********/
const education = document.getElementById("education");
/*********** Initial default form for education section ***********/
function loadEduForm() {
  const tempform =
    `<div class="titleConatiner"><h2 class="addExp">Add Education</h2><div class="cross closeDailouge"></div></div><button id="${eduGlobalId+"add"}" onclick="addMultipleForms(event,'education')" class="controlForms" >+ Add more</button>
<form method="dialog" action="#" id="formEducation" >
<div class="eduForms" id="${eduFormId}">${staticForms("education")}</div>  <button id="${'confirmBtn'+eduFormId}" type="submit" value="default" style="bottom: 0;">Save</button></form>`
  const divCreate = document.createElement("div");
  divCreate.setAttribute("class", "formContainer");
  divCreate.innerHTML = tempform;
  educationDialog.insertBefore(divCreate, educationDialog.children[0]);
  }
/*********** 1st render ***********/
  loadEduForm();
/*********** show experience form with dialog show method ***********/
  education.addEventListener("click", () => {
  educationDialog.showModal();
});
const formEducation=document.getElementById("formEducation")
/*********** handle multiple experience and education forms by adding /***********/
function addMultipleForms( e,arg) {
  console.log(formEducation,"formEducation")
    if(arg === "experince"){
    expFormId=Math.random()*10
    expGlobalId++;
    const divCreate = document.createElement("div");
    divCreate.setAttribute("class", "expForms");
    divCreate.id=expFormId
    divCreate.innerHTML = staticForms("experience");
    formExperience.insertBefore(
      divCreate,
      formExperience.children[formExperience.children.length-1]
      );
    }else if(arg === "education"){
      eduFormId=Math.random()*10
      eduGlobalId++;
      const divCreate = document.createElement("div");
      divCreate.setAttribute("class", "eduForms");
      divCreate.id=expFormId
      divCreate.innerHTML = staticForms("education");
      formEducation.insertBefore(
        divCreate,
        formEducation.children[formEducation.children.length-1]
        );
    }else if(arg === "expToggle") {
      const endDisableClass = "endDisable" + expGlobalId;
      const endDisableElements = positionDialog.querySelectorAll(
        "." + endDisableClass
        );
        for (const x of endDisableElements ){
          
          x.disabled = e.target.checked ? true : false;
        }
      }
      else{
        const endDisableClass = "endDisable" + expGlobalId;
        const endDisableElements = educationDialog.querySelectorAll(
          "." + endDisableClass
          );
          for (const x of endDisableElements ){
            
            x.disabled = e.target.checked ? true : false;
          }
      }
    }
/*********** save form data for education ***********/
formEducation.addEventListener("submit", (e) => {
  e.preventDefault(); 
  let educations = {};
    const eduForms = document.querySelectorAll('.eduForms');
    eduForms.forEach((form) => {
      const collegeName = form.querySelector('.collegeName').value;
      const startMonth = form.querySelector('.expStartM').value;
      const startYear = form.querySelector('.expStartY').value;
      const endMonth = form.querySelector('.expEndM').value;
      const endYear = form.querySelector('.expEndY').value;
      const checkboxEdu = form.querySelector('.checkboxEdu').value;
       educations = {
        collegeName: collegeName,
        startDate: [
          {month: startMonth},
          {year: startYear}
        ],
    
      };
      if(!checkboxEdu){
        educations.endDate={
        month: endMonth,
        year: endYear
        }
    }
    
    educationData.push(educations)
    });
    console.log(educationData)
    educationDialog.close();
    alert("check saved data in console")
  })
/**************** Experience and Education Ends Here ****************/
/*********** Industry section satrts here ***********/
const industry = document.getElementById("industry");
const industryDialog = document.getElementById("industryDialog");
function loadStaticIndustryForm(){
 const tempform = `
<div class="titleConatiner">
<h2 class="addExp">Add Industry</h2>
<div class="cross closeDailouge"></div>
</div>
<h1>Which industry do you work in?</h1>
<form method="dialog" id="industryForm">
<label for="industryInput">
industry*
<input
  type="text"
  name="industryInput"
  id="industryInput"
  placeholder="Ex: Ratail"
  required
/>
</label>
  <p>
  <button id="confirmBtn" type="submit" value="default" style="bottom: -70px;">Save</button>
</p>
</form>
`
const divCreate = document.createElement("div");
divCreate.setAttribute("class", "formContainer");
divCreate.innerHTML = tempform;
industryDialog.append(divCreate)
}
loadStaticIndustryForm()
industry.addEventListener("click", () => {
  industryDialog.showModal();
});
const industryForm=document.getElementById("industryForm")
const industryFormInput=document.getElementById("industryInput")
industryForm.addEventListener("submit",(e)=>{
  e.preventDefault()
   industryData={
    "industry":industryFormInput.value
  }
  console.log(industryData)
  industryDialog.close();
})
/*********** Industry section ends here ***********/
/*********** photo section satrts here ***********/
const photo = document.getElementById("photo");
const photoDialog = document.getElementById("photoDialog");
function loadStaticPhotoForm(){
  const tempform = `<div class="formContainer" id="formContainer">
<div class="titleConatiner">
<h2 class="addExp">Add Photo</h2>
<div class="cross closeDailouge"></div>
</div>
<div id='headings'>
<h2 style="width:60%;text-align: center;align-self: center; margin-bottom:25px;">No professional headshot needed!

Just something that represents you</h2>
<h4 style="width:80%;text-align: center;align-self: center; margin-bottom:25px;">On LinkedIn, we require members to use their real identities, so take or upload a photo of yourself. Then crop, filter, and adjust it to perfection</h4>
</div>
<form type="submit" action="#" id="photoForm">
<div id="showSelectedPhotos">

 </div>
 </br>
<div>
  <button  value="default" style="bottom: -50px;" id="useCamera">Use Camera</button>
  <span> Or </span>
  <label for="file" id="files">
  Upload Photo
  <input onchange="saveImage('upload')" type="file" name="file" id="file" hidden  >
  </label>
  <button id="retake" onclick='clearPhotos(event)'>Reset</button>
  <div id="videoContainer" style="display:none;">
  <button id="captureButton">Capture</button>
  </div>
  <div>
  <button id="confirmBtn" type="submit" value="default" style="bottom: -70px;">Save</button>
  </br>
  </form>
</div>`;
const divCreate = document.createElement("div");
divCreate.setAttribute("class", "formContainer");
divCreate.innerHTML = tempform;
photoDialog.append(divCreate)
}
loadStaticPhotoForm()
const formContainer = document.getElementById("formContainer");
const photoForm = document.getElementById("photoForm");
photo.addEventListener("click", () => {
  photoDialog.showModal();
});

const headings = document.getElementById("headings");
const videoContainer = document.getElementById("videoContainer");
const showSelectedPhotos=document.getElementById("showSelectedPhotos")
const videoElement = document.createElement("video");
const useCamera = document.getElementById("useCamera");
useCamera.addEventListener("click", (e) => {
  if(showSelectedPhotos.children.length === 0 ){
  e.preventDefault();
  captureButton.style.display="flex"
  videoContainer.style.display = "flex";
  photoForm.style.height = "30vh";
  formContainer.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      videoElement.srcObject = stream;
      videoElement.play();
    })
    .catch((error) => {
      console.error(error);
    });

  videoContainer.appendChild(videoElement);
  }else{
    alert("You can only able to upload single photo")
  }
});
const captureButton = document.getElementById("captureButton");
captureButton.addEventListener("click", (e) => {
  e.preventDefault();
  photoForm.style.height = "38vh";
  const canvas = document.createElement("canvas");
  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;
  canvas
    .getContext("2d")
    .drawImage(videoElement, 0, 0, canvas.width, canvas.height);
  const image = canvas.toDataURL("image/png");
  saveImage(image);
  videoElement.pause()
  videoElement.remove()
  captureButton.style.display="none"
  headings.remove()
  formContainer.style.backgroundColor = "#fff";
  photoForm.style.flexDirection="column"
  photoForm.style.gap="20px"
});
function saveImage(img){
  console.log(showSelectedPhotos.children.length) 

  if(img !== 'upload'){
    const showPhoto=document.createElement("img")
    showPhoto.src=img
    showPhoto.style.height='200px'
    photoForm.style.height = "50vh";
    showSelectedPhotos.insertBefore(showPhoto,showSelectedPhotos.children[showSelectedPhotos.children.length-1])
  }else{
    const file = document.getElementById("files");
    const showPhoto=document.createElement("img")
    file.addEventListener('change', (event) => {
      const file = event.target.files[0];
      // showPhoto.src = URL.createObjectURL(file)
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        showPhoto.src = reader.result;
      };
    });
    headings.remove()
      showPhoto.style.height='200px'
      photoForm.style.height = "50vh";
      showSelectedPhotos.insertBefore(showPhoto,showSelectedPhotos.children[showSelectedPhotos.children.length-1])
  }
}

function clearPhotos(e){
  e.preventDefault()
  Object.values(photoForm.getElementsByTagName("img")).forEach((img)=>{
    img.src=""
    img.remove()
  })
  photoForm.style.height = "18vh";
}
photoForm.addEventListener("submit",(e)=>{
  e.preventDefault()

  Object.values(photoForm.getElementsByTagName("img")).forEach((el)=>{

    photoData={
      photos:[...photoData.photos,el.src]
    }
  })
  photoDialog.close();
  alert("check saved data in console")
})
/*********** photo section ends here ***********/
/*********** summary section satrts here ***********/
const summary = document.getElementById("summary");
const summaryDialog = document.getElementById("summaryDialog");
function loadStaticSummaryForm(){
  const tempform = `<div class="formContainer">
<div class="titleConatiner">
<h2 class="addExp">Add Summary</h2>
<div class="cross closeDailouge"></div>
</div>
<h1>Let's add your summary</h1>
<form method="dialog" id="summaryForm">
<label for="summary">
You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences
</label>
</br>
<textarea name="summary" id="summary" cols="30" rows="10" style="width:95%;"></textarea></br><p>
  <button id="confirmBtn" type="submit" value="default" style="bottom: -70px;">Save</button>
</p>
</div>`;
const divCreate = document.createElement("div");
divCreate.setAttribute("class", "formContainer");
divCreate.innerHTML = tempform;
summaryDialog.append(divCreate)
}
loadStaticSummaryForm()
summary.addEventListener("click", () => {
  summaryDialog.showModal();
});
const summaryForm=document.getElementById("summaryForm")
const summaryFormInput=document.getElementById("summary")
summaryForm.addEventListener("submit",(e)=>{
  e.preventDefault()
   summaryData={
    "summary":summaryFormInput.value
  }
  console.log(summaryData)
  summaryDialog.close();
  alert("check saved data in console")
})
/*********** summary section ends here ***********/
/*********** all dialogs handle close ***********/
const closeDailouge = document.querySelectorAll(".closeDailouge");
closeDailouge.forEach((el) => {
  el.addEventListener("click", () => {
    positionDialog.close();
    industryDialog.close();
    photoDialog.close();
    educationDialog.close();
    summaryDialog.close();
  });
});
/*********** all section data handle/save ***********/
const userProfileForm=document.getElementById("userProfileForm")
userProfileForm.addEventListener("submit",(e)=>{
  e.preventDefault()
  const userProfileData={
    "experience":experienceData,
    "education":educationData,
    "industry":industryData,
    "photo":photoData,
    "summary":summaryData
  }

  console.log("userProfileData",userProfileData)
})
