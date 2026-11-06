// Add/edit products here. `photo` = file in public/images (optional); otherwise a drawn icon is shown.
const names = {
  Sofa: ['Marina Velvet','Walnut Chesterfield','Hearth Boucle','Tan Faux Leather','Amber Curve','Sundown Sectional','Blush Channel'],
  Chair: ['Rope Lounge','Tufted Wingback','Cocoa Lounge','Oak Rocker','Boucle Swivel','Library Armchair','Tobacco Club','Teak Ribbon'],
  Table: ['Solid Wanza Dining','Travertine Dining','Round Pedestal','Kidney Coffee','Nesting Side','Console Slat','Executive Oak Desk','Walnut Writing'],
  Bed: ['Noir Upholstered','Carved Oak Frame','Storage Ottoman','Sleigh Heirloom','Canopy Teak','Linen King'],
  Shelf: ['Wave Corner','Ladder Bookcase','Slat Wall','Cabinet of Curios','Floating Walnut','Record Console','Five-Drawer Oak Dresser'],
  Lighting: ['Wicker Globe Pendant','Brass Floor Lamp','Mushroom Table Lamp','Ring Wall Sconce','Rattan Lantern','Glass Chandelier'],
  Decor: ['Raffia Sun Mirror','Halo Backlit Mirror','Jute Rug','Terracotta Vase','Pampas Bundle','Woven Basket','Linen Throw','Brass Candlesticks','Round Brass Mirror'],
}
const woods = ['Wanza','Oak','Walnut','Teak','Bamboo','Mahogany']
const base = { Sofa:24000, Chair:9000, Table:15000, Bed:32000, Shelf:8500, Lighting:3500, Decor:1800 }
const photos = { 'Hearth Boucle':'photo6','Noir Upholstered':'noir-upholstered-bed','Linen King':'linen-king-bed','Tan Faux Leather':'tan-faux-leather-sofa','Rope Lounge':'rope-lounge-chair','Halo Backlit Mirror':'halo-backlit-mirror','Wave Corner':'wave-corner-bookshelf','Slat Wall':'photo5','Console Slat':'photo7','Travertine Dining':'photo9','Executive Oak Desk':'photo10','Sundown Sectional':'living-room','Walnut Writing':'office' }
let id = 1
export const products = Object.entries(names).flatMap(([cat, list]) => list.map((n, k) => ({
  id: id++, cat, name: `${n} ${cat === 'Decor' || cat === 'Lighting' ? '' : cat}`.trim(),
  wood: woods[(id + k) % woods.length], price: Math.round((base[cat] * (0.8 + ((id * 37) % 60) / 100)) / 50) * 50,
  desc: `Hand-finished ${woods[(id + k) % woods.length].toLowerCase()} details and warm vintage tones, made to make a room feel lived-in.`,
  photo: photos[n] || null, isNew: id % 7 === 0,
})))
export const gallery = [...['photo3','photo4','photo5','photo6','photo7','photo9','photo10','living-room','office','noir-upholstered-bed','linen-king-bed','halo-backlit-mirror','rope-lounge-chair','tan-faux-leather-sofa','wave-corner-bookshelf'],...[2,3,4,5,6,7,8,9].map(n=>`gallery-${n}`)].map(n => `/images/${n}.jpg`)
export const faqs = [
  ['Orders','How do I order?','Message us, visit the showroom in Hawassa, or add items to your enquiry list on this site.'],
  ['Delivery','Do you deliver?','Yes — we deliver across Hawassa and to other regions of Ethiopia.'],
  ['Care','How do I care for wooden furniture?','Wipe with a soft dry cloth, avoid direct sun, and re-wax once a year.'],
  ['Warranty','Is there a warranty?','All furniture carries a 5-year structural warranty with free repair for defects.'],
]
