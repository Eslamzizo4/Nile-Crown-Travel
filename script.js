function sendForm(e){
 e.preventDefault();
 const name=document.getElementById('name').value.trim();
 const email=document.getElementById('email').value.trim();
 const trip=document.getElementById('trip').value||'Not specified';
 const message=document.getElementById('message').value.trim()||'No additional message';
 const text=`Hello Nile Crown Travel,

Name: ${name}
Email: ${email}
Trip: ${trip}
Message: ${message}`;
 window.open('https://wa.me/201010575983?text='+encodeURIComponent(text),'_blank');
}