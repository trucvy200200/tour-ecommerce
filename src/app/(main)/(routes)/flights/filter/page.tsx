import Card from "@/components/pages/flights/card"

const data = [
  {
    departureDate: "06/10/2024",
    class: "Economy",
    plane: { name: "VietJet Aviation", code: "VJ133", logo: "https://flights-vn.gotogate.com/system/spa/ibeclient/static/media/VN.4d4c24d5.png" },
    from: { name: "Hồ Chí Minh", code: "SGN", time: "05:00" },
    to: { name: "Hà Nội", code: "HAN", time: "07:05" },
    price: 100000,
    duration: "2h 10min"
  }
]

const Filter = () => {
  return (
    <div className="mt-[130px] container">
      <div className="font-bold text-[16px] mb-6">
        Filter: <span className="font-[500]">1 flights</span>
      </div>
      {data?.map((item) => (
        <Card data={item} />
      ))}
    </div>
  )
}

export default Filter
