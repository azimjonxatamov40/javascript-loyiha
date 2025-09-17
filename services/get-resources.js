async function getResources() {
  //response jovob // await kutib turadi
  try {
    const response = await fetch("http://localhost:3000/offers");
    return await response.json();
  } catch (e) {
    console.log('Error');
  }
}

export default getResources;

// sync masalan restarndi olib qarasek afitsiya bitta faqat qaridi
// async restarnda afitsiya uch torda mijozlarga qaridi
