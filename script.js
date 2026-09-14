const SUPABASE_URL =
"https://vlqzmqbshqxycwgiuov.supabase.co";

const SUPABASE_KEY =
"sb_publishable_2kdCMej4UhbTlmEcrqIoRg_nDGXvSeL";


function escapeHtml(value){
  return String(value ?? "")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}


/* GET TRIPS FROM SUPABASE */

async function getTrips(){

  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/trips?select=*`,
    {
      method:"GET",
      headers:{
        apikey:SUPABASE_KEY,
        Authorization:`Bearer ${SUPABASE_KEY}`
      }
    }
  );

  if(!response.ok){
    throw new Error(await response.text());
  }

  return await response.json();
}


/* FIND A TRIP */

function findTrip(rows, type){

  return rows.find(trip => {

    const title =
      `${trip.title_en || ""} ${trip.title_ar || ""}`
      .toLowerCase();

    if(type === "luxor"){
      return (
        title.includes("luxor") ||
        title.includes("aswan") ||
        title.includes("الأقصر") ||
        title.includes("اسوان") ||
        title.includes("أسوان")
      );
    }

    if(type === "cruise"){
      return (
        title.includes("cruise") ||
        title.includes("nile") ||
        title.includes("كروز") ||
        title.includes("نايل")
      );
    }

    if(type === "cairo"){
      return (
        title.includes("cairo") ||
        title.includes("historic") ||
        title.includes("القاهرة")
      );
    }

    if(type === "redsea"){
      return (
        title.includes("red sea") ||
        title.includes("redsea") ||
        title.includes("البحر الأحمر") ||
        title.includes("البحر الاحمر")
      );
    }

    return false;

  });

}


/* FORMAT PRICE */

function displayPrice(price){

  if(!price || !String(price).trim()){
    return "Price on request";
  }

  return String(price).trim();

}


/* LOAD PRICES */

async function loadPrices(){

  try{

    const rows = await getTrips();

    const types = [
      "luxor",
      "cruise",
      "cairo",
      "redsea"
    ];


    types.forEach(type => {

      const trip = findTrip(rows,type);

      const card =
        document.querySelector(
          `[data-trip-id="${type}"]`
        );

      if(!card) return;


      const price =
        card.querySelector(".price");

      if(price && trip){

        price.textContent =
          displayPrice(trip.price_en);

      }

    });


    console.log("Trips loaded from Supabase:", rows);

  }catch(error){

    console.error(
      "Could not load trip prices:",
      error
    );

  }

}


/* WHATSAPP CONTACT FORM */

function sendForm(e){

  e.preventDefault();

  const name =
    document.getElementById("name")
      .value.trim();

  const email =
    document.getElementById("email")
      .value.trim();

  const trip =
    document.getElementById("trip")
      .value || "Not specified";

  const message =
    document.getElementById("message")
      .value.trim() ||
      "No additional message";


  const text =
`Hello Nile Crown Travel,

Name: ${name}
Email: ${email}
Trip: ${trip}
Message: ${message}`;


  window.open(
    "https://wa.me/201010575983?text=" +
    encodeURIComponent(text),
    "_blank"
  );

}


/* START */

document.addEventListener(
  "DOMContentLoaded",
  loadPrices
);
