import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "../index.css";

const Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function Forecast({ data }) {
  const daysInAWeek = new Date().getDay();
  const forecastDays = Days.slice(daysInAWeek, Days.length).concat(Days.slice(0, daysInAWeek));
  //   console.log(forecastDays);
  return (
    <>
      <label className=" text-[35px] ml-[65px]  font-[600]  ">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className=" bg-[#fff] mb-8 w-[90%] ml-[5%] rounded-[15px] m-[10px] items-center flex cursor-pointer text-[14px] p-[5px_20px] h-[50px]">
                  <img className=" w-[40px] " alt="weather" src={`/icons/${item.weather[0].icon}.png`} />
                  <label className=" text-[#171616] flex-[1_1] pl-1 font-[600] text-[15px]">{forecastDays[index]}</label>
                  <label className="flex-[1_1] text-right mr-5">{item.weather[0].description}</label>
                  <label className=" text-[#757575]">
                    {Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C{" "}
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="last-row">
                <div className=" items-center flex h-[30px] justify-between ">
                  <label className="text-[#000] font-[500]">Pressure:</label>
                  <label className=" text-[#000] font-[400]">{item.main.pressure}hPa</label>
                </div>
                <div className="items-center flex h-[30px] justify-between ">
                  <label className="text-[#000] font-[500]">Humidty:</label>
                  <label className="text-[#000] font-[400]">{item.main.humidity}%</label>
                </div>
                <div className="items-center flex h-[30px] justify-between ">
                  <label className="text-[#000] font-[500]">Cloud:</label>
                  <label className="text-[#000] font-[400]">{item.clouds.all}%</label>
                </div>
                <div className="items-center flex h-[30px] justify-between ">
                  <label className="text-[#000] font-[500]">Wind Speed:</label>
                  <label className="text-[#000] font-[400]">{item.wind.speed} m/s</label>
                </div>
                <div className="items-center flex h-[30px] justify-between ">
                  <label className=" text-[#000] font-[500]">Sea level:</label>
                  <label className="text-[#000] font-[400]">{item.main.sea_level}m</label>
                </div>
                <div className="items-center flex h-[30px] justify-between ">
                  <label className="text-[#000] font-[500]">feels like:</label>
                  <label className="text-[#000] font-[400]">{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default Forecast;
