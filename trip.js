const SUPABASE_URL = "https://vlqzmqbshqxycwgiuov.supabase.co";
const SUPABASE_KEY = "sb_publishable_2kdCMej4UhbTlmEcrqIoRg_nDGXvSeL";

const tripId = new URLSearchParams(location.search).get("id") || "luxor";

// حاليًا رحلة Luxor الموجودة في Supabase رقمها 1
const databaseId = tripId === "luxor" ? 1 : Number(tripId);

const ar = document.documentElement.lang === "ar";

fetch(`${SUPABASE_URL}/rest/v1/trips?select=*&id=eq.${databaseId}`, {
  headers: {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error("Supabase connection failed");
  }
  return response.json();
})
.then(rows => {
  if (!rows.length) {
    console.log("No trip found in Supabase");
    return;
  }

  const trip = rows[0];

  const title = ar ? trip.title_ar : trip.title_en;
  const price = ar ? trip.price_ar : trip.price_en;
  const description = ar
    ? trip.description_ar
    : trip.description_en;
  const image = ar ? trip.image_ar : trip.image_en;

  // العنوان
  const titleEl = document.getElementById("tripTitle");
  if (titleEl && title) {
    titleEl.textContent = title;
  }

  // السعر
  const priceEl = document.getElementById("tripPrice");
  if (priceEl && price) {
    priceEl.textContent = price;
  }

  // الوصف
  const descEl = document.getElementById("tripDesc");
  if (descEl && description) {
    descEl.textContent = description;
  }

  // الصورة
  const imageEl = document.getElementById("tripImage");
  if (imageEl && image) {
    imageEl.style.backgroundImage = `url("${image}")`;
  }

  console.log("Trip loaded from Supabase:", trip);
})
.catch(error => {
  console.error("Supabase error:", error);
});
