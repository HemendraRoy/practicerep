import { GoogleGenerativeAI } from "@google/generative-ai"
let submission=document.getElementById('submit');
submission.addEventListener('click',getdata);
const ai=new GoogleGenerativeAI("AIzaSyCEe6wmdneDr35xKfxsAacYrVuQzERdjjE")

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })


function getdata(){
	let pretext=document.getElementById('hobbies');
	let keywords=pretext.split(',');
	let text="Show me list of career options if my interests are in ";
	for(str in keywords){
		text+=str;
		text+=', ';
	}
	
	const res=await model.generateContent(text);
	let fin=res.response().text();
	document.getElementById('options').innerHTML=fin;
}
