import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex h-full p-0 m-0">
      <h1>KD Holistic Health</h1>
      <Image src={ 'https://github.com/XYIANSoftware/images/blob/main/client/kdh/kd1.png?raw=true'} alt="temp-logo"
        width={150} height={150} />
    </div>
  );
}
