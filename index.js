let container = document.createElement('div');
container.className = "one";
let leftdiv = document.createElement('div');
leftdiv.className = "left";

let img = document.createElement('img')
img.src = "profile.png";
img.className = "profileimage";

let rightdiv = document.createElement('div');
rightdiv.className = "right";

let h = document.createElement("h2");
h.textContent = "Create an Document";

let para = document.createElement("p");
para.textContent = "lets get started with your free 30 days trail";
para.style.color = "#787878";

let formtag = document.createElement("form");

let label1 = document.createElement("label");
label1.textContent = "Name";
label1.style.color = "#787878";

let nametype = document.createElement("input");
nametype.setAttribute("type", "name");
nametype.className = "textboxstyle";
nametype.style.color = "#787878";

let br1 = document.createElement("br");
let br2 = document.createElement("br");
let br7 = document.createElement("br");

let label2 = document.createElement("label");
label2.textContent = "Email";
label2.style.color = "#787878";

let Emailtype = document.createElement("input");
Emailtype.setAttribute("type", "Email");
Emailtype.className = "textboxstyle";

let br3 = document.createElement("br");
let br4 = document.createElement("br");

let label3 = document.createElement("label");
label3.textContent = "Password";
label3.style.color = "#989898";

let passwordtype = document.createElement("input");
passwordtype.setAttribute("type", "password");
passwordtype.className = "textboxstyle";

let br6 = document.createElement("br");
let br5 = document.createElement("br");

let createButton = document.createElement("button");
createButton.textContent = "Create Account";
createButton.className = "createbuttonstyle";

let signButton = document.createElement("button");
signButton.textContent = "sign in with google";
signButton.className = "signbuttonstyle";

let div2 = document.createElement("div");
div2.style.display = "flex";

let para1 = document.createElement("p");
para1.textContent = "Already have an account?";
para1.style.fontSize = "12px";
para1.style.margin = "0"

let signinLink = document.createElement("a");
signinLink.setAttribute("href", "#");
signinLink.textContent = "Log in";
signinLink.style.fontSize = "12px";
signinLink.style.text

let br8 = document.createElement("br");
let br9 = document.createElement("br");
let br10 = document.createElement("br");
let br11 = document.createElement("br");
let br12 = document.createElement("br");
let br13 = document.createElement("br");
let br14 = document.createElement("br");


formtag.append(h);
formtag.append(para);
formtag.append(label1);
formtag.append(br1);
formtag.append(nametype);
formtag.append(br10)
formtag.append(br2);
formtag.append(label2);
formtag.append(br3);
formtag.append(Emailtype);
formtag.append(br12)
formtag.append(br4);
formtag.append(label3);
formtag.append(br5);
formtag.append(passwordtype);
formtag.append(br6);
formtag.append(br7)
formtag.append(createButton);
formtag.append(br8)
formtag.append(br9)
formtag.append(signButton);
formtag.append(br13)
formtag.append(br14)
formtag.append(div2)
div2.append(para1)
div2.append(signinLink)

rightdiv.append(formtag);

leftdiv.appendChild(img)

container.append(leftdiv);
container.append(rightdiv);
document.body.appendChild(container);