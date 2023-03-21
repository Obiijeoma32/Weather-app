function Weather({ data }) {
  return (
    <>
      <div className="w-[300px] p-[0_20px_20px_20px] rounded-[6px] shadow-[10px_-2px_20px_2px_rgba(0,0,0,30%)] bg-[#5DABE6] text-[#fff] m-[20px_auto_0_auto]">
        <div className="flex justify-between items-center">
          <div>
            <p className=" font-[600] text-[18px] leading-[1] m-0 tracking-[1px]">{data.city}</p>
            <p className="font-[400] text-[14px] leading-[1] pt-1 m-0 ">{data.weather[0].description}</p>
          </div>
          <img className="w-[100px]" alt="weather" src={`/icons/${data.weather[0].icon}.png`} />
        </div>
        <div className="flex justify-between items-center">
          <p className=" font-[600] text-[70px] w-[auto] tracking-[-5px] m-[10px_0]">{Math.round(data.main.temp)}°C</p>
          <div className=" w-[100%] pl-[20px]">
            <div className="flex justify-between ">
              <span className=" text-left font-[400] text-[12px] ">Details</span>
            </div>
            <div className="flex justify-between ">
              <span className=" text-left font-[400] text-[12px]">Feels like</span>
              <span className=" text-right font-[600] text-[12px]">{Math.round(data.main.feels_like)}°C</span>
            </div>
            <div className="flex justify-between ">
              <span className=" text-left font-[400] text-[12px]">Wind</span>
              <span className=" text-right font-[600] text-[12px]">{data.wind.speed} m/s</span>
            </div>
            <div className="flex justify-between ">
              <span className=" text-left font-[400] text-[12px]">Humidty</span>
              <span className=" text-right font-[600] text-[12px]">{data.main.humidity}%</span>
            </div>
            <div className="flex justify-between ">
              <span className=" text-left font-[400] text-[12px]">Pressure</span>
              <span className=" text-right font-[600] text-[12px]">{data.main.pressure}%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
