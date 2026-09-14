const SUPABASE_URL =
"https://vlqzmqbshqxycwgiuov.supabase.co";

const SUPABASE_KEY =
"sb_publishable_2kdCMej4UhbTlmEcrqIoRg_nDGXvSeL";


async function getTrips() {

  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/trips?select=*`,
    {
      method: "GET",
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`
      }
    }
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return await response.json();
}


function findTrip(rows, type) {

  return rows.find(trip => {

    const title =
      `${trip.title_en || ""} ${trip.title_ar || ""}`
        .toLowerCase();

    if (type === "luxor") {
      return (
        title.includes("luxor") ||
        title.includes("aswan") ||
        title.includes("الأقصر") ||
        title.includes("اسوان") ||
        title.includes("أسوان")
      );
    }

    if (type === "cruise") {
      return (
        title.includes("cruise") ||
        title.includes("nile") ||
        title.includes("كروز") ||
        title.includes("نايل")
      );
    }

    if (type === "cairo") {
      return (
        title.includes("cairo") ||
        title.includes("historic") ||
        title.includes("القاهرة")
      );
    }

    if (type === "redsea") {
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


function displayPrice(price) {

  if (!price || !String(price).trim()) {
    return "Price on request";
  }

  return String(price).trim();
}


async function loadPrices() {

  try {

    const rows = await getTrips();

    console.log("SUPABASE TRIPS:", rows);

    const types = [
      "luxor",
      "cruise",
      "cairo",
      "
