export interface CollaboratorCardProps {
	colaborator: CollaboratorProps
}

export interface CollaboratorProps {
	imageUrl: string;
	name: string;
	email: string;
	description: string;
	linkedin?: string;
	instagram?: string;
	facebook?: string;
	github?: string;
	skills?: string[];
}