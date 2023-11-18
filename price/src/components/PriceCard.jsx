import {plans} from "../utils/plans";
import {Icon} from "@iconify/react";

function PriceCard() {
	return (
		<ol className="plans">
			{plans.map((plan, i) => {
				const {title, icon, byline, currency, symbol, amount, discount, features, button} = plan;

				return (
					<li
						key={title.toLowerCase()}
						className={`plan ${
							i === 0 ? "plan--launch" : i === 1 ? "plan--growth" : "plan--domination"
						}`}
						itemProp="offers"
						itemScope
						itemType="https://schema.org/Offer">
						<h3
							className="title"
							itemProp="name">
							<span>{title}</span>
							<Icon icon={icon} />
						</h3>

						<p
							className="byline"
							itemProp="description">
							{byline}
						</p>

						<span
							className="price"
							itemProp="priceCurrency"
							content={currency}>
							<bdi>
								<ins
									itemProp="price"
									content={discount}>
									{symbol} {discount}
								</ins>
								<del
									itemProp="price"
									content={amount}>
									{symbol} {amount}
								</del>
							</bdi>
						</span>

						<ul className="features">
							{features.map((feature, i) => (
								<li key={i}>{feature}</li>
							))}
						</ul>

						<button className="btn">{button}</button>
					</li>
				);
			})}
		</ol>
	);
}

export default PriceCard;
