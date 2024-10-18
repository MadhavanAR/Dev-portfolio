import { RiArrowDropDownLine } from "react-icons/ri";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { MoveLeftIcon } from "lucide-react";

export default async function Services({
  services,
}: {
  services: {
    name: string;
    charge: number;
    desc: string;
    cover: string;
  }[];
}) {
  return (
    <div
      id="services"
      className=" min-h-screen flex flex-col justify-center mx-auto text-center space-y-5"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-xl:text-8xl text-center font-bold underline decoration-green-400 underline-offset-8 my-4 -rotate-6">
        Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 place-items-center justify-normal items-center p-4 gap-4 mx-auto my-4">
        {services.map((service: any) => {
          return (
            <div key={service.name} className="p-1">
              <Card className="w-25 lg:w-64 border-green-400">
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription>{service.desc}.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    className="h-full w-full object-cover rounded-lg p-2"
                    src={service.cover}
                    alt={service.name}
                    width={300}
                    height={300}
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Card className="p-2 text-sm font-light hover:bg-green-400 hover:text-black">
                    {service.charge}
                  </Card>
                  <MoveLeftIcon />
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
