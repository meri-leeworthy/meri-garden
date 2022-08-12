import { useRouter } from "next/router";
import Image from "next/image";
import flower from "public/images/flower.svg";
import ocean1 from "public/images/ocean1.png";
import ocean2 from "public/images/ocean2.png";
import ocean3 from "public/images/ocean3.png";
import oceanH1 from "public/images/oceanH1.svg";
import oceanH2 from "public/images/oceanH2.svg";
import { useState, useEffect } from "react";
import Head from "next/head";

const Invite = () => {
  const router = useRouter();
  const { name } = router.query;
  let fmtd = "";
  let many = false;
  if (name) {
    const stname = name as string;
    const names = stname.split("+");
    if (names.length > 1) many = true;
    fmtd = names.reduceRight((fmt, cur, i) => {
      if (i === names.length - 1)
        return cur.charAt(0).toLocaleUpperCase() + cur.slice(1);
      if (i === names.length - 2)
        return cur[0].toLocaleUpperCase() + cur.slice(1) + " and " + fmt;
      else return cur[0].toLocaleUpperCase() + cur.slice(1) + ", " + fmt;
    }, names[names.length - 1].charAt(0).toLocaleUpperCase() + names[names.length - 1].slice(1));
  }

  return <Invitation name={fmtd} many={many} />;
};

const Invitation = ({ name, many }: { name: string; many: boolean }) => {
  const ocean = [ocean1, ocean2, ocean3];
  const [oceanPic, setOceanPic] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setOceanPic((oceanPic) => (oceanPic + 1) % 3),
      3000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="w-screen h-full min-h-screen">
      <div className="absolute h-full inset-0 bg-[#ff6239] z-30 overflow-y-scroll  overflow-x-hidden">
        <div className="flex justify-center">
          <div className="w-full max-w-xl p-4 py-12 text-white">
            <Head>
              <meta
                property="og:image"
                content={"https://meri.garden/images/ocean1.png"}
              />
            </Head>

            <h1 className="font-[Junicode] mb-8 text-6xl">Dear {name},</h1>

            <div className="relative w-full h-64 -mb-28">
              <Image
                alt="Youre invited to Oceans"
                layout="fill"
                src={oceanH1}
              />
            </div>

            <div className="relative w-full aspect-square">
              <div className="relative w-full h-full">
                <Image alt="flower" layout="fill" src={flower} />
              </div>
              <div className="absolute w-full h-full inset-16 lg:inset-28">
                <div className="relative w-3/5 margin-auto h-2/3">
                  <Image alt="Ocean" layout="fill" src={ocean[oceanPic]} />
                </div>
              </div>
            </div>

            <div className="relative w-full h-64 -mt-24">
              <Image alt="1st birthday party" layout="fill" src={oceanH2} />
            </div>

            <p className="my-4 font-[Junicode] text-4xl">
              Please join us for a big party at Edinburgh Gardens Community Room
              (near the oval) on the 10th of September at 1:30pm
            </p>

            <p className="my-4 font-[Junicode] text-4xl">
              If you can make it, please RSVP by clicking here to{" "}
              <a
                className="underline"
                href={`mailto:meri.leeworthy@gmail.com?subject=yes%20${
                  many ? "we" : "i%27m"
                }%20coming%20xx%20${name}`}
              >
                send us an email
              </a>{" "}
              or{" "}
              <a
                className="underline"
                href={`sms:+61426210112?&body=yes%20${
                  many ? "we" : "i%27m"
                }%20coming%20xx%20${name}`}
              >
                send us a text
              </a>
            </p>
            <p className="my-4 font-[Junicode] text-4xl">
              Hope to see you there!
            </p>
            <p className="my-4 font-[Junicode] text-4xl">
              Love, Azja and Meri xx
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invite;
