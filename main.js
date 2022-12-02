var Google = document.querySelector('.Google');
var format = document.querySelector('.format');
var hidden = document.querySelector('.hidden');
function Direct() {
if(Google.value.indexOf("https://drive.google.com/file/") != -1){
switch(format.value){
  case "download":
  var url = Google.value.replace(/\/file\/d\/(.+)\/(.+)/, "/uc?export=download&id=$1");
//  var url2 = url.replace("/view?usp=drivesdk","");
  hidden.classList.add('active');
  document.querySelector('.result').value = url;
  document.querySelector('.preview').innerHTML = 
      `<h1 class="text">Preview Link</h1>
      <input type="text" class="link" value="${url}"/>
      <button class="previewBtn"><a href="${url}" class="a">Live Preview</a></button>`
  break;
  case "view":
    hidden.classList.add('active');
    var url = Google.value.replace(/\/file\/d\/(.+)\/(.+)/, "/uc?export=view&id=$1");
 //var url2 = url.replace("/view?usp=drivesdk","");
    document.querySelector('.result').value = url;
    document.querySelector('.preview').innerHTML =
      `<h1 class="text">Preview Image</h1>
      <input type="text" class="link" value="${url}"/>
      <img alt='Goggle Drive Direct Link Generator' src='${url}'/>`
    break;
    
     }
   }
   else if(Google.value.indexOf("https://drive.google.com/uc?export=") != -1){
       alert('This not Url');
     }
   else{
       alert('Enter Your Goggle Drive Url');
     }
 }
var result = document.querySelector('.result');
function clipboard(){
  const textarea = document.createElement('textarea');
  const resultE = result.value;
  if (!result) { return; }
  textarea.value = resultE;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert("👇Google Link Copied to Clipboard👇\n"+result.value);

}
