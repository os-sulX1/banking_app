import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

type Props = {};

const Home = (props: Props) => {
	const loggedIn = {
		firstName: "Sultan",
		lastName: "Saleh",
		email: "Sultanosaleh.97@gmail.com",
	};
	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="welcome"
						user={loggedIn.firstName ?? "Guest "}
						subtext="Access and mange your account and transactions efficiently ."
					/>
					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1250.35}
					/>
				</header>
				Rexent Transctions
			</div>

			<RightSidebar
				user={loggedIn}
				transitions={[]}
				banks={[{ currentBalance: 124.5 }, { currentBalance: 504.6 }]}
			/>
		</section>
	);
};

export default Home;
