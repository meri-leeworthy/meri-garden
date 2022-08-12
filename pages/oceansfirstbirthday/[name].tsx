import {useRouter} from 'next/router';
import Image from "next/image";
import flower from "public/images/flower.svg";
import ocean1 from "public/images/ocean1.png";

const Invite = () => {
	const router = useRouter();
	const {name} = router.query;
	const messages = {
		ocean: "You are the birthday baby. Of course you are invited!"
	}
	return <Invitation name={name} message={messages[name?.toLowerCase()] || ""} />
}

const Invitation = ({name, message}: {name: string, message: string}) => {
	return (
		<div className="w-screen min-h-screen">
			<div className="absolute inset-0 bg-[#ff6239] z-30">

				<div className="flex justify-center">
				<div className="max-w-lg p-4 py-12 text-white">
					<h1>Hello {name}</h1>
					<p>oenaoe einsraeiotn  enarstieo neioensart niesranteoi n nsearntei uytasrn tyuny srtyun ayut sryunt yunar tsyunrs tyuny ruystn uyn yunr tsyun  rsyuant yunrsat yu yurasnt yurns tuynrs tyunrs yutn yuasnt yurasnt yunrs tyunrs tyunrs tyunrs tyunsr atyunsra tyunsra tyun</p>
					<div className="relative w-full aspect-square">
						<div className="w-full h-full relative">
							<Image alt="flower" layout="fill" src={flower} />
						</div>
						<div className="absolute inset-20 h-full w-full">
							<div className="relative w-3/5 margin-auto h-2/3">
								<Image alt="Ocean" layout="fill" src={ocean1} />
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
	)
}

export default Invite;
