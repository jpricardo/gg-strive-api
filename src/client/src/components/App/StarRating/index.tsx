import styles from './index.module.css';

type Props = { amount: number };
const StarRating: React.FC<Props> = ({ amount }) => {
	const getStars = () => {
		let stars = [];
		for (let i = 0; i < amount; i++) {
			stars.push(<div key={i} className={styles.star} />);
		}
		return stars;
	};

	return <div className={styles.container}>{getStars()}</div>;
};

export default StarRating;
