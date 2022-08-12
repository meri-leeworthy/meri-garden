import {useRouter} from 'next/router';
import Image from "next/image";
import flower from "public/images/flower.svg";
import ocean1 from "public/images/ocean1.png";
import ocean2 from "public/images/ocean2.png";
import ocean3 from "public/images/ocean3.png";
import oceanH1 from "public/images/oceanH1.svg";
import oceanH2 from "public/images/oceanH2.svg";
import {useState, useEffect} from "react";

const Invite = () => {
	const router = useRouter();
	const {name} = router.query;
	const messages = {
		ocean: "You are the birthday baby. Of course you are invited!"
	}
	return <Invitation name={name} message={messages[name?.toLowerCase()] || ""} />
}

const Invitation = ({name, message}: {name: string, message: string}) => {
	const ocean = [ocean1, ocean2, ocean3];
	const [oceanPic, setOceanPic] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => setOceanPic((oceanPic) => (oceanPic + 1) % 3), 3000);
		return () => {
			clearInterval(interval);
		};
	}, [])
	return (
		<div className="w-screen h-full min-h-screen ">
			<div className="absolute h-full inset-0 bg-[#ff6239] z-30 overflow-y-scroll">

				<div className="flex justify-center">
				<div className="max-w-xl w-full p-4 py-12 text-white">

					<h1 className="font-[Junicode] mb-8 text-6xl capitalize">Dear {name},</h1>

					<div className="relative w-full h-64 -mb-28">
						<Image alt="Youre invited to Oceans" layout="fill" src={oceanH1} />
					</div>
					
					<div className="relative w-full aspect-square">
						<div className="w-full h-full relative">
							<Image alt="flower" layout="fill" src={flower} />
						</div>
						<div className="absolute inset-20 h-full w-full">
							<div className="relative w-3/5 margin-auto h-2/3">
								<Image alt="Ocean" layout="fill" src={ocean[oceanPic]} />
							</div>
						</div>
					</div>

					<div className="relative w-full h-64 -mt-24">
						<Image alt="1st birthday party" layout="fill" src={oceanH2} />
					</div>

					<p className="my-4 font-[Junicode] text-2xl">{message}</p>

					<p className="my-4 font-[Junicode] text-4xl">
						Please join us for a big party at Edinburgh Gardens Community Room (near the oval) on the 10th of September at 1:30pm
					</p>
					
				</div>
			</div>
			</div>
		</div>
	)
}

export default Invite;
