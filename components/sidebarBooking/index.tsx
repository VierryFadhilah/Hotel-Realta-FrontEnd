import OutlineButton from '../buttons/OutlineButton'
import Filter from '../icons/Filter'
import PriceRange from '../select/PriceRange'

const SidebarBooking = (props: any) => {
  const handlePriceRangeChange = (minPrice: number, maxPrice: number) => {
    console.log(`Selected price range: ${minPrice} - ${maxPrice}`)
    // Do something with the selected price range
  }

  const hotelFacilities = [
    {
      id: 1,
      faci: 'Parking Facility',
    },
    {
      id: 2,
      faci: 'Security',
    },
    {
      id: 3,
      faci: 'Restaurant',
    },
    {
      id: 4,
      faci: 'Swimming Pool',
    },
    {
      id: 5,
      faci: 'Gym',
    },
  ]

  return (
    <aside className="absolute text-[#1C2434] max-w-[20%] mt-4 bg-white shadow rounded px-4 py-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <Filter width="15" />
          <h1 className="font-semibold">FILTERS</h1>
        </div>
        <OutlineButton title="Clear All" />
      </div>
      <h3 className="font-semibold text-sm mt-2 mb-2">Price Range</h3>
      <PriceRange onChange={handlePriceRangeChange} />
      <h3 className="font-semibold text-sm mt-4 mb-1">Hotel Facilities</h3>
      <ul>
        <li className="flex gap-2 items-center">
          <input type="checkbox" name="faci" id="faci" />
          <p className="text-xs font-semibold mb-2">Parking Facility</p>
        </li>
      </ul>
    </aside>
  )
}

export default SidebarBooking
