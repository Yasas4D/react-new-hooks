export function generateProducts() {
  const adjectives = [
    "Premium",
    "Luxury",
    "Handmade",
    "Organic",
    "Natural",
    "Eco-friendly",
    "Vegan",
    "Gluten-free",
    "Hypoallergenic",
    "Sustainable",
  ];
  const nouns = [
    "Soap",
    "Candle",
    "Lotion",
    "Shampoo",
    "Conditioner",
    "Perfume",
    "Lip Balm",
    "Body Butter",
    "Face Mask",
    "Hand Sanitizer",
  ];

  const products = [];
  for (let i = 0; i < 10000; i++) {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);
    products.push(`${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`);
  }
  return products;
}
