import Card from "@/components/pages/my-trip/Card"

const MyTrip = () => {
  return (
    <div className="container mx-auto mt-[160px] max-md:mt-[80px]">
      <div className="text-[25px] font-bold mb-6">List of orders</div>
      <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default MyTrip
