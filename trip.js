const trips={
luxor:{icon:'𓂀',image:'https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1600&q=85',
en:{title:'Luxor & Aswan',tag:'UPPER EGYPT',intro:'A journey through the heart of ancient Egypt.',desc:'Explore legendary temples, monuments and riverside landscapes across Luxor and Aswan.',destination:'Luxor & Aswan',duration:'4 Days / 3 Nights',price:'Price on request',days:[['Day 1','Arrival in Luxor and visit the East Bank highlights.'],['Day 2','Explore the West Bank and its ancient monuments.'],['Day 3','Travel toward Aswan and discover its historic landmarks.'],['Day 4','Final sightseeing and departure.']]},
ar:{title:'الأقصر وأسوان',tag:'صعيد مصر',intro:'رحلة في قلب الحضارة المصرية القديمة.',desc:'اكتشف المعابد والآثار والمناظر النيلية في الأقصر وأسوان.',destination:'الأقصر وأسوان',duration:'4 أيام / 3 ليالي',price:'السعر عند الطلب',days:[['اليوم الأول','الوصول إلى الأقصر وزيارة أهم معالم الضفة الشرقية.'],['اليوم الثاني','استكشاف الضفة الغربية وأهم الآثار.'],['اليوم الثالث','التوجه إلى أسوان واكتشاف معالمها التاريخية.'],['اليوم الرابع','جولة ختامية ثم المغادرة.']]}},
cruise:{icon:'⛵',image:'https://images.unsplash.com/photo-1539650116574-75c0c6d7c6a0?auto=format&fit=crop&w=1600&q=85',
en:{title:'Nile Cruises',tag:'THE NILE',intro:'Sail through history between Egypt’s timeless cities.',desc:'Enjoy a memorable Nile journey combining historic sights, temples and relaxing river views.',destination:'The Nile',duration:'5 Days / 4 Nights',price:'Price on request',days:[['Day 1','Embarkation and welcome aboard.'],['Day 2','Sail and enjoy scheduled sightseeing.'],['Day 3','Discover riverside temples and local highlights.'],['Day 4','Continue the Nile journey and enjoy the scenery.'],['Day 5','Final breakfast and disembarkation.']]},
ar:{title:'رحلات نيلية',tag:'النيل',intro:'أبحر عبر التاريخ بين مدن مصر الخالدة.',desc:'استمتع برحلة نيلية تجمع بين المعالم التاريخية والمعابد وإطلالات النهر الهادئة.',destination:'نهر النيل',duration:'5 أيام / 4 ليالي',price:'السعر عند الطلب',days:[['اليوم الأول','الصعود إلى المركب والاستقبال.'],['اليوم الثاني','الإبحار والاستمتاع بالجولات المحددة.'],['اليوم الثالث','اكتشاف المعابد والمعالم على ضفاف النيل.'],['اليوم الرابع','استكمال الرحلة والاستمتاع بالمناظر.'],['اليوم الخامس','الإفطار والمغادرة.']]}},
cairo:{icon:'🏛️',image:'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1600&q=85',
en:{title:'Historic Cairo',tag:'HISTORY',intro:'Discover the stories, landmarks and atmosphere of historic Cairo.',desc:'Experience Cairo through its famous landmarks, historic architecture and rich cultural atmosphere.',destination:'Cairo',duration:'2 Days / 1 Night',price:'Price on request',days:[['Day 1','Explore historic Cairo and major cultural landmarks.'],['Day 2','Continue sightseeing, shopping and cultural experiences.']]},
ar:{title:'القاهرة التاريخية',tag:'تاريخ',intro:'اكتشف حكايات ومعالم وأجواء القاهرة التاريخية.',desc:'استمتع بالقاهرة من خلال أشهر المعالم والعمارة التاريخية والتجارب الثقافية.',destination:'القاهرة',duration:'يومان / ليلة واحدة',price:'السعر عند الطلب',days:[['اليوم الأول','جولة في القاهرة التاريخية وأهم المعالم الثقافية.'],['اليوم الثاني','استكمال الجولة والتسوق والتجارب الثقافية.']]}},
redsea:{icon:'🌊',image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
en:{title:'Red Sea',tag:'RED SEA',intro:'Relax by the sea with nature, beaches and unforgettable views.',desc:'A flexible Red Sea escape combining beautiful beaches, nature and seaside experiences.',destination:'Red Sea',duration:'3 Days / 2 Nights',price:'Price on request',days:[['Day 1','Arrival, check-in and free time by the sea.'],['Day 2','Beach and optional seaside activities.'],['Day 3','Relaxation, final views and departure.']]},
ar:{title:'البحر الأحمر',tag:'البحر الأحمر',intro:'استرخِ على البحر مع الطبيعة والشواطئ والمناظر الرائعة.',desc:'رحلة مرنة إلى البحر الأحمر تجمع بين الشواطئ والطبيعة والتجارب البحرية.',destination:'البحر الأحمر',duration:'3 أيام / ليلتين',price:'السعر عند الطلب',days:[['اليوم الأول','الوصول وتسجيل الدخول ووقت حر على البحر.'],['اليوم الثاني','الشاطئ والأنشطة البحرية الاختيارية.'],['اليوم الثالث','الاسترخاء ثم المغادرة.']]}}
};

const id=new URLSearchParams(location.search).get('id')||'luxor';
const data=trips[id]||trips.luxor;
const ar=document.documentElement.lang==='ar';
const d=ar?data.ar:data.en;
if(document.getElementById('tripTitle')){
document.title=d.title+' | Nile Crown Travel';
document.getElementById('tripTitle').textContent=d.title;
document.getElementById('tripTag').textContent=d.tag;
document.getElementById('tripIntro').textContent=d.intro;
document.getElementById('tripDesc').textContent=d.desc;
document.getElementById('tripDestination').textContent=d.destination;
document.getElementById('tripDuration').textContent=d.duration;
document.getElementById('tripPrice').textContent=d.price;
document.getElementById('tripIcon').textContent=data.icon;
document.getElementById('tripImage').style.backgroundImage=`url("${data.image}")`;
const list=document.getElementById('itinerary');
d.days.forEach(day=>{const el=document.createElement('div');el.className='day';el.innerHTML=`<strong>${day[0]}</strong><span>${day[1]}</span>`;list.appendChild(el);});
const msg=ar?`مرحباً Nile Crown Travel، أرغب في طلب حجز رحلة ${d.title}. أود معرفة التفاصيل والأسعار والمواعيد.`:`Hello Nile Crown Travel, I would like to book ${d.title}. Please send me the details, prices and available dates.`;
document.getElementById('wa').href='https://wa.me/201010575983?text='+encodeURIComponent(msg);
document.getElementById('langLink').href=(ar?'trip.html':'trip-ar.html')+'?id='+encodeURIComponent(id);
}


/* v2: additional trip details */
const extraTripDetails = {
  luxor: {
    en:{included:["Private or shared transfers according to booking","Local trip coordination","Suggested sightseeing itinerary"],not:["Flights","Personal expenses","Optional entrance fees unless confirmed"]},
    ar:{included:["تنسيق الرحلة والتنقلات حسب الحجز","مساعدة محلية أثناء الرحلة","برنامج سياحي مقترح"],not:["تذاكر الطيران","المصاريف الشخصية","رسوم الدخول الاختيارية ما لم يتم تأكيدها"]}
  },
  cruise: {
    en:{included:["Cruise itinerary coordination","Embarkation and disembarkation assistance","Sightseeing plan for key Nile sites"],not:["International flights","Personal expenses","Optional excursions unless confirmed"]},
    ar:{included:["تنسيق برنامج الرحلة النيلية","المساعدة في الصعود والنزول","برنامج لزيارة أهم المواقع على النيل"],not:["تذاكر الطيران الدولي","المصاريف الشخصية","الرحلات الاختيارية ما لم يتم تأكيدها"]}
  },
  cairo: {
    en:{included:["Local itinerary planning","Trip coordination","Suggested historic Cairo route"],not:["Flights","Personal expenses","Entrance fees unless confirmed"]},
    ar:{included:["تخطيط البرنامج السياحي","تنسيق الرحلة","مسار مقترح لزيارة القاهرة التاريخية"],not:["تذاكر الطيران","المصاريف الشخصية","رسوم الدخول ما لم يتم تأكيدها"]}
  },
  redsea: {
    en:{included:["Local trip coordination","Suggested beach and sea activities","Transfer planning according to booking"],not:["Flights","Personal expenses","Optional water activities unless confirmed"]},
    ar:{included:["تنسيق الرحلة محليًا","اقتراح أنشطة بحرية وشاطئية","تنسيق التنقلات حسب الحجز"],not:["تذاكر الطيران","المصاريف الشخصية","الأنشطة البحرية الاختيارية ما لم يتم تأكيدها"]}
  }
};

function renderExtras(id, lang){
  const d = extraTripDetails[id] || extraTripDetails.luxor;
  const x = d[lang] || d.en;
  const title1 = lang==="ar" ? "يشمل" : "Included";
  const title2 = lang==="ar" ? "لا يشمل" : "Not included";
  const box = document.getElementById("tripExtras");
  if(!box) return;
  box.innerHTML = `
    <div class="extra-box"><h3>${title1}</h3><ul>${x.included.map(v=>`<li>${v}</li>`).join("")}</ul></div>
    <div class="extra-box"><h3>${title2}</h3><ul>${x.not.map(v=>`<li>${v}</li>`).join("")}</ul></div>`;
}

document.addEventListener("DOMContentLoaded", ()=>{
  const id = new URLSearchParams(location.search).get("id") || "luxor";
  const lang = document.documentElement.lang === "ar" ? "ar" : "en";
  renderExtras(id, lang);
});
