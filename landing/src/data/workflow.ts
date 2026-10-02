export interface WorkflowStep {
	title: string;
	text: string;
}

export const workflow = {
	title: 'How a project runs',
	steps: [
		{
			title: 'Site survey & requirement analysis',
			text: 'We measure the site and agree on what the sign needs to do.',
		},
		{
			title: 'Design concept & visualization',
			text: 'You see the sign in place before anything is made.',
		},
		{
			title: 'Engineering drawing & material approval',
			text: 'Structure, dimensions and materials signed off.',
		},
		{
			title: 'Mockup & placement',
			text: 'A physical test on site, when the project needs one.',
		},
		{
			title: 'Fabrication & production',
			text: 'Built in our Tangerang workshop.',
		},
		{
			title: 'Quality control & finishing',
			text: 'Every piece checked before it leaves.',
		},
		{
			title: 'Delivery & installation',
			text: 'Installed by our own crew, with crane where needed.',
		},
		{
			title: 'Handover documentation',
			text: 'Drawings and records for your facility team.',
		},
		{
			title: 'Maintenance & support',
			text: 'We stay on call after handover.',
		},
	] satisfies WorkflowStep[],
};
