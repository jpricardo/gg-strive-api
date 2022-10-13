export interface IDatabaseModelProps {
	id?: string;
}

export default interface IDatabaseModel {
	toJson: () => IDatabaseModelProps;
}
